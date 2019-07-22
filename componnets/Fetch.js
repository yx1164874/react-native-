import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';




export default class Flex extends Component {

    componentDidMount() {
        fetch("", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
              }).then((response)=>{response.json()})
        })
    }


    render() {

        return (
            <View style={{ flex: 1 }}>

            </View>


        );
    }

}




