import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, Value, Alert, TextInput, View, FlatList} from 'react-native';

export default function App() {

  const [text, setText] = useState("");
  const[data, setData] = useState([]);

  const addData = () => {
    setData([...data, {key: text}]);
    setText('');
  }
  const clearData = () => {
    setData([""])
  }
      
  
  return(
    
    <View style={styles.container}>
     
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        text={text}
      />

      <View style={styles.buttons}>
      <Button onPress={addData} title="Add"/>
      <Button onPress={clearData} title="Clear"/> 
      </View>
      <FlatList
        data={data}
        renderItem = {({item}) =>
          <Text>{item.key}
          </Text>}
        />
      
  </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 100,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

   input: {
     
    width:200, 
    borderColor:'gray', 
    borderWidth:1,
    justifyContent: 'center',
   },
   
   buttons: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
   }

});
