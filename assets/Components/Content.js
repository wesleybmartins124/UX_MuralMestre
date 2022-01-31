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
                <View >
                <Image source ={require('../img/storage/images/shadow.png')}  style={{width: 110, height: 110, marginLeft:60, marginTop:-13}}/>
                <Ionicons
                    name= 'people-circle-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#0f68a9',
                      marginLeft:100,
                      marginTop:-60
                    }}
                  /> 
</View>
<View>
<Image source ={require('../img/storage/images/shadow.png')}  style={{width: 110, height: 110, marginLeft:130, marginTop:-73}}/>
                 <Ionicons
                    name= 'ribbon-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#0f68a9',
                      marginLeft:168,
                      marginTop:-60
                    }}
                  /> 
</View>
<View>
<Image source ={require('../img/storage/images/shadow.png')}  style={{width: 110, height: 110, marginLeft:200, marginTop:-93}}/>
              <Ionicons
                    name= 'pencil-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#0f68a9',
                      marginLeft:240,
                      marginTop:-60
                    }}
                  /> 
                  
  </View>
  <View>
 < Image source ={require('../img/storage/images/shadow.png')}  style={{width: 110, height: 110, marginLeft:270, marginTop:-83}}/>
<Ionicons
                    name= 'cog-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#0f68a9',
                      marginLeft:309,
                      marginTop:-60
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
        alignSelf:'center',
        marginBottom:15
      },
 
})