import React, {useState, useEffect,useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import {AppContext} from './context/appContext';

export default function Steps() {
  const [state,setState] = useContext(AppContext);
  const [isAvialable,setIsAvialable] = useState(false);
  const [pastStepCount, setPastStepCount] = useState(0);
  const [init,setInit] = useState(false);
  let _subscription;

  const UpdateStepDataContext = (stepData) => {
    setState({...state,stepData: stepData});
  }

  const _subscribe = () => {
    _subscription = Pedometer.watchStepCount(result => {
      UpdateStepDataContext({currentStepCount: result.steps,isAvialable: isAvialable,pastStepCount:pastStepCount});
    });

    Pedometer.isAvailableAsync().then(
      result => {
        setIsAvialable(true);
      },
      error => {
        console.log(error);
        setIsAvialable(false);


      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        setPastStepCount(result.steps);
        UpdateStepDataContext({currentStepCount: 0,isAvialable: isAvialable,pastStepCount:pastStepCount});

      },
      error => {
        console.log(error);
      }
    );
  };

  const _unsubscribe = () => {
    _subscription && _subscription.remove();
    _subscription = null;
  };


  useEffect(()=>{
    _subscribe();
    return ()=> _unsubscribe();
  },[]);


    return (
      <View style={styles.container}>
        <Text style={{fontSize: 10}}>{JSON.stringify(state.stepData)}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
