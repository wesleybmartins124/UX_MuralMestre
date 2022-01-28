import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  let [fontsLoaded] = useFonts({
    'LEMONMILK': require('../fonts/LEMONMILK-Light.otf'),
    'Caviar': require('../fonts/CaviarDreams_Bold.ttf'),
    'Balivia': require('../fonts/Balivia.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <LinearGradient
      // Background Linear Gradient
      colors={['#07f49e','#0f68a9']}
      style={styles.background}
    />
  <Text style={{ fontFamily: 'LEMONMILK', color: "#fff", fontSize: 35, marginLeft:-300, marginTop:50  }}>Olá</Text>
  <Text style={{ fontFamily: 'LEMONMILK', color: "#fff", fontSize: 20, marginLeft:-80, marginTop:8, fontStyle:"italic" }}>Seja bem-vindo(a) ao aplicativo:</Text>
    <View style={styles.containerLogo}>
    <Image style={{width:500, marginTop:-290, marginLeft:-60}} resizeMode = "contain" source ={require('../img/Mural.png')}></Image>
    </View>
    <View style={styles.viewBotao}>
    <TouchableOpacity style={styles.buttonLog}   onPress={() => navigation.navigate('SignIn')}>
    <Text style={{ fontFamily: 'Caviar', color: "#fff", fontSize: 20 }}>Sign In</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.viewBotao}>
    <TouchableOpacity style={styles.buttonCad}>
    <Text style={{ fontFamily: 'Caviar', color: "#fff", fontSize: 20 }}>Sign Up</Text>
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
