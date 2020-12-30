import React, { useState,useEffect } from 'react';
import {Text,View} from 'react-native';
import moment from 'moment';
export default function CountDown(props){
  const [timeLeft,setTimeLeft] = useState(0);
  const {start,end} = props;
  const CalculateTimeLeft = () => {
    const [hoursEnd,minutesEnd] = end.split(":");
    const hoursCurrent = moment().format('hh');
    const minutesCurrent = moment().format('mm');
    var hours = (hoursEnd - hoursCurrent) * 60;
    var minutes = minutesEnd - minutesCurrent;

    return hours+minutes;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(CalculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  })
  return (<>
    <Text>{timeLeft} min</Text>
    </>)
}
