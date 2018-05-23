import React, { Component } from 'react';
import  {View, Text, FlatList, TouchableHighlight, StyleSheet, ListItem} from 'react-native';
import Todo from './Todo';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
const styles = StyleSheet.create({
	button: {
		height: 60,
		borderColor: '#05A5D1',
		borderWidth:2,
		backgroundColor: '#333',
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color:'#fff',
		fontSize: 20,
		fontWeight: '600'

	}
})

class TodoList extends Component {
	
	constructor(props) {
		super(props)
		// const ds = new ListView.DataSource({
		// 	rowHasChanged: (r1, r2)=> r1!==r2
		// })

		// this.state = {

		// 	dataSource: ds.cloneWithRows(this.props.todos)
		// }
		this.renderRow = this.renderRow.bind(this)

	}
	// componentWillReceiveProps(newProps) {
	// if (newProps.todos !== this.props.todos) {
	
	// this.setState({
	// 	dataSource: this.state.dataSource.cloneWithRows(this.props.todos)
	// });
	// }
	// }
	renderRow(todo) {
		return(<Todo title={todo.title} />)
	}
	render() {
		if(this.props.todos.length===0) {
			return (
				<View>
				<Text>loading ...</Text>
				</View>
		)
		}else{
			return (
				<View>
				{
					<FlatList  data={this.props.todos} key={this.props.todos} renderItem={this.renderRow}></FlatList>

				}
				<TouchableHighlight onPress={this.props.onAdd}  style={styles.button}><Text style={styles.buttonText}>Add Todo</Text></TouchableHighlight>
				</View>

			)
		}
	}
}
const mapStateToProps = (state) => {
	return {
		todos: [...state.todos]
	}
}

export default connect(mapStateToProps)(TodoList);