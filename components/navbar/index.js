import React,{useEffect,useState,useContext} from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import {AppContext} from '../../context/appContext';
export default function NavBar(){
  const [state,setState] = useContext(AppContext);
  return (
    <View style={{width: '100%',height: 80,paddingBottom: 10,paddingHorizontal: 20,flexDirection: 'row',backgroundColor:'white',opacity:1, display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
    <TouchableOpacity onPress={() => setState({...state,menu: 'Rift walking'})} style={{width: 100,height: 50,backgroundColor: state.menu == 'Rift walking' ? 'orange' : 'gray',borderRadius: '5%',display: 'flex',alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'white',fontSize: 15,textAlign: 'center'}}>Rift walking</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => setState({...state,menu: 'Inventory'})} style={{width: 50,height: 50,backgroundColor: state.menu == 'Inventory' ? 'orange' : 'gray',borderRadius: '5%',display: 'flex',alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'white',fontSize: 30,textAlign: 'center'}}>
🧍‍♀️</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => setState({...state,menu: 'Challanges'})} style={{width: 50,height: 50,backgroundColor: state.menu == 'Challanges' ? 'orange' : 'gray',borderRadius: '5%',display: 'flex',alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'white',fontSize: 30,textAlign: 'center'}}>🏆</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => setState({...state,menu: 'Shop'})} style={{width: 50,height: 50,backgroundColor: state.menu == 'Shop' ? 'orange' : 'gray',borderRadius: '5%',display: 'flex',alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'white',fontSize: 30,textAlign: 'center'}}>🛍️</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => setState({...state,menu: 'Settings'})} style={{width: 50,height: 50,backgroundColor: state.menu == 'Settings' ? 'orange' : 'gray',borderRadius: '5%',display: 'flex',alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'white',fontSize: 30,textAlign: 'center'}}>⚙️</Text>
    </TouchableOpacity>
    </View>
    )
}
