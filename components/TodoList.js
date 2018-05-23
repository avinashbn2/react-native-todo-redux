import React, { Component } from 'react';
import  {View, Text, ListView} from 'react-native';
import Todo from './Todo';
import PropTypes from 'prop-types'
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
	}
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
					<ListView dataSource={this.state.dataSource} key={this.props.todos} renderRow={this.renderRow}></ListView>

				}
				</View>

			)
		}
	}
}
TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default TodoList;