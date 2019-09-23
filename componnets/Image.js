import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, PixelRatio,ImageBackground ,Dimensions} from 'react-native';
const px2rn = px=>PixelRatio.getPixelSizeForLayoutSize(px);
const px2rn2 = px=>PixelRatio.roundToNearestPixel(px);
const {width, height } = Dimensions.get('window')
//设置助学知识专栏图片宽度
var ZHU_XUE_ZHI_SHI=width-width*0.08;
//设置诚信教育图片宽度
var CHENG_XING_JIAO_YU=width-width*0.12;
//设置金融课堂图片高度
var JIN_RONG_KE_TANG=height*0.17;
var _JIN_RONG_KE_TANG=(JIN_RONG_KE_TANG-JIN_RONG_KE_TANG*0.038)/2;
//设置金融课堂图片宽度
var __JIN_RONG_KE_TANG=CHENG_XING_JIAO_YU/2-width*0.012;
//设置信用卡知识图片高度
var XING_YONG_KA_ZHI_SHI=height*0.11;

export default class _Image extends Component {




  render() {

    return (

      <Image resizeMode="cover" source={require("../image/believeLife6.png")} style={{ width: px2rn2(__JIN_RONG_KE_TANG), height: px2rn2(_JIN_RONG_KE_TANG),backgroundColor:"grey" }}>
      
      </Image>

    );
  }

}




