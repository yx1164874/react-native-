import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, PixelRatio,ImageBackground } from 'react-native';




export default class _Image extends Component {




  render() {

    return (

      <ImageBackground source={require("../image/correct.png")} style={{ width: 200, height: 200,backgroundColor:"grey" }}>
        <Text>Inside</Text>
      </ImageBackground>

    );
  }

}




