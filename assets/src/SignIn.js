import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View,ScrollView,Image,TouchableOpacity} from 'react-native';
import { Block, Checkbox, Text, theme, Button, Input} from "galio-framework";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';


export default function SignIn() {

  const navigation = useNavigation();

 return (
  <View style={styles.container}>
  <LinearGradient
    // Background Linear Gradient
    colors={['#07f49e','#0f68a9']}
    style={styles.background}
  />
         <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: '16.5%' }}
        >
           <Block  style={styles.profileCard} >
            <Block middle style={styles.avatarContainer}>
          
                    <Block flex>
                  <Block middle style={styles.cadstyle}>
                 
                  <Block flex={0.25} middle>
                <Text color="#8898AA" size={12}>
                  Cadastre-se com :
                </Text>
               </Block>
                      <Button style={styles.socialButtons}>
                      <Block row>
                      <Ionicons name="logo-google" color="#000" size={16}  style={{ marginTop: 2, marginRight: 5 }} ></Ionicons> 
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                    </Button>
                 
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  </Block>
                  </Block>
                  <Block
                    row
                    space="between"
                    
                  >
                        <Text size={13} color="#32325D"  >
                    </Text>
                    </Block>
                    <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                  Ou continue abaixo:
                  </Text>
                </Block>
                    <Block >  
                    <Image
               source ={require('../img/Veronica.png')}
                style={styles.avatar2}
              />
    
    <TouchableOpacity style={styles.buttonCad}>
    <Ionicons name="add-circle" color="#05BC93" size={70}/> 
    </TouchableOpacity>
    
                    <Input
                       
                        placeholder="Name"
                        style ={{backgroundColor:'#FFF'}}
                        iconContent={
                          <Ionicons name="person-outline" color="#0f68a9" size={20}/> }
                          
                    
                 />

                
                   
                  </Block>
                
                 
                  <Block >  
                    
                    <Input
      
                        placeholder="Name"
                        style ={{backgroundColor:'#FFF'}}
                        iconContent={
                          <Ionicons name="school-outline" color="#0f68a9" size={20}/> }
                    
                 />
                  </Block>
                

                  <Block >  
                    
                    <Input
                    
                        placeholder="Name"
                        style ={{backgroundColor:'#FFF'}}
                        iconContent={
                          <Ionicons name="card-outline" color="#0f68a9" size={20}/> }
                    
                 />
                  </Block>

            
                  <Block >  
                    
                    <Input
                       
                        placeholder="Name"
                        style ={{backgroundColor:'#FFF'}}
                        iconContent={
                          <Ionicons name="lock-closed-outline" color="#0f68a9" size={20}/> }
                    
                 />
                  </Block>
                  <Block >  
                    
                    <Input
                      
                        placeholder="Name"
                        style ={{backgroundColor:'#FFF'}}
                        iconContent={
                          <Ionicons name="people-circle-outline" color="#0f68a9" size={20}/> }
                    
                 />
                  </Block>
                   <Block
                    flex
                   middle
                    
                    >
                         <View style={styles.viewBotao2}>
                        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Feed')}>
                        <Text style={{ fontFamily: 'Caviar', color: "#fff", fontSize: 20 }}>Cadastrar</Text>
                        </TouchableOpacity>
                        </View>

                    </Block>

                  <Block> 
           
                    <Text bold size={16} color="#525F7F" style={{top: 10}}>

                    </Text>

                    
                   
                  </Block>
                  
          </Block>
          </ScrollView>
           </View>
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
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff0",
    shadowColor: '#000',
    borderRadius:20,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    
  },
  viewBotao:{
    width: '18%',
  },
  registerContainer: {
    backgroundColor: "#456A8E",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    borderColor: "#8898AA"
  },
  profileContainer: {
    padding: 0,
    flex:1
  
  },
  profileCard: {
    // position: "relative",
    marginTop: 0,
    padding: theme.SIZES.BASE,
   marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: '#F4F5F7',
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
    borderRadius:60/2,
    width:350,

  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 170,
    height: 170,
    borderRadius: 170/2,
    borderWidth: 0,
    marginTop:15
  },
  avatar2: {
      width: 165,
      height: 165,
      borderRadius: 165/2,
      borderWidth: 0,
      marginTop:20,
      marginLeft:75
    },
  cadstyle: {
    marginTop: 100
  },
  divider: {
    width: "128%",
    borderWidth: 1,
    borderColor: "#0f68a9",
    marginTop:-20
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",

  },
  buttonCad:{
    backgroundColor:'transparent',
    height:75,
    width:75,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 75/2,
    padding:3,
    marginTop:-68,
    marginLeft:165
  },
  buttonRegister:{
    backgroundColor:'#05BC93',
    height:65,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50,
    padding:3,
    marginTop:20,
    marginLeft:5,
    
  },
  viewBotao2:{
    width: '55%',
  
  },
});
