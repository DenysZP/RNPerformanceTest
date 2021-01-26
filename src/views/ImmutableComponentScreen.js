import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Map } from 'immutable';

class ImmutableComponentScreen extends Component {
  state = { a: 1, b: Map({ c: Map({ d: 'e' }) }) }

  handleChangeState = () => {
    this.setState({ a: 1 });
  }

  handleComplexChangeState = () => {
    this.setState({ b: Map({ c: Map({ d: 'e' }) }) });
  }

  render() {
    const { a, b } = this.state;
    console.log('render ImmutableComponentScreen');
    return (
      <View>
        <Text>Immutable Component Test</Text>
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
    const result = !Object.keys(this.props).every((key) => {
      // eslint-disable-next-line react/destructuring-assignment
      const val = this.props[key];
      const nextVal = nextProps[key];

      if (typeof val.equals === 'function') {
        return val.equals(nextVal);
      }
      return val === nextVal;
    });
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

export default ImmutableComponentScreen;
