import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, ScrollView } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Block} from "galio-framework";



export default function Components() {
    let [fontsLoaded] = useFonts({
        'Caviar': require('../fonts/CaviarDreams_Bold.ttf'),
        'Cream': require('../fonts/cream-DEMO.otf'),
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
                <Image source ={require('../img/storage/images/me.jpg')}  style={{ width: 130, height: 130, borderRadius:100, alignContent:'center', marginTop:200}}></Image>
                <Ionicons
                    name= 'school'
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: '#07f49e',
                      marginLeft:8,
                      marginTop:280
                    }}
                  /> 
                   </View>
                   <View style={styles.ViewInit}> 
                   <Text style={{ fontSize:14, fontStyle:'italic', marginTop:-50,marginLeft:162 }}> Professora na Escola Técnica de São Paulo</Text>
                  </View>
                  
                <Text  style={{ fontFamily: 'Caviar', fontSize:26, marginTop:6,marginLeft:10 }}>Verônica Silva</Text>
                <View >
                <Image source ={require('../img/storage/images/shadow.png')}  style={{width: 110, height: 110, marginLeft:40, marginTop:13}}/>
                <Ionicons
                    name= 'people-circle-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#0f68a9',
                      marginLeft:80,
                      marginTop:-60
                    }}
                  /> 
</View>
<View>
<Image source ={require('../img/storage/images/shadow.png')}  style={{width: 110, height: 110, marginLeft:120, marginTop:-73}}/>
                 <Ionicons
                    name= 'ribbon-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#0f68a9',
                      marginLeft:160,
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
 < Image source ={require('../img/storage/images/shadow.png')}  style={{width: 110, height: 110, marginLeft:275, marginTop:-83}}/>
<Ionicons
                    name= 'library-outline'
                    style={{
                      paddingRight: 10,
                      fontSize: 30,
                      color: '#0f68a9',
                      marginLeft:315,
                      marginTop:-60
                    }}
                  /> 
                
                </View>
            <View>
    <Text style={{marginLeft:65,  fontWeight:'bold',color: '#0f68a9',}}>Amigos</Text>
            </View>
            <View>
            <Text style={{marginLeft:138, fontWeight:'bold', color: '#0f68a9',}}>Menções</Text>
            </View>
            <View>
            <Text style={{marginLeft:233, fontWeight:'bold',marginTop:-40,  color: '#0f68a9',}}>Editar</Text>
            </View>
            <View>
            <Text style={{marginLeft:296, fontWeight:'bold', marginTop:-20, color: '#0f68a9',}}>Arquivos</Text>
            </View>
            <Block style={styles.divider} />
<View>
<Text  style={{ fontFamily: 'Cream', color:'#07f49e', fontSize:30, fontWeight:'bold', marginTop:20,marginLeft:60 }}>298</Text>
<Text  style={{ fontFamily: 'Cream', color:'#0f68a9', fontSize:15, marginTop:5,marginLeft:55 }}>AMIGOS</Text>
<Text  style={{ fontFamily: 'Cream', color:'#07f49e', fontSize:30, fontWeight:'bold', marginTop:-72,marginLeft:198 }}>3</Text>
<Text  style={{ fontFamily: 'Cream', color:'#0f68a9', fontSize:15, marginTop:5,marginLeft:172 }}>MENÇÕES</Text>
<Text  style={{ fontFamily: 'Cream', color:'#07f49e', fontSize:30, fontWeight:'bold', marginTop:-72,marginLeft:310 }}>11</Text>
<Text  style={{ fontFamily: 'Cream', color:'#0f68a9', fontSize:15, marginTop:5,marginLeft:285 }}>ARQUIVOS</Text>

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
        marginTop:-350,

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