import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';




export default class Life extends Component {

    static defaultProps = {
        text: ""
    }

    constructor(props) {
        super(props);
        console.log("constructor")
        this.state = {
            text: this.props.text || "world"
        };
    }
    componentWillMount = () => {
        console.log("componentWillMount")
    }

    shouldComponentUpdate=(nextState)=>{
        console.log("nextState",nextState)
        console.log("this.props.text",this.props.text)
        if(nextState.text === this.props.text){
            return false
        }
        return true
        console.log("shouldComponentUpdate") 
    } 

    componentDidMount = () => {
        console.log("componentDidMount")
        this.setState({
            text:"ok"
        })
    }
    componentWillUnmount = () => {
        console.log("componentWillUnmount")
    }
    componentWillUpdate=(nextProps,nextState)=>{
        console.log("nextProps",nextProps)
        console.log("nextState",nextState)
    }
    componentDidUpdate=(prevProps,prevState)=>{
        console.log("prevProps",prevProps)
        console.log("prevState",prevState)
    }

    init = () => {
        console.log("init")
    }

    render() {
        console.log("render")
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.text}</Text>
                {/* 对于有称谓的颜色，React Native遵循的是CSS3的规范: */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"yellow"

    },
    text: {
        height: 30


    }

});
