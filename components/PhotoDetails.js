import React from 'react';
import { View, Image, StyleSheet,Text} from 'react-native';

export default InformPhoto = ({inform}) => {

  return (  
            <View style={style.ImageContainer}> 
              <Image source={{uri: inform.webformatURL}}
                    style={{width: inform.webformatWidth/1.8 , height:inform.webformatHeight/1.8 ,borderRadius:5}}
                    />
              <View style={style.userContainer}><Image source={{uri: inform.userImageURL}} style={{width:40, height:40,borderRadius:20}}/>
              <Text style={style.text}>{inform.user}</Text>
              </View>
              <Text style={style.text}>Tags: {inform.tags}</Text>
            </View>
          )
        }
  
  
const style = StyleSheet.create({
  ImageContainer:{
    flex:1,
    paddingHorizontal:15,
    backgroundColor:'black',
  },
  text:{
    margin:10,
    color:'white',
    fontSize:20 
  },
  userContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop: 15,
    
  }

})