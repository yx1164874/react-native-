import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';




export default class Flex extends Component {




    render() {

        return (
            // React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 ,backgroundColor:"red"}}>

                </View>
                <View style={{ flex: 2 ,backgroundColor:"green"}}>

                </View>
                <View style={{ flex: 3 ,backgroundColor:"blue"}}>

                </View>
            </View>


        );
    }

}




