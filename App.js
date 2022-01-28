import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Inicial from './assets/src/Inicial';
import SignIn from './assets/src/SignIn';
const Stack = createStackNavigator();




export default function App()  {

  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicial">
    <Stack.Screen 
        name="Inicial" 
        component={Inicial}
        options={{headerShown: false}} />

<Stack.Screen 
        name="SignIn" 
        component={SignIn}
        options={{headerShown: false}} />

    </Stack.Navigator>
    
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  img:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
    marginLeft:-90
  },
  buttonLog:{
    backgroundColor:'#117BAE',
    height:65,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50,
    padding:3,
    marginTop:-355
  },
  buttonCad:{
    backgroundColor:'#05BC93',
    height:65,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50,
    padding:3,
    marginTop:-250
  },
  viewBotao:{
    width: '85%',
  
  },
});
