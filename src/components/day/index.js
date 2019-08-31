import React from 'react'
import { TouchableOpacity, ScrollView, View} from 'react-native'
import styled from 'styled-components/native'
import menuIcon from '../../assets/icons/menu-button.png'
import { Header, Left, Right, Icon, Body, Button, Text} from 'native-base'

import { observer } from "mobx-react"
import { observable, action, computed } from 'mobx'

import DayStore from '../../screens/create-program/store/index'
import Swipeable from 'react-native-swipeable-row'
import { SwipeListView } from 'react-native-swipe-list-view'

import SaveLecture from '../save-lecture/index'
import LectureCard from '../lecture-card/index'


@observer
class SetDayProgram extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
  

  render() {
    return(
      
        <Container>
          <DaySelectContainer>
            <Button transparent onPress={() => DayStore.goToYesterDay()}>
              <Icon 
                name="arrow-back"
                style={{ color: "white" }}/>
            </Button>
            <DayNameText>{DayStore.selectedDayName}</DayNameText>
            <Button transparent onPress={() => DayStore.goToNextDay()}>
              <Icon
              name="arrow-forward"
              style={{ color: "white" }}/>
            </Button>
          </DaySelectContainer>
          <LessonsContainer>
            <ScrollView>
              {DayStore.selectedDay.lessons.map((lesson, index) => ( 
              <React.Fragment key={index}>
                <LectureCard updatedIndex={index} lecture={lesson}/>
              </React.Fragment>
              ))}
            </ScrollView>
          </LessonsContainer>

          
          <AddButtonContainer>
            <Button onPress={() => DayStore.showAddLecture()} transparent style={{ height: '100%' , margin: 0}}>
              <Icon
              name="add"
              style={{ color: "white" , fontSize: 45}}/>
            </Button>
          </AddButtonContainer>

          {!!DayStore.isUpdatelecturePopUpVisible &&
            <SaveLecture updatedLesson={DayStore.selectedDay.lessons[DayStore.selectedLessonIndex]}/>
          }

          {!!DayStore.isAddLecturePopupVisible &&
            <SaveLecture/>
          }
        </Container>
      
    )
  }

}

const Container = styled.View`
  flex: 1;
  background-color: #242A33;
`

const DaySelectContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding-bottom: 20px;
  /* border-style: solid;
  border-color: rgb(171,34,94);
  border-bottom-width: 1px; */
`

const DayNameText = styled.Text`
  font-family: Montserrat;
  font-size: 20px;
  color: white;
`

const LessonsContainer = styled.View`
  flex: 1;
`

const AddButtonContainer = styled.View`
  background-color: rgb(171,34,94);
  position: absolute;
  bottom: 20;
  right: 20;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgb(171,34,94);
  align-items: center;
  justify-content: center;
`


const AddButtonText = styled.Text`
  font-size: 45px;
  font-family: Montserrat;
  color: white;
  text-align: center;
`







export default SetDayProgram