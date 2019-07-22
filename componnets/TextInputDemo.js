import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,TextInput } from 'react-native';





export default class TextInputDemo extends Component {
   
    constructor(props){
        super(props);
        this.state={
            text:"hello"
        }
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <TextInput style={{height:40,width:200,borderColor:"red",borderWidth:1}} value={this.state.value} onChangeText={(text)=>{this.setState(text)}}></TextInput>
            </View>


        );
    }

}




