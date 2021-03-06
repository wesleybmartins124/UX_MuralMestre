import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Inicial from './assets/src/Inicial';
import SignIn from './assets/src/SignIn';
import Login from './assets/src/Login';
import Feed from './assets/src/Feed';
import Sphere from './assets/Components/Sphere';
import Status from './assets/Components/Status';
import Post from './assets/Components/Post';
import ProfPost from './assets/Components/ProfPost';
import Content from './assets/Components/Content';
import Chat from './assets/Components/Chat';
import Messages from './assets/Components/MessagesScreen';

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
<Stack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown: false}} />



<Stack.Screen 
        name="Feed" 
        component={Feed}
        options={{headerShown: false}} />
        <Stack.Screen 
        name="Sphere" 
        component={Sphere}
        options={{headerShown: false}} />

<Stack.Screen 
        name="Status" 
        component={Status}
        options={{headerShown: false}} />


<Stack.Screen 
        name="Post" 
        component={Post}
        options={{headerShown: false}} />

        <Stack.Screen 
        name="ProfPost" 
        component={ProfPost}
        options={{headerShown: false}} />

<Stack.Screen 
        name="Content" 
        component={Content}
        options={{headerShown: false}}  />

<Stack.Screen 
        name="Chat" 
        component={Chat}
        options={{headerShown: false}}  />

<Stack.Screen 
        name="Messages" 
        component={Messages}
        options={{headerShown: false}}  />

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
