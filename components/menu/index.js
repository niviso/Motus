import React,{useEffect,useState,useContext} from 'react';
import { View, Text,TouchableOpacity,Button,Image,Alert  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {AppContext} from '../../context/appContext';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import AnimateNumber from 'react-native-countup'
export default function Menu(props){
  const [state,setState] = useContext(AppContext);

  const EndRiftWalking = () => {
    var characterCopy = JSON.parse(JSON.stringify(state.character));
    characterCopy.experience += state.riftWalking.startSteps-state.character.currentStepCount;
    setState({...state,character: characterCopy,riftWalking: {active: false},menu: null});
  }
  const EndRiftWalkingDialog = () => {
    Alert.alert(
    "Are you sure?",
    "",
    [
      { text: "Yes", onPress: () => EndRiftWalking() },
      {
        text: "No",
        style: "cancel"
      },
    ],
    { cancelable: false }
  );
  }
  const StartRiftWalking = () => {
    const riftWalking = {
      active: true,
      startSteps: 0,
      endTime: moment().add(60, 'minutes').format('hh:mm').toString(),
      date: moment().format('YYYY-MM-DD').toString()
    }
    setState({...state,riftWalking: riftWalking,menu: null})
  }
  return (
          <>
    {state.menu && (
      <Animatable.View animation="bounceIn" style={{position: 'absolute',top:'30%',left:'5%',width: '90%',maxHeight: 500,backgroundColor:'white',opacity: 0.9, padding: 10,borderColor: 'gray',borderStyle: 'solid',borderWidth: 1,zIndex: 2}}>
      <TouchableOpacity style={{position: 'absolute',top:-15,right:-15,backgroundColor:'white',borderRadius: '100%',borderColor: 'gray',borderStyle: 'solid',borderWidth: 1}} onPress={() => setState({...state,menu: null})}><Text style={{fontSize: 20,padding: 10}}>❌</Text></TouchableOpacity>
      <Text style={{fontSize: 30,width: '100%',textAlign:'center'}}>{state.menu}</Text>
      {state.menu == 'Rift walking' && (
        <TouchableOpacity onPress={StartRiftWalking} style={{padding: 10,backgroundColor: 'blue',width: 200,margin: 10}}>
        <Text style={{fontSize: 14,width: '100%',textAlign:'center',color: 'white'}}>Start rift walking</Text>
        </TouchableOpacity>
      )}

      </Animatable.View>
    )}
          </>
  )
}
