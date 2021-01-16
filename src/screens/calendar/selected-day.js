
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Header, Left, Right, Icon } from 'native-base'

import Sidebar from '../../components/sidebar/index'
import CalendarStore from './store/index'
import AbsentInformation from './absent-information'
import { observer } from "mobx-react"

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


@observer
class SelectedDay extends React.Component {


  render() {
    return(
      <Container>
        <Calendar
          theme={{
          backgroundColor: '#242A33',
          calendarBackground: '#242A33',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: 'white',
          textDisabledColor: 'white',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          monthTextColor: 'red',
          indicatorColor: 'blue',
          textDayFontFamily: 'Montserrat',
          textMonthFontFamily: 'Montserrat',
          textDayHeaderFontFamily: 'Montserrat',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 20,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
          }}
          // Initially visible month. Default = Date()
          // current={}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2018-01-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2020-12-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log('selected day', day), 
            console.log(CalendarStore.currentDay.format('dddd')), 
            CalendarStore.setSelectedDay(day)
          }}
          
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          //renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          />
          
          {!!CalendarStore.absentInformation &&
          <AbsentInformation/>
          }

      </Container>
    )
  }
}


const Container = styled.View`
  flex: 1 0 auto;
  background-color: #242A33;
`




export default SelectedDay
