import React from 'react'
import { TouchableOpacity, StyleSheet, Dimensions, SafeAreaView} from 'react-native'
import styled from 'styled-components/native'
import { Icon, Button,  Form, Item, Input, Label, CheckBox, Body } from 'native-base'
import TimePicker from "react-native-24h-timepicker";


import { observer } from "mobx-react"

import DayStore from '../../screens/create-program/store/index'
import Sidebar from '../sidebar/index'



@observer
class SaveLecture extends React.Component {

   onAddPress = () => {
    DayStore.addLecture()
    //DayStore.sortLessons()
    DayStore.closeAddLecture()
    DayStore.printDays()
    DayStore.resetLessonInformation()
  }

  onSavePress = () => {
    DayStore.updateLecture(this.props.updatedLesson)
    DayStore.closeUpdateLecture()
    DayStore.resetLessonInformation()
  }

  onStartTimeConfirm = (hour,minute) => {
    DayStore.fetchStartTimeInformation(hour,minute)
    this.StartTimePicker.close()
  }

  onFinishTimeConfirm = (hour,minute) => {
    DayStore.fetchFinishTimeInformation(hour, minute)
    this.FinishTimePicker.close()
  }

  onCancelTimePicker = () => {
    DayStore.resetTimeInformation()
    this.StartTimePicker.close()
    this.FinishTimePicker.close()
  }


  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => DayStore.closeAddLecture()}>
            <Icon
              name="close"
              style={{ color: "red", fontSize: 50, height: 50}}
              onPress={() => DayStore.isAddLecturePopupVisible === true ? DayStore.closeAddLecture() : DayStore.closeUpdateLecture()}/>
          </Button>
          <DayNameText>{this.props.updatedLesson ? 'Dersi Güncelle' : 'Ders Ekle' }</DayNameText>
          <Button transparent onPress={() => this.onSavePress()}>
            <Icon
            name="checkmark"
            style={{ color: "green", fontSize: 50, height: 50}}
            onPress={() => DayStore.isAddLecturePopupVisible === true ? this.onAddPress() : this.onSavePress()}/>
          </Button>
        </Header>
        <Content>
          {!this.props.updatedLesson &&
          <React.Fragment> 
            <Form>
              <Item floatingLabel>
                <Label style= {{ color: 'white', fontFamily: 'Montserrat'}}>DERS</Label>
                <Input 
                  style= {{color: '#55BBBB' }}
                  getRef={lecture => {
                  DayStore.fetchLectureNameInformation(lecture)}}/>
              </Item>
              <Item floatingLabel>
                <Label style={{ color: 'white', fontFamily: 'Montserrat' }}>ŞUBE</Label>
                <Input style= {{color: '#55BBBB' }}
                  getRef={section => {
                  DayStore.fetchSectionInformation(section)}}/>
              </Item>
              <Item floatingLabel>
                <Label style= {{ color: 'white', fontFamily: 'Montserrat' }}>DERSLİK</Label>
                <Input style= {{color: '#55BBBB' }}
                  getRef={classRoom => {
                  DayStore.fetchClassRoomInformation(classRoom)}}/>
              </Item>
            </Form>
            <CustomForm>
              <CustomFormItemText>DERS BAŞLANGIÇ SAATİ</CustomFormItemText>
              <CustomFormItemContext>
                <Button style={{backgroundColor: 'none', paddingColor:'none', paddingTop: 0, paddingBottom: 0}} onPress={() => this.StartTimePicker.open()}>
                  {!!DayStore._startHour &&
                  <TimeInformationText>{DayStore._startHour}:{DayStore._startMinute}</TimeInformationText>
                  }
                  <Icon style={{color: 'white'}} name='arrow-down' />
                </Button>
                <TimePicker
                  ref={ref => {
                    this.StartTimePicker = ref;
                  }}
                  onCancel={() => this.onCancelTimePicker()}
                  onConfirm={(hour, minute) => this.onStartTimeConfirm(hour,minute)}/>  
              </CustomFormItemContext>
            </CustomForm>

            <CustomForm>
              <CustomFormItemText>DERS BİTİŞ SAATİ</CustomFormItemText>
              <CustomFormItemContext>
                <Button style={{backgroundColor: 'none', paddingColor:'none', paddingTop: 0, paddingBottom: 0}} onPress={() => this.FinishTimePicker.open()}>
                  {!!DayStore._finishHour &&
                  <TimeInformationText>{DayStore._finishHour}:{DayStore._finishMinute}</TimeInformationText>
                  }
                  <Icon style={{color: 'white'}} name='arrow-down' />
                </Button>
                <TimePicker
                  ref={ref => {
                    this.FinishTimePicker = ref;
                  }}
                  onCancel={() => this.onCancelTimePicker()}
                  onConfirm={(hour, minute) => this.onFinishTimeConfirm(hour,minute)}/>
              </CustomFormItemContext>
            </CustomForm>
          </React.Fragment>
          }

          {!!this.props.updatedLesson &&
            <React.Fragment>
              <Form>
                <Item stackedLabel>
                  <Label style= {{ color: 'white', fontFamily: 'Montserrat'}}>DERS</Label>
                  <Input 
                    style= {{color: '#55BBBB' }}
                    onChangeText={(newLecture) => DayStore.fetchLectureNameInformation(newLecture)}
                    defaultValue={this.props.updatedLesson.lectureName}/>
                </Item>
                <Item stackedLabel>
                  <Label style={{ color: 'white', fontFamily: 'Montserrat' }}>ŞUBE</Label>
                  <Input 
                    style= {{color: '#55BBBB' }}
                    onChangeText={(newSection) => DayStore.fetchSectionInformation(newSection)}
                    defaultValue={this.props.updatedLesson.section}/>
                </Item>
                <Item stackedLabel>
                  <Label style= {{ color: 'white', fontFamily: 'Montserrat' }}>DERSLİK</Label>
                  <Input 
                    style= {{color: '#55BBBB' }}
                    onChangeText={(newClassRoom) => DayStore.fetchClassRoomInformation(newClassRoom)}
                    defaultValue={this.props.updatedLesson.classRoom}/>
                </Item>
              </Form>

              <CustomForm>
                <CustomFormItemText>DERS BAŞLANGIÇ SAATİ</CustomFormItemText>
                <CustomFormItemContext>
                  <Button style={{backgroundColor: 'none', paddingColor:'none', paddingTop: 0, paddingBottom: 0}} onPress={() => this.StartTimePicker.open()}>
                    {!!DayStore._startHour &&
                    <TimeInformationText>{DayStore._startHour}:{DayStore._startMinute}</TimeInformationText>
                    }
                    {!DayStore._startHour &&
                    <TimeInformationText>{this.props.updatedLesson.startHour}:{this.props.updatedLesson.startMinute}</TimeInformationText>
                    }
                    <Icon style={{color: 'white'}} name='arrow-down' />
                  </Button>
                  <TimePicker
                    ref={ref => {
                      this.StartTimePicker = ref;
                    }}
                    onCancel={() => this.onCancelTimePicker()}
                    onConfirm={(hour, minute) => this.onStartTimeConfirm(hour,minute)}/>
                </CustomFormItemContext>
              </CustomForm>

              <CustomForm>
                <CustomFormItemText>DERS BİTİŞ SAATİ</CustomFormItemText>
                <CustomFormItemContext>
                  <Button style={{backgroundColor: 'none', paddingColor:'none', paddingTop: 0, paddingBottom: 0}} onPress={() => this.FinishTimePicker.open()}>
                    {!!DayStore._finishHour &&
                    <TimeInformationText>{DayStore._finishHour}:{DayStore._finishMinute}</TimeInformationText>
                    }
                    {!DayStore._finishHour &&
                    <TimeInformationText>{this.props.updatedLesson.finishHour}:{this.props.updatedLesson.finishMinute}</TimeInformationText>
                    }
                    <Icon style={{color: 'white'}} name='arrow-down' />
                  </Button>
                  <TimePicker
                  ref={ref => {
                    this.FinishTimePicker = ref;
                  }}
                    onCancel={() => this.onCancelTimePicker()}
                    onConfirm={(hour, minute) => this.onFinishTimeConfirm(hour,minute)}/>
                </CustomFormItemContext>
              </CustomForm>

              <CustomForm>
                <CustomFormItemText>Devam Durumu</CustomFormItemText>
                <CustomFormItemContext>
                  <Button style={{backgroundColor: 'none', paddingColor:'none', paddingTop: 0, paddingBottom: 0}} onPress={() => DayStore.changeAbsentStatus(this.props.updatedLesson)}>
                    {!!this.props.updatedLesson.absent &&
                      <Icon style={{color: 'red', fontSize: 40, paddingTop: 0}} name='close-circle'/>
                    }
                    {!this.props.updatedLesson.absent &&
                    <Icon style={{color: 'green', fontSize: 40, paddingTop: 0}} name='checkmark-circle' />
                    }
                  </Button>
                </CustomFormItemContext>
              </CustomForm>
            </React.Fragment>
          }
        </Content>
      </Container>
    )
  }
}


const Container = styled.View`
  z-index: 99;
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #242A33;
`

const Header = styled.View`
  margin-top: 20px;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-bottom: 10px;
  border-style: solid;
  border-color: rgb(184,184,184);
  border-bottom-width: 1px;
`

const DayNameText = styled.Text`
  font-family: Montserrat;
  font-size: 20px;
  color: #e1ad21;
`

const Content = styled.View`
  height: 100%;
  width: 100%;
`

const CustomForm = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
  border-style: solid;
  border-color: white;
  border-bottom-width: 1px;
`

const CustomFormItemText = styled.Text`
  font-size: 15px;
  font-family: Montserrat;
  color: white;
`

const CustomFormItemContext = styled.View`
  height: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const TimeInformationText = styled.Text`
  font-size: 15px;
  font-family: Montserrat;
  color: white;
`


export default SaveLecture