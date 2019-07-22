import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, ActivityIndicator, Alert, Button ,PixelRatio} from 'react-native';
import HelloWorld from './componnets/helloworld'
import _Image from './componnets/Image'
import Style from './componnets/style'
import Flex from './componnets/Flex'
import Blank from './componnets/Blank'
import _FlatList from './componnets/FlatList'
import _SectionList from './componnets/SectionList'
import TextDemo from './componnets/TextDemo'
import ImageDemo from './componnets/ImageDemo'
import TextInputDemo from './componnets/TextInputDemo'
import Movie from './componnets/Movie'
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {}
  };
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello"
    };
  }

  onPressLearnMore = () => {
    //如果应用运行在一个高像素密度的设备上，显示的图片也应当分辨率更高。一个取得缩略图的好规则就是将显示尺寸乘以像素密度比：
    var dp=PixelRatio.roundToNearestPixel(400);

    this.setState({text:dp})
    // iOS和Android上都可用
    // Alert.alert(
    //   'Alert Title',
    //   'My Alert Msg',
    //   [
    //     { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
    //     { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    //   ],
    //   { cancelable: false }
    // )
    
  }

  render() {
    return (
      <View style={styles.container} accessible={true}>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          
        />
        <Text >{this.state.text}</Text>
       <_Image></_Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Platform.OS = "ios" ? 30 : 0,



  }

});
