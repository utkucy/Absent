import React from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import styled from 'styled-components/native'

import {  Left, Right, Icon, Button} from 'native-base'

import CalendarStore from './store/index'
import { observer } from "mobx-react"

import LectureCard from '../../components/lecture-card/index'



@observer
class AbsentInformation extends React.Component {

  closeAbsentInformation = () => {
    CalendarStore.closeAbsentPopUp()
  }

  render() {
    return (
      <Container>
        <Header>
          <ButtonContainer>
            <Button style={{backgroundColor: 'none', paddingColor:'none', paddingTop: 0, paddingBottom: 0}} transparent onPress={() => this.closeAbsentInformation()}>
              <Icon 
                name="arrow-round-back"
                style={{ fontSize: 30, color: "white" , width: 25}}/>
            </Button>
          </ButtonContainer>
          <SelectedDayName>{CalendarStore.selectedDayName}</SelectedDayName>
        </Header>

        <LessonsContainer>
          <ScrollView>
            {CalendarStore.day.lessons.forEach((lesson, index) => ( 
            <React.Fragment key={index}>
              <LectureCard updatedIndex={index} lecture={lesson}/>
            </React.Fragment>
            ))}
          </ScrollView>
        </LessonsContainer>

      </Container>
    )
  }
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #242A33;
  position: absolute;
`

const Header = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.View`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
`

const DayNameContainer = styled.View`
  flex: 1 auto;
  justify-content: center;
  align-items: center;
`

const SelectedDayName = styled.Text`
  font-size: 20px;
  font-family: Montserrat;
  color: white;
`

const LessonsContainer = styled.View`
  flex: 1;
`


export default AbsentInformation

