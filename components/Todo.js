import React, { Component } from 'react';
import  {View, Text} from 'react-native';
class Todo extends Component {
	constructor(props) {
		super(props)

	}
	render() {
		return (
			<Text>{this.props.title}</Text>
		)
	}
}
export default Todo