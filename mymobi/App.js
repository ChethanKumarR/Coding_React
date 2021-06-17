import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import ProductList from './component/productlist';

export default function App() {
  const[MyText,setText]= useState("My Mobile App")
  const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch = () => setIsEnabled(setText("Click Switch"));


  return (
    <View style={styles.container}>
      <Text>Welcome To React Native !</Text>
      <ProductList/>
      <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      <Text>{MyText}</Text>
      <StatusBar style="auto" />
      {/* <Button title="Click Me" style= {styles.mybutton} onPress={()=>{setText('Button clicked')}}/> */}
      <Button title="Click Me" color="#841584" onPress={()=>{setText('Button clicked')}}/>
      <Button title="Revert" onPress={()=>{setText('My Mobile App')}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mybutton: {
    backgroundColor:'red',
    color:'green'
  },
  myText:{
    textAlign:'center'
  }
});
