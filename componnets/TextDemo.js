import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';




export default class TextDemo extends Component {
    // <Text>元素在布局上不同于其它组件：
    // 在Text内部的元素不再使用flexbox布局，而是采用文本布局。
    // 这意味着<Text>内部的元素不再是一个个矩形，而可能会在行末进行折叠。
    //


    render() {

        return (
            <React.Fragment>
                <Text style={{textAlign:"center",fontSize:20,lineHeight:20,fontWeight:"500",color:"red"}}>
                    parents
                    <Text>children</Text>
                </Text>
            </React.Fragment>


        );
    }

}




