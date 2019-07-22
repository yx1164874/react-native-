import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, FlatList,SectionList } from 'react-native';




export default class _SectionList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: 'D', data: ['Devin'] },
                { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
            ]
        }


    }
    renderItem = ({ item }) => {
        return (
            <View style={{ height: 30, justifyContent: "center", alignItems: "center", backgroundColor: "blue" }}>
                <Text style={{ backgroundColor: "red" }}>{item.key}</Text>
            </View>)


    }

    render() {

        return (
            // React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
            <View style={{ flex: 1 }}>
                <SectionList
                    sections={this.state.data}
                    renderItem={({item})=>{
                        return <Text>{item}</Text>
                    }}
                    renderSectionHeader={({section})=>{
                        return <Text>{section.title}</Text>
                    }}
                    keyExtractor={(item,index)=>index}
                    >

                </SectionList>
            </View>


        );
    }

}




