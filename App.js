/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TodoList from './components/TodoList'

import {
  StyleSheet,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos : [{title: 'Clean Room'}, {title: 'Drink Milk'}],

    }
  }
  render() {
    return (
      <View style={styles.container}>
        
        <TodoList todos={this.state.todos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
