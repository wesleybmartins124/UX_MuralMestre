import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, ScrollView } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Block} from "galio-framework";



export default function Components() {
    let [fontsLoaded] = useFonts({
        'Caviar': require('../fonts/CaviarDreams_Bold.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      
    }

 return (
   
   <View>
      <Image source ={require('../img/storage/images/love.jpg')}  style={{ width: '110%', height: '52%',  marginLeft:-20}}></Image>
      <TouchableOpacity style={styles.buttonLog} >
                  <Ionicons
                    name= 'arrow-back-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: 'white',
                      marginLeft:10,
                      marginTop:8
                    }}
                  />
                </TouchableOpacity>
                <View style={styles.ViewInit}> 
                <Image source ={require('../img/storage/images/me.jpg')}  style={{ width: 130, height: 130, borderRadius:100, alignContent:'center', marginTop:50}}></Image>
                <Ionicons
                    name= 'school'
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: '#07f49e',
                      marginLeft:8,
                      marginTop:130
                    }}
                  /> 
                   </View>
                   <View style={styles.ViewInit}> 
                   <Text style={{ fontSize:14, fontStyle:'italic', marginTop:-50,marginLeft:162 }}> Professora na Escola Técnica de São Paulo</Text>
                  </View>
                  
                <Text  style={{ fontFamily: 'Caviar', fontSize:26, marginTop:6,marginLeft:6 }}>Verônica Silva</Text>
                <Block style={styles.divider} />
                <View>
                <Image source ={require('../img/storage/images/shadows.png')}  style={{width: 300, height: 100, alignSelf:'center', marginTop:8}}/>
                <Ionicons
                    name= 'people-circle-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#0f68a9',
                      marginLeft:95,
                      marginTop:-60
                    }}
                  /> 

                 <Ionicons
                    name= 'ribbon-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#07f49e',
                      marginLeft:149,
                      marginTop:-48
                    }}
                  /> 

              <Ionicons
                    name= 'pencil-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#0f68a9',
                      marginLeft:202,
                      marginTop:-28
                    }}
                  /> 

<Ionicons
                    name= 'cog-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#07f49e',
                      marginLeft:250,
                      marginTop:-28
                    }}
                  /> 
                
                </View>

                
             
              
</View>  

);
}
const styles = StyleSheet.create({
    buttonLog:{
        backgroundColor:'#117BAE',
        height:50,
        alignItems:'center',
        borderRadius: 100,
        padding:1,
        width:50,
        marginLeft:5,
        marginBottom:30,
        marginTop:-200,

      },
      ViewInit:{
      flexDirection:'row'
      },
      divider: {
        width: "90%",
        borderWidth: 0.5,
        borderColor: "#CECECE",
        marginTop:20,
        alignSelf:'center'
      },
 
})