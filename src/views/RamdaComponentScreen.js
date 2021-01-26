import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { equals } from 'ramda';

class RamdaComponentScreen extends Component {
  state = { a: 1, b: { c: { d: 'e' } } }

  handleChangeState = () => {
    this.setState({ a: 1 });
  }

  handleComplexChangeState = () => {
    this.setState({ b: { c: { d: 'e' } } });
  }

  render() {
    const { a, b } = this.state;
    console.log('render RamdaComponentScreen');
    return (
      <View>
        <Text>Ramda Component Test</Text>
        <Button
          title="Change state"
          onPress={this.handleChangeState}
        />
        <Button
          title="Complex change state"
          onPress={this.handleComplexChangeState}
        />
        <TestView a={a} b={b} />
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

export default RamdaComponentScreen;
