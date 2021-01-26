import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ComponentScreen extends Component {
  state = { a: 1 }

  handleChangeState = () => {
    this.setState({ a: 1 });
  }

  render() {
    const { a } = this.state;
    console.log('render ComponentScreen');
    return (
      <View>
        <Text>Component Test</Text>
        <Button
          title="Change state"
          onPress={this.handleChangeState}
        />
        <TestView a={a} />
      </View>
    );
  }
}

class TestView extends Component {
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

export default ComponentScreen;
