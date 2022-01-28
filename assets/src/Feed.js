import React, {useState,useEffect,createRef} from 'react';
import {Text,View, FlatList, ScrollView, StyleSheet,TouchableOpacity,TextInput,ActivityIndicator,Image} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Block} from "galio-framework";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {Ionicons} from '@expo/vector-icons';
import { useScrollToTop } from '@react-navigation/native';
import Sphere from '../Components/sphere';

export default function Perfil() {
    let [fontsLoaded] = useFonts({
        'Balivia': require('../fonts/Balivia.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
        <ScrollView>
        <View style={styles.mainView}>
             <LinearGradient
      // Background Linear Gradient
      colors={['#07f49e','#0f68a9']}
      style={styles.background}
    />
             <View style={styles.containerLogo}>
    <Image style={{width:500, marginTop:5, marginLeft:-62.3}} resizeMode = "contain" source ={require('../img/Letter.png')}></Image>
    </View>
    <Image
               source ={require('../img/Veronica.png')}
                style={styles.imageView }
              />
                  
            <View style={styles.TextInputView}>
                <TextInput placeholder={"Pesquisar..."} placeholderTextColor={"#898888"} style={styles.TextInput}/>
            </View>
            <Text style={{ fontFamily: 'Balivia', fontSize:35, marginTop:-5,marginLeft:15 }}>Contatos</Text>
            <Sphere />
            <Block style={styles.divider} />

            <View style={styles.mainPostView}>
                    <FlatList
                        renderItem={({item,index})=>(
                            <View style={styles.postView}>
                                    <View style={styles.postTitle}>
                                        <View style={styles.imageView}>
                                            <Image style={styles.artistPhoto}   source ={require('../img/Veronica.png')}/>
                                            <View style={styles.titleView}>
                                                <Text style={styles.artist_name}>Veronica</Text>
                                                <Text style={styles.post_title}>Aprenda a fazer tinta guache para seus alunos...</Text>
                                            </View>
                                        </View> 
                                        <View>
                                            <Icon name="options-vertical" color="#989898"/>
                                        </View>
                                    </View>
                                    
                                    <TouchableOpacity style={styles.coverButton} >
                                        <Image style={styles.coverPhoto}   source ={require('../img/Veronica.png')}/>
                                    </TouchableOpacity>

                            </View>
                        )}
                    />
                

            </View>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    artist_name:{
        fontSize:16,
        fontWeight:'bold'
    },
    post_title:{
        fontSize:11,
        color:'#989898'
    },
    mainView:{
        flex:1,
    },
    titleView:{
        marginLeft:15,
    },  
    TextInput:{
        height:39,
        width:'90%',
        backgroundColor:'#EBEBEB',
        borderRadius:20,
        paddingLeft:15,
        marginTop:20,
        marginBottom:20,
    },
    TextInputView:{
        display:'flex',
        alignItems:'center',
    },
    mainPostView:{
        width:'100%',
        marginBottom:200
    },
    postTitle:{
        width:'90%',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    postView:{
        width:'100%',
        alignItems:'center',
        marginTop:40,
    },
    artistPhoto:{
        backgroundColor:'rgba(0,0,0,0.06)',
        width:50,
        height:50,
        borderRadius:50,
    },
    imageView:{
        width:60,
        height:60,
        borderRadius:60,
        marginLeft:335,
        marginTop:-29,
        marginBottom:-8
    },
    coverPhoto:{
        width:'100%',
        height:'100%',
        borderRadius:10,

    },
    coverButton:{
        width:'90%',
        height:200,
        backgroundColor:'rgba(0,0,0,0.06)',
        marginTop:20,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 135,
      },
      containerLogo:{
        width: 165,
        height: 165,
        borderWidth: 0,
        marginTop:-35,
        marginLeft:-85,
       
      },
      divider: {
        width: "70%",
        borderWidth: 0.9,
        borderColor: "#CECECE",
        marginTop:20,
        alignSelf:'center'
      },
    
})