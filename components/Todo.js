import React, { Component } from 'react';
import  {View, Text, StyleSheet , TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		backgroundColor: '#dedede',
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
		color: 'green'	

	}
})
class Todo extends Component {
	constructor(props) {
		super(props)

	}
	render() {
		return (
	<TouchableHighlight>
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.title}</Text>
      </View>
    </TouchableHighlight>

		)
	}
}
Todo.propTypes = {
	title: PropTypes.string.isRequired
}
export default Todo