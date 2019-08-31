import React from 'react'
import { TouchableOpacity, ScrollView} from 'react-native'
import styled from 'styled-components/native'
import { Icon, Button,  Form, Item, Input, Label, SwipeRow } from 'native-base'
import TimePicker from "react-native-24h-timepicker"

import { observer } from "mobx-react"
import Swipeable from 'react-native-swipeable-row'

import SaveLecture from '../save-lecture/index'
import DayStore from '../../screens/create-program/store/index'


@observer
class LectureCard extends React.Component {

  swipeable = null

  onUpdatePress() {
    DayStore.setSelectedLessonIndex(this.props.updatedIndex)
    DayStore.showUpdateLecture()
  }

  deleteLesson(index) {
    this.swipeable.recenter()
    DayStore.deleteSelectedLesson(index)
  }

  leftButton = () => {
    return([
    <TouchableOpacity 
    style={{ backgroundColor: 'rgb(171,34,94)', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', height: 121 }}
    >
      <Icon
      name="copy"
      style={{ color: "white", fontSize: 30, marginRight: 30}} />
    </TouchableOpacity>
    ])
  }

  rightButton = (index) => {
    return([
    <TouchableOpacity 
    style={{ backgroundColor: 'rgb(171,34,94)', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 121 }}
    onPress={() => this.deleteLesson()}
    >
      <Icon
      name="trash"
      style={{ color: "white", fontSize: 30, marginLeft: 30}} />
    </TouchableOpacity>
    ])
  }

  render() {
    return(
        <Container>
          {DayStore.selectedDay.lessons.length > 0 && 
            <Swipeable
            onRef={ref => this.swipeable = ref}
            leftButtons={this.leftButton()}
            rightButtons={this.rightButton(this.props.index)}>
              <LineContainer absent={this.props.lecture.absent}>
                <CardContainer>
                  <LectureInformationContainer>
                    <LectureInformationTitle>{this.props.lecture.lectureName}</LectureInformationTitle>
                    <LectureInformationText>{this.props.lecture.classRoom} / {this.props.lecture.section}</LectureInformationText>
                  </LectureInformationContainer>
                </CardContainer>
                <TimeContainer>
                  <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => this.onUpdatePress()}>
                    <Icon
                    name="clock"
                    style={{ fontSize: 50, color: this.props.lecture.absent ? "red" : "#00FFAE" }}/>
                    <TimeText absent={this.props.lecture.absent}>{this.props.lecture.startHour}.{this.props.lecture.startMinute} - {this.props.lecture.finishHour}.{this.props.lecture.finishMinute}</TimeText>
                  </TouchableOpacity>
                </TimeContainer>
              </LineContainer>
            </Swipeable>
          }
        </Container>
    )
  }
}

const Container = styled.View`
 z-index: 2;
`


const LineContainer = styled.View`
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-items: center;
  border-left-width: 5px;
  border-left-color:  ${props => props.absent ? "red" : "#00FFAE"};
  margin-bottom: 15px;
  border-style: solid;
  border-color: #dadfe1;
  border-bottom-width: 1px; 
`

const TimeContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`

const TimeText = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: Montserrat-Bold;
  font-size: 14px;
  color: ${props => props.absent ? "red" : "#00FFAE"};
  text-align: center;
`


const CardContainer = styled.View`
  flex: 2;
  height: 80px;
  flex-direction: row;
`

const LectureInformationContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  margin-left: 10px;
`

const LectureInformationTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: Montserrat-Bold;
  font-size: 16px;
  color: white;
`

const LectureInformationText = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: Montserrat;
  font-size: 14px;
  color: white;
`

const LectureStatus = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const AbsentInformationBox = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${props => props.absent ? "red" : "#00FFAE"};
  justify-content: center;
  align-items: center;
`

const AbsentInformationText = styled.Text`
  color: ${props => props.absent ? "red" : "#00FFAE"}
  font-family: Montserrat;
  font-size: 16px;
`

const CustomButton = styled(Button)`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
`










export default LectureCard