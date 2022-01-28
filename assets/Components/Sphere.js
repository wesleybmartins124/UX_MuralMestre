import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const Sphere = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../img/storage/images/me.jpg'),
    },
    {
      id: 0,
      name: 'Ram_Charan',
      image: require('../img/storage/images/profile1.jpg'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('../img/storage/images/profile2.jpg'),
    },
    {
      id: 0,
      name: 'The_Groot',
      image: require('../img/storage/images/profile3.jpg'),
    },
    ,
    {
      id: 0,
      name: 'loverland',
      image: require('../img/storage/images/profile4.jpg'),
    },
    ,
    {
      id: 0,
      name: 'chillhouse',
      image: require('../img/storage/images/profile5.jpg'),
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
                  borderColor: '#c13584',
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
                    backgroundColor: 'orange',
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