import React, { Component } from 'react';
import  {View, Text, ListView, TouchableHighlight, StyleSheet} from 'react-native';
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
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2)=> r1!==r2
		})

		this.state = {

			dataSource: ds.cloneWithRows(this.props.todos)
		}
		this.renderRow = this.renderRow.bind(this)
		this.onAdd = this.onAdd.bind(this)

	}
	
	renderRow(todo) {
		return(<Todo title={todo.title} />)
	}
	render() {
		if(this.state.dataSource.length===0) {
			return (
				<View>
				<Text>loading ...</Text>
				</View>
		)
		}else{
			return (
				<View>
				{
					<ListView dataSource={this.state.dataSource} key={this.props.todos} renderRow={this.renderRow}></ListView>

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