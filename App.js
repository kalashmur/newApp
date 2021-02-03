import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PhotoList from "./components/PhotoList";
import InformPhoto from "./components/PhotoDetails" ;
import VideoList from "./components/VideoList";
import InformVideo from "./components/VideoDetails"


export default App = () => {
  const [inform,setInform]= useState();



  const PhotoStack = createStackNavigator();
  const PhotoStackScreen=()=>( 
    <PhotoStack.Navigator initialRouteName="PhotoHome">
    <PhotoStack.Screen options= {{headerShown: false}}  name="PhotoHome" component={PhotoHome}/>
    <PhotoStack.Screen options= {{headerShown: false}}  name="PhotoDetails" component={PhotoDetails} />
  </PhotoStack.Navigator>
  ) 
  const PhotoHome = ({navigation}) =>(
  <PhotoList navigation={navigation} setInform={setInform} />    
     )
  const PhotoDetails=()=>(
  <InformPhoto inform={inform}/>
  )

  const VideoStack=createStackNavigator();
  const VideoStackScreen=()=>(
    <VideoStack.Navigator initialRouteName="VideoHome">
    <VideoStack.Screen options= {{headerShown: false}}  name="VideoHome" component={VideoHome}/>
    <VideoStack.Screen options= {{headerShown: false}}  name="VideoDetails" component={VideoDetails} />
  </VideoStack.Navigator> 
  )
  const VideoHome=({navigation})=>(
    <VideoList navigation={navigation} setInform={setInform}/>
  )
  const VideoDetails=()=>(
    <InformVideo inform={inform}/>
  )




  const Tab = createBottomTabNavigator();
  return (
    <View style={style.container}>
              <NavigationContainer>
                <Tab.Navigator tabBarOptions={{activeTintColor: 'tomato', style: { backgroundColor: "#221f1f",height:25}}} initialRouteName='Photo'>
                <Tab.Screen name="Photo" component={PhotoStackScreen} />
                <Tab.Screen name="Video" component={VideoStackScreen} />
                </Tab.Navigator>
            </NavigationContainer>
    </View>
  );
};


const style = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:42,
    backgroundColor:'black',
  }
})