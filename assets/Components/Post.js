import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Post = () => {
  const postInfo = [
    {
        postTitle: 'Prof Ana Correia - Escola Primária Municipal',
        postPersonImage: require('../img/storage/images/profile2.jpg'),
        postImage: require('../img/storage/images/status2.jpg'),
        likes: 34,
        postContent: 'As sementes de uma vida de estudos transforma-se em frutos de sucessos!',
        isLiked: false,
      },
    {
      postTitle: 'Prof° André Takahashi - Colégio Nipônico',
      postPersonImage: require('../img/storage/images/profile5.jpg'),
      postImage: require('../img/storage/images/japanese.jpg'),
      postContent: 'Palácio Japonês de Dresden - Alemanha. Um claro exemplo de barroco com influências orientais',
      likes: 29,
      isLiked: false,
    },
    {
        postTitle: 'Prof Antônia Ferreira - Escola Técnica de São Paulo ',
        postPersonImage: require('../img/storage/images/profile4.jpg'),
        postImage: require('../img/storage/images/status4.jpeg'),
        postContent: 'Educação muda as pessoas, e as pessoas mudam o mundo',
        likes: 5,
        isLiked: false,
      },
      {
        postTitle: 'Prof° Rodrigo Alonso - Escola de Letras do ABC',
        postPersonImage: require('../img/storage/images/profile3.jpg'),
        postImage: require('../img/storage/images/post4.jpg'),
        postContent: 'Tudo que preciso é silêncio e livros...',
        likes: 19,
        isLiked: false,
      },
    {
      postTitle: 'Prof° Rafael - Escola de Tecnologia do ABC',
      postPersonImage: require('../img/storage/images/profile1.jpg'),
      postImage: require('../img/storage/images/post5.jpg'),
      postContent: 'Nova casa novos desafios',
      likes: 55,
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
              </View>
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={data.postImage}
                style={{width: '100%', height: 400}}
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
                 {like ? 'Agora' : ''}{' '}
                {like ? data.likes + 1 : data.likes} pessoas gostaram
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  paddingVertical: 2,
                }}>
              {data.postContent}
              </Text>
              <Text style={{opacity: 0.4, paddingVertical: 2}}>
                Ver comentários
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

export default Post;
