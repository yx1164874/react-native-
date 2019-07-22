import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';




export default class Style extends Component {




    render() {

        return (
            <React.Fragment>
                <Text style={{ color: "red" }}>
                    red
                    style属性可以是一个普通的JavaScript对象。
                    这是最简单的用法，因而在示例代码中很常见。
                    你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，
                    这样你可以间接实现样式的继承。
                </Text>
                <Text style={[{ color: "red" },{color:"blue"}]}>
                    red,then blue
                 </Text>
                 <Text style={[{ color: "blue" },{color:"red"}]}>
                    blue,then red
                    {/* 常见的做法是按顺序声明和使用style属性，以借鉴CSS中的“层叠”做法（即后声明的属性会覆盖先声明的同名属性）。 */}
                 </Text>
            </React.Fragment>


        );
    }

}




