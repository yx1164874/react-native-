import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';




export default class Blank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowingText: false
        }
        
        setInterval(()=>{
            this.setState(previousState=>{
                return {isShowingText:!previousState.isShowingText}
            })
        },1000)
    }



    render() {
        if (!this.state.isShowingText) {
            return null
        }

        return (
            <React.Fragment>
                <Text>{this.props.text}</Text>
                <Text>hello world</Text>
            </React.Fragment>


        );
    }

}




