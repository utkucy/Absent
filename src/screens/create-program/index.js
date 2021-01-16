import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Header, Left, Right, Icon } from 'native-base'

import Sidebar from '../../components/sidebar/index'
import SetDayProgram from '../../components/day/index'
import DayStore from './store/index'


class CreateProgramScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="create" style={{ fontSize: 24, color: tintColor }}/>
    )
  }

  render() {
    return (
      <Container>
        <Sidebar
          navigation={this.props.navigation}
          headerTitle='Ders Programı'/>
        <SetDayProgram/>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1 0 auto;
`

export default CreateProgramScreen