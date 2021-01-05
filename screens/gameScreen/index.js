import React,{useEffect,useState,useContext} from 'react';
import { View, Text,TouchableOpacity,Button,Image,Alert  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Steps from '../../steps.js';
import {AppContext} from '../../context/appContext';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import AnimateNumber from 'react-native-countup'
import CountDown from '../../components/countDown';
import Map from '../../components/map';
import Menu from '../../components/menu';

export default function GameScreen({ route, navigation }) {
  const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);
const [state,setState] = useContext(AppContext);


const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 0.1,
  },
};

return (
<View style={{width: '100%',height: '100%'}}>
  <Map/>
  <View style={{position: 'absolute',zIndex: 10,top:0,left:0,width: '100%',height: 150,paddingTop: 25,backgroundColor:'white',opacity: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 50}}>Nikki</Text>
    <Text style={{fontSize: 12}}>Level {state.character.level}</Text>
    <Progress.Bar progress={state.character.experience/100} color="green" width={200} />
    <Steps/>
  </View>

{state.riftWalking.active && (
  <>
  <Animatable.Image animation={fadeIn} pointerEvents="none" source={{uri: "https://i.pinimg.com/originals/3d/a4/be/3da4bebca815ca60251010dc83663788.gif"}} style={{position:'absolute',zIndex: 1,top:0,left:0,opacity: 0.1,width: '100%',height:'100%'}}/>
  <View style={{position: 'absolute',bottom:'0%',backgroundColor: 'rgba(255,255,255,0.6)',left:0,width: '100%',padding: 50,display: 'flex',alignItems:'center',zIndex: 10}}>
  <Text style={{position:'absolute',top: 10,right: 10,fontSize: 22,opacity:1,zIndex: 10}}>Rift level {String(state.riftWalking.startSteps-state.character.currentStepCount).charAt(0)}</Text>
  <Animatable.Text animation="pulse" duration={1000} iterationCount="infinite" style={{fontSize: 28,marginBottom: 10}}>
  <CountDown end={state.riftWalking.endTime}/>
  </Animatable.Text>
<Progress.Bar progress={0.3} width={200} showsText height={10}/>
<Text style={{fontSize: 16,marginTop: 5,opacity: 0.6}}>{state.riftWalking.startSteps-state.character.currentStepCount} more steps to level {parseInt(String(state.riftWalking.startSteps-state.character.currentStepCount).charAt(0))+1}</Text>

<TouchableOpacity onPress={EndRiftWalkingDialog} style={{padding: 10,backgroundColor: 'blue',width: 200,margin: 10}}>
<Text style={{fontSize: 14,width: '100%',textAlign:'center',color: 'white'}}>End rift walking</Text>
</TouchableOpacity>
  </View>
  </>
)}

  <Menu/>

    </View>
  );
}
