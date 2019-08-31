import React from 'react'
import { Text, Button, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Header, Left, Right, Icon, Content } from 'native-base'

import Sidebar from '../../components/sidebar/index'


class ProfileScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="person" style={{ fontSize: 24, color: tintColor }}/>
    )
  }

  render() {
    return (
      <Container>
        <Sidebar
          navigation={this.props.navigation}
          headerTitle='Profil'/>
        <InfoContainer>
          <UserInfo>
            <UserInfoText>Utkucan Yıldırım</UserInfoText>
            <UserInfoText>Başkent Üniversitesi</UserInfoText>
            <UserInfoText>Bilgisayar Mühendisliği</UserInfoText>
          </UserInfo>
          <LectureInfo></LectureInfo>
        </InfoContainer>
      </Container>
      
    )
  }
}

const Container = styled.View`
  flex: 1 0 auto;
`

const InfoContainer = styled.View`
  flex: 1 0 auto;
  align-items: center;
`

const UserInfo = styled.View`
  background-color: white;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
`

const UserInfoText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: rgb(170,53,83);
  font-family: Montserrat;
  padding: 5px;
`

const LectureInfo = styled.View`
  /* background-color: rgb(216,216,216); */
  background-color: rgb(171,54,94);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

`

export default ProfileScreen