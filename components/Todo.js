import React, { Component } from 'react';
import  {View, Text, StyleSheet, ListItem} from 'react-native';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
		borderWidth: 1,
		borderColor: '#E7E7E7',
		padding: 20,
		flex:1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20
		
	},
	label: {
		fontSize: 20,
		fontWeight: '300',
		color: 'white'	

	}
})
class Todo extends Component {
	constructor(props) {
		super(props)

	}
	render() {
		return (
			<View style={styles.container}>
				<ListItem style={styles.label} title={this.props.title}></ListItem>
			</View>
		)
	}
}
Todo.propTypes = {
	title: PropTypes.string.isRequired
}
export default Todo