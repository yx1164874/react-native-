import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, FlatList } from 'react-native';




export default class _FlatList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [
                { key: 'Devin' },
                { key: 'Jackson' },
                { key: 'James' },
                { key: 'Joel' },
                { key: 'John' },
                { key: 'Jillian' },
                { key: 'Jimmy' },
                { key: 'Julie' }
            ]
        }


    }
    renderItem = ({ item }) => {
        return (
        <View style={{height:30,justifyContent:"center",alignItems:"center",backgroundColor:"blue"}}>
            <Text style={{ backgroundColor: "red" }}>{item.key}</Text>
        </View>)


    }

    render() {

        return (
            // React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item})=>{
                        return <Text>{item.key}</Text>
                    }} >

                </FlatList>
            </View>


        );
    }

}




