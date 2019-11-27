import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from './../Button';

class Contador extends Component {
  state = {
    value: 10,
  };

  addValue() {
    return this.setState({value: this.state.value + 1});
  }

  removeValue() {
    return this.setState({value: this.state.value - 1});
  }

  render() {
    const {value} = this.state;

    return (
      <View>
        <Button title="incrementar" onPress={() => this.addValue()} />
        <Text>{value}</Text>
        <Button title="decrementar" onPress={() => this.removeValue()} />
      </View>
    );
  }
}

export default Contador;
