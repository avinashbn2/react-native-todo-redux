import React, { Component } from 'react';
import  {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#F6F6F6'
    },
    input: {
        borderColor: '#D7D7D7',
        borderWidth: 1,
        height: 50,
        marginLeft: 10,
        marginRight: 1,
        padding:15,
        borderRadius: 3,

    },
    button: {
        height: 45,
        backgroundColor: 'blue',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    },
    cancelButton: {
        backgroundColor: 'red',

    }
})
class TodoForm extends Component {
    static navigationOptions = {
        title: 'Add'
    }
    
	constructor(props, context) {
		super(props, context)
        this.state = {
            todo: ''
        }
        this.onCancel = this.onCancel.bind(this)
        this.onAddTodo = this.onAddTodo.bind(this);

    }
    onAddTodo() {
        
    }
    onCancel() {
        this.props.navigation.navigate('Home')
    }
	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.input} onChangeText={(text)=> this.input = text}/>
                <TouchableHighlight style={styles.button} onPress={this.onAddTodo}><Text style={styles.buttonText}>Add</Text></TouchableHighlight>
                <TouchableHighlight style={[styles.button,styles.cancelButton]} onPress={this.onCancel}><Text style={styles.buttonText}>Cancel</Text></TouchableHighlight>

			</View>
		)
	}
}
export default TodoForm