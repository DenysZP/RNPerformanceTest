import React, { Component, PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { Map } from 'immutable';

class PureComponentScreen extends Component {
  state = {
    a: 1,
    b: { c: { d: 'e' } },
    c: Map({ d: Map({ e: 'f' }) }),
  }

  handleChangeState = () => {
    this.setState({ a: 1 });
  }

  handleComplexChangeState = () => {
    this.setState({ b: { c: { d: 'e' } } });
  }

  handleImmutableChangeState = () => {
    this.setState({ b: { c: { d: 'e' } } });
  }

  render() {
    const { a, b } = this.state;
    console.log('render PureComponentScreen');
    return (
      <View>
        <Text>PureComponent Test</Text>
        <Button
          title="Change state"
          onPress={this.handleChangeState}
        />
        <Button
          title="Complex change state"
          onPress={this.handleComplexChangeState}
        />
        <Button
          title="Immutable change state"
          onPress={this.handleImmutableChangeState}
        />
        <TestView a={a} b={b} />
      </View>
    );
  }
}

class TestView extends PureComponent {
  renders = 0

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

export default PureComponentScreen;
