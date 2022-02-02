import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  Topper,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../Components/Stylechat';

const Messages = [
  {
    id: '1',
    userName: 'Prof° André',
    userImg: require('../img/storage/images/profile5.jpg'),
    messageTime: 'Nesse momento...',
    messageText:
      'André: Tenho sim, se vc quiser vem pegar comigo na estação central amanhã.',
  },
  {
    id: '2',
    userName: 'Prof Antônia',
    userImg: require('../img/storage/images/profile4.jpg'),
    messageTime: 'Há 3 horas',
    messageText:
      'Você: Claro, vamos combinar de ir sim.',
  },
  {
    id: '3',
    userName: 'Prof° Rafael',
    userImg: require('../img/storage/images/profile1.jpg'),
    messageTime: 'Há 5 Horas',
    messageText:
      'Você: Oi Rafa',
  },
  {
    id: '4',
    userName: 'Prof Ana',
    userImg: require('../img/storage/images/profile2.jpg'),
    messageTime: 'Há 1 dia',
    messageText:
      'Ana: Tem aquele livro lá na Biblioteca Municipal ',
  },
  {
    id: '5',
    userName: 'Prof° Rodrigo',
    userImg: require('../img/storage/images/profile3.jpg'),
    messageTime: 'Há 1 dia',
    messageText:
      'Você: Tudo bem, dps nos falamos!',
  },

  {
    id: '6',
    userName: 'Grupo dos professores - ESTESP',
    userImg: require('../img/storage/images/amico.png'),
    messageTime: 'Há 1 dia',
    messageText:
      'Raquel: O que acham de uma feira virtual?',
  },

  {
    id: '7',
    userName: 'Prof Raquel',
    userImg: require('../img/storage/images/girl.jpg'),
    messageTime: 'Há 1 dia',
    messageText:
      'Raquel: Vou propor essa ideia',
  },

  
  {
    id: '8',
    userName: 'Prof Sophia',
    userImg: require('../img/storage/images/getty.jpg'),
    messageTime: 'Há 2 dias',
    messageText:
      'Você: Ok!',
  },
  {
    id: '9',
    userName: 'Prof Erick',
    userImg: require('../img/storage/images/erick.jpg'),
    messageTime: 'Há 3 dias',
    messageText:
      'Você: Ainda bem que deu tudo certo...',
  },
  
];

const MessagesScreen = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
