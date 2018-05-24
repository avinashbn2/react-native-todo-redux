import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react'
import TodoForm from './components/TodoForm'
import {createStore, combineReducers} from 'redux'
import { Provider,connect } from 'react-redux';
import Test from './components/Test'
import {
    NavigationActions,
    addNavigationHelpers,
    StackNavigator,
} from 'react-navigation';
  
const defaultState = {
    todos : [{title: 'Clean R9o00m'}, {title: 'Drink Milk'},{title: 'Clean R9o00m'}, {title: 'Drink Milk'},{title: 'Clean R9o00m'}, {title: 'Drink Milk'},{title: 'Clean R9o00m'}, {title: 'Drink Milk'}],
}
const todoStore = (state=defaultState, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TODO':
            return {todos: [...state.todos, {title: action.value}]}
        default:
        return state
    }
}
const RootStack = StackNavigator({
    Home:  {screen: App},
    Add: {screen: TodoForm},
    Test: {screen: Test}
  },   {
    initialRouteName: 'Home',
  }
  );


  const store = createStore(todoStore);

  class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <RootStack />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('myapp', ()=> Root);
