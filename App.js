import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, ActivityIndicator, Alert, Button, PixelRatio, Dimensions } from 'react-native';
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
import Life from './componnets/Life'
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');
if (!__DEV__) {
  global.console = {
    info: () => { },
    log: () => { },
    warn: () => { },
    debug: () => { },
    error: () => { }
  };
}
const { height, width } = Dimensions.get('window');
const isIphoneX = (Platform.OS === 'ios' && (Number(((height / width) + "").substr(0, 4)) * 100) === 216);
export default class App extends Component {

  static defaultProps = {
    visible: ""
  }

  constructor(props) {
    super(props);

    this.state = {
      text: "ssssss"
    };
  }

  isIphoneX = (v) => {

    if (v === "bottom") {
      return (
        isIphoneX ?
          <View style={{ backgroundColor: "#fff", height: 34 }}>

          </View>
          :
          null)
    }else{
      if(Platform.OS==="ios"){
        return (
          isIphoneX ?
            <View style={{ backgroundColor: "#fff", height: 32 }}>
  
            </View>
            :
            <View style={{ backgroundColor: "#fff", height: 20 }}>
  
            </View>)
      }else{
        return null
      }
    }

  }



  componentDidMount = () => {
    console.log("componentDidMount")

  }


  onPressLearnMore = () => {
    //如果应用运行在一个高像素密度的设备上，显示的图片也应当分辨率更高。一个取得缩略图的好规则就是将显示尺寸乘以像素密度比：
    var dp = PixelRatio.roundToNearestPixel(400);

    this.setState({ text: dp })
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

  // flex 为1时撑满父类高度，marginTop 50% 撑开父类组件高度的 1/4, 

  render() {

    return (
      <View style={styles.container} >
        {
          this.isIphoneX("top")
        }
        <View style={{ flex: 1}}>
          
        </View>
        {
          this.isIphoneX("bottom")
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }

});
