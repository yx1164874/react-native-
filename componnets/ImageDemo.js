import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';





export default class _Image extends Component {
    // 请注意对于网络和 base64 数据的图片需要手动指定尺寸！

    //默认情况下 Android 是不支持 GIF 和 WebP 格式的。你需要在android/app/build.gradle文件中根据需要手动添加以下模块：

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Image onLoad={()=>{console.log("onLoad")}} source={require('../image/correct.png')} ></Image>
                <Image style={{width: 50, height: 50}} source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} ></Image>
                <Image style={{width: 66, height: 58}} source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='"}} ></Image>
            </View>


        );
    }

}




