import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'LEMONMILK': require('./assets/fonts/LEMONMILK-Light.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
    <LinearGradient
      // Background Linear Gradient
      colors={['#07f49e','#0f68a9']}
      style={styles.background}
    />
  <Text style={{ fontFamily: 'LEMONMILK', color: "#fff", fontSize: 35, marginLeft:-300, marginTop:50  }}>Olá</Text>
  <Text style={{ fontFamily: 'LEMONMILK', color: "#fff", fontSize: 20, marginLeft:-100, marginTop:8, fontStyle:"italic" }}>Seja bem-vindo ao aplicativo:</Text>
    <View style={styles.containerLogo}>
    <Image style={{width:430, marginTop:-405, marginLeft:-30}} resizeMode = "contain" source ={require('./assets/img/Mural.png')}></Image>
    </View>
    <View style={styles.viewBotao}>
    <TouchableOpacity style={styles.buttonLog}>
    <Text style={{ fontFamily: 'LEMONMILK', color: "#fff", fontSize: 20 }}>Login</Text>
    </TouchableOpacity>
    </View>
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
  buttonLog:{
    backgroundColor:'#05BC93',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50,
    padding:10,
  },
  viewBotao:{
    width: '60%',
  },
});
