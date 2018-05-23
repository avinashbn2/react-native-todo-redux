/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TodoList from './components/TodoList'
import { connect } from 'react-redux';


 class App extends Component {
  static navigationOptions = {
		title: 'Home'
	  }

  constructor(props) {
    super(props)
    this.onAdd = this.onAdd.bind(this);

  }
  onAdd() {
    this.props.navigation.navigate('Add')
  }
  render() {
    return(
      <TodoList todos={this.props.todos}  onAdd={this.onAdd} onCancel={this.onCancel}/>
    )
  }

}
const mapStateToProps = (state) => {
	return {
		todos: [...state.todos]
	}
}
export default connect(mapStateToProps)(App);

