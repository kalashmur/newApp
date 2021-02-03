import React, {useState, useLayoutEffect} from 'react';
import {  ActivityIndicator, TextInput,FlatList, View,StyleSheet, TouchableOpacity,Image } from 'react-native';


export default VideoList = ({navigation,setInform}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value,setValue]= useState("");
  
  useLayoutEffect(() => { 
    fetch(`https://pixabay.com/api/videos/?key=18930768-828b80ccc406efc2df5c079ad&q=${value}&pretty=true`)
      .then((response) => response.json())
      .then((json) => setData(json.hits))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [value]);


  return (
    <View style={style.container}>
      <TextInput value={value} onChangeText={setValue} style={style.TextInput} placeholder='Search video'/> 
      {isLoading ? <ActivityIndicator/> :(
        <FlatList
          numColumns={2}
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View style={style.item}  >
              <TouchableOpacity onPress={() =>{
                 navigation.navigate('VideoDetails');
                 setInform(item)
                }
              }>
                <Image
                  source={{ uri:`https://i.vimeocdn.com/video/${item.picture_id}_295x166.jpg`  }}
	                style={{ width:295/2, height: 166/2 }}
	    />
              </TouchableOpacity>
            </View>
          
          )}
          /> )}
          </View>
      )}

 
const style = StyleSheet.create({
  item:{  
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    },
    container:{
      backgroundColor:'black'
    },
    
  TextInput:{
    flex:0,
    height: 35,
    width: '85%',
    borderRadius:10,
    paddingHorizontal:7,
    backgroundColor:'#808080',
    color:'silver',
    marginBottom:10,
    marginLeft:5
  },
  test:{
    color:'white'
  }
})