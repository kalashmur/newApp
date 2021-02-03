import React, {useState, useLayoutEffect} from 'react';
import {  ActivityIndicator, TextInput,FlatList, View, Image,StyleSheet, TouchableOpacity } from 'react-native';
export default PhotoList = ({navigation,setInform}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value,setValue]= useState("");
 
  
  useLayoutEffect(() => {
    fetch(`https://pixabay.com/api/?key=18930768-828b80ccc406efc2df5c079ad&q=${value}&image_type=photo&pretty=true`)
      .then((response) => response.json())
      .then((json) => setData(json.hits))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [value]);


  return (
    <View style={style.container}>
      <TextInput value={value} onChangeText={setValue} style={style.TextInput} placeholder='Search photo'/> 
      {isLoading ? <ActivityIndicator/> :(
        <FlatList  
          numColumns={2}
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View style={style.item}  >
              <TouchableOpacity onPress={() =>{
                 navigation.navigate('PhotoDetails');
                 setInform(item)
                }
              }>
                <Image source={{uri: item.previewURL}}
                    style={{width: item.previewWidth , height:item.previewHeight , borderRadius:5}}
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
    padding:'2%',
    paddingHorizontal:'-2%',
    },
    container:{
      backgroundColor:'black',
      paddingHorizontal:'4%'
    },
    
  TextInput:{
    flex:0,
    height: 35,
    width: '95%',
    borderRadius:10,
    backgroundColor:'#808080',
    color:'silver',
    marginBottom:10,
    paddingLeft:7
  },
})