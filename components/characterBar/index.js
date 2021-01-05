import * as Progress from 'react-native-progress';
import React,{useEffect,useState,useContext} from 'react';
import { View, Text,TouchableOpacity,Button,Image,Alert,SafeAreaView  } from 'react-native';
import {AppContext} from '../../context/appContext';
import Steps from '../steps/';

export default function CharacterBar(props){
  const [state,setState] = useContext(AppContext);


  return (
    <SafeAreaView style={{position: 'absolute',zIndex: 10,top:0,left:0,width: '100%',backgroundColor:'rgba(255,255,255,0.7)'}}>
      <View style={{paddingBottom: 15, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 50}}>{state.character.name}</Text>
      <Text style={{fontSize: 12}}>Level {state.character.level}</Text>
      <Progress.Bar progress={state.character.experience/100} color="green" width={200} />
      <Steps/>
      </View>
    </SafeAreaView>
  )
}
