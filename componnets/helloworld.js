import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';




export default class HelloWolrd extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello world</Text>
        {/* 对于有称谓的颜色，React Native遵循的是CSS3的规范: */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
    
  },
  text:{
    height:30
   

  }

});
