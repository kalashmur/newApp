import React from 'react';
import {  View, Dimensions, StyleSheet } from 'react-native';
import { Video } from 'expo-av' 
export default InformVideo = ({inform}) => {

const dimensions = Dimensions.get('window');
const videoWidth = dimensions.width-30;
const videoHeight =videoWidth/inform.videos.tiny.width*inform.videos.tiny.height ;

  return ( 
    <View style={style.VideoContainer}>
	    <Video
          source={{ uri: inform.videos.tiny.url }}
          useNativeControls={true}
          shouldPlay   
	        resizeMode="cover"
	        style={{ width:videoWidth, height: videoHeight }}
	    />
    </View>
  )
}

const style = StyleSheet.create({
  VideoContainer:{
    flex:1,
    paddingHorizontal:15,
    backgroundColor:'black',
  },
})