import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function AddTodo( {submitHandler}){
    const [text, setText]= useState('');
    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput  
            style = {styles.input}
            placeholder='new todo..'
            onChangeText={changeHandler}
            />

            <Button onPress={()=> submitHandler(text)} title= 'add todo' Color='coral' />
        </View>        
    )
}

const styles= StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd',
    }
})
