import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Block} from "galio-framework";

const ProfPost = () => {
  const postInfo = [
    {
        postTitle: 'Você anexou uma menção.',
        postPersonImage: require('../img/storage/images/me.jpg'),
        postImage: require('../img/storage/images/cert.jpg'),
        likes: 88,
        postContent: 'Mais um certificado, agora em desenhos digitais',
        isLiked: false,
      },
    {
      postTitle: 'Você anexou um arquivo.',
      postPersonImage: require('../img/storage/images/me.jpg'),
      postImage: require('../img/storage/images/status0.jpg'),
      postContent: 'E assim eles concluíram mais uma etapa em suas vidas!',
      likes: 60,
      isLiked: false,
    }
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={data.postPersonImage}
                  style={{width: 40, height: 40, borderRadius: 100, marginLeft:-8}}
                />
                <View style={{paddingLeft: 5}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {data.postTitle}
                  </Text>
                </View>
                <Block style={{     
        width: "110%",
        borderWidth: 1.5,
        borderColor: "#CECECE",
        marginTop:30,
       marginLeft:-290,
        marginBottom:-35
      }} />
              </View>
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text
                style={{
                  fontSize: 20,
                  marginLeft:2,
                  paddingVertical: 2,
                }}>
              {data.postContent}
              </Text>
              <Image
                source={data.postImage}
                style={{width: '100%', height: 200}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <Ionicons
                    name={like ? 'star' : 'star-outline'}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? '#FFBD00' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="chatbubble-outline"
                    style={{fontSize: 20, paddingRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingHorizontal: 15, marginLeft:-8}}>
              <Text>
                 {like ? 'Você e mais' : ''}{' '}
                {like ? data.likes + 1 : data.likes} pessoas gostaram
              </Text>
              <Text style={{opacity: 0.4, paddingVertical: 2}}>
                Ver  comentários
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
               source ={require('../img/storage/images/me.jpg')}
                    style={{
                      width: 27,
                      height: 27,
                      borderRadius: 100,
                      backgroundColor: 'orange',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Adicionar comentário "
                    style={{opacity: 0.5}}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons
                    name="arrow-forward-circle-outline"
                    style={{fontSize: 19, color: '#07f49e', marginRight: 10}}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ProfPost;