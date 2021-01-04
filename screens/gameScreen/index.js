import React,{useEffect,useState,useContext} from 'react';
import { View, Text,TouchableOpacity,Button,Image,Alert  } from 'react-native';
import MapView,{Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Animatable from 'react-native-animatable';
import Steps from '../../steps.js';
import {AppContext} from '../../context/appContext';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import AnimateNumber from 'react-native-countup'
import CountDown from '../../components/countDown';
export default function GameScreen({ route, navigation }) {
  const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);
const [state,setState] = useContext(AppContext);

const StartRiftWalking = () => {
  const riftWalking = {
    active: true,
    startSteps: 0,
    endTime: moment().add(60, 'minutes').format('hh:mm').toString(),
    date: moment().format('YYYY-MM-DD').toString()
  }
  setState({...state,riftWalking: riftWalking,menu: null})
}
useEffect(() => {
  (async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    //https://stackoverflow.com/questions/55973073/expo-locations-watchpositionasync-not-being-removed
    let location = await  await Location.watchPositionAsync(
          {
              enableHighAccuracy: true,
              distanceInterval: 1,
              timeInterval: 10000
          },
          newLocation => {
              let coords = newLocation.coords;
          // this.props.getMyLocation sets my reducer state my_location
          setLocation({
              latitude: parseFloat(coords.latitude),
              longitude: parseFloat(coords.longitude),
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
          });
        },
        error => console.log(error)
      );
    setLocation(location);
  })();
}, []);
const _regionChange = () => {

}

var mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 0.1,
  },
};

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
return (
<View style={{width: '100%',height: '100%'}}>
    {location && (
    <MapView provider={PROVIDER_GOOGLE} customMapStyle={mapStyle} onRegionChange={_regionChange} initialRegion={location} coordinate={location} style={{width: '100%',height: '100%', opacity: 1}}>
      <Marker coordinate={location} description="You are here">
        <View style={{width: 100,height: 100, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Animatable.View animation="tada" duration={5000} easing="ease-out" iterationCount="infinite" style={{width: 40,height: 40,backgroundColor: 'orange',borderRadius: '100%'}}/>
        </View>
      </Marker>
    </MapView>
)}
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

  {state.menu != null && (
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

    </View>
  );
}
