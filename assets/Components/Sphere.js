import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const Sphere = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Sua Esfera',
      image: require('../img/storage/images/me.jpg'),
      image1: require('../img/storage/images/status0.jpg'),
    },
    {
      id: 0,
      name: 'Prof° Rafael',
      image: require('../img/storage/images/profile1.jpg'),
      image1: require('../img/storage/images/status1.jpg'),
    },
    {
      id: 0,
      name: 'Prof Ana',
      image: require('../img/storage/images/profile2.jpg'),
      image1: require('../img/storage/images/status2.jpg'),
    },
    {
      id: 0,
      name: 'Prof° Rodrigo',
      image: require('../img/storage/images/profile3.jpg'),
      image1: require('../img/storage/images/status3.jpg'),
    },
    ,
    {
      id: 0,
      name: 'Prof Antônia',
      image: require('../img/storage/images/profile4.jpg'),
      image1: require('../img/storage/images/status4.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'Prof° André',
      image: require('../img/storage/images/profile5.jpg'),
      image1: require('../img/storage/images/status5.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
                image1: data.image1,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Ionicons
                    name="add-outline"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#0f68a9',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: '#07f49e',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Sphere;