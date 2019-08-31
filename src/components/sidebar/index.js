import React from 'react'
import { Text, Button, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import menuIcon from '../../assets/icons/menu-button.png'

import { Header, Left, Right, Icon, Body } from 'native-base'

import DayStore from '../../screens/create-program/store/index'

class Sidebar extends React.Component {

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#2C3239', height: 64 }}>
          <Left style={{ flex: 0 }}>
            <Icon
              ios='ios-menu' 
              android="md-menu" 
              style={{fontSize: 40, color: 'white'}}
              onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
          <Body style={{ marginRight: 36.5 }}>
            <HeaderTitle>{this.props.headerTitle}</HeaderTitle>
          </Body>
          <Right style={{ flex: 0 }}/>
        </Header>    
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 0 0 auto;
`
const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-family: Montserrat;
  color: white;
  max-width: 500px;
`

export default Sidebar