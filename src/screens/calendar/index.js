import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Header, Left, Right, Icon } from 'native-base'

import Sidebar from '../../components/sidebar/index'
import DayStore from '../create-program/store/index'
import CalendarStore from './store/index'
import SelectedDay from './selected-day'


import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import {LocaleConfig} from 'react-native-calendars'

LocaleConfig.locales['tr'] = {
  monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
  monthNamesShort: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haz.','Tem.','Ağus.','Eylül','Ekim','Kasım','Ara.'],
  dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
  dayNamesShort: ['Pzr.','Pzt.','Salı','Çar.','Per.','Cu.','Cts.'],
  today: 'Bugün\'Bugün'
};
LocaleConfig.defaultLocale = 'tr';


class CalendarScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="calendar" style={{ fontSize: 24, color: tintColor }}/>
    )
  }

  render() {
    return (
      <Container>
        <Sidebar
          navigation={this.props.navigation}
          headerTitle='Takvim'/>
        <SelectedDay/>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1 0 auto;
  background-color: #242A33;
`

const LectureInformation = styled.View`
  width: 100%;
  height: 80%;
  background-color: white;
`

export default CalendarScreen