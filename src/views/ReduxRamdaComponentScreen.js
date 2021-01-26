import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { equals } from 'ramda';

import { fooSelector, barSelector } from '../state/selectors';
import { changeFoo as changeFooAction, changeBar as changeBarAction } from '../state/actions';

class ReduxRamdaComponentScreen extends Component {
  handleChangeFoo = () => {
    const { changeFoo } = this.props;
    changeFoo({ a: 1 });
  }

  handleChangeBar = () => {
    const { changeBar } = this.props;
    changeBar({ b: 2 });
  }

  testFun = () => {

  }

  render() {
    const { foo, bar } = this.props;
    console.log('render ReduxRamdaComponentScreen');
    return (
      <View>
        <Text>Component Test</Text>
        <Button
          title="Change foo"
          onPress={this.handleChangeFoo}
        />
        <Button
          title="Change bar"
          onPress={this.handleChangeBar}
        />
        <TestView foo={foo} bar={bar} testFun={this.testFun} />
      </View>
    );
  }
}

class TestView extends Component {
  renders = 0

  shouldComponentUpdate(nextProps) {
    console.time('shouldComponentUpdate');
    const result = !equals(nextProps, this.props);
    console.timeEnd('shouldComponentUpdate');
    return result;
  }

  render() {
    this.renders++;
    console.log('render TestView');
    return (
      <View>
        <Text>Sub Component</Text>
        <Text>{`renders ${this.renders}`}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  foo: fooSelector(state),
  bar: barSelector(state),
});

const mapDispatchToProps = {
  changeFoo: changeFooAction,
  changeBar: changeBarAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxRamdaComponentScreen);
