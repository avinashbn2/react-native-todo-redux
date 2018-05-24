import React, { Component } from 'react';
import  {View, Text, FlatList, TouchableHighlight, StyleSheet,List, ListItem} from 'react-native';
import PropTypes from 'prop-types'
import Todo from './Todo'
import {connect} from 'react-redux'
import { Button, Card } from 'react-native-elements'

const styles = StyleSheet.create({
	button: {
		height: 60,
		borderColor: '#05A5D1',
		borderWidth:2,
		backgroundColor: '#333',
		margin: 20,
		justifyContent: 'center',
		alignItems:'center'
	},
	buttonText: {
		color:'#fff',
		fontSize: 20,
		fontWeight: '600'

	},
	container: {
		flex: 1
	}
})

class TodoList extends Component {
	
	constructor(props) {
		super(props)
		this.renderRow = this.renderRow.bind(this)

	}
	renderRow(todo) {
		return(	<ListItem key={todo.title} title={todo.title} subtitle={todo.title} />)
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
      <View style={{flex: 1}} >
        <View style={{flex: 0.8}}>

        <FlatList
          data={this.props.todos}
    		keyExtractor={({item})=> item}

          renderItem={({ item }) => (
          <Todo title={item.title} />
          )}
        />
      </View>
        <View style={{flex: 0.2}}>
				<Button  raised onPress={this.props.onAdd}  style={styles.button} title="Add Todo"></Button>
			      </View>
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