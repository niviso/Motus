import React from 'react';
import ReactDOM from 'react-dom';
var listOfImages =[];
import {Image,View,ScrollView,TouchableOpacity,Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function ProfileImages(){

        const Image_sources = [ //Lets not make this hardcoded in the future
          require('../../assets/profile_icons/1.png'),
          require('../../assets/profile_icons/2.png'),
          require('../../assets/profile_icons/3.png'),
          require('../../assets/profile_icons/4.png'),
          require('../../assets/profile_icons/5.png'),
          require('../../assets/profile_icons/6.png'),
          require('../../assets/profile_icons/7.png'),
          require('../../assets/profile_icons/8.png'),
          require('../../assets/profile_icons/9.png'),
          require('../../assets/profile_icons/10.png'),
          require('../../assets/profile_icons/11.png'),
          require('../../assets/profile_icons/12.png'),
          require('../../assets/profile_icons/13.png'),
          require('../../assets/profile_icons/14.png'),
          require('../../assets/profile_icons/15.png'),
          require('../../assets/profile_icons/16.png'),
          require('../../assets/profile_icons/17.png'),
          require('../../assets/profile_icons/18.png'),
          require('../../assets/profile_icons/19.png'),
          require('../../assets/profile_icons/20.png'),
          require('../../assets/profile_icons/20.png'),
          require('../../assets/profile_icons/21.png'),
          require('../../assets/profile_icons/22.png'),
          require('../../assets/profile_icons/23.png'),
          require('../../assets/profile_icons/24.png'),
          require('../../assets/profile_icons/25.png'),
          require('../../assets/profile_icons/26.png'),
          require('../../assets/profile_icons/27.png'),
          require('../../assets/profile_icons/28.png'),
          require('../../assets/profile_icons/29.png'),
          require('../../assets/profile_icons/30.png'),
          require('../../assets/profile_icons/30.png'),
          require('../../assets/profile_icons/31.png'),
          require('../../assets/profile_icons/32.png'),
          require('../../assets/profile_icons/33.png'),
          require('../../assets/profile_icons/34.png'),
          require('../../assets/profile_icons/35.png'),
          require('../../assets/profile_icons/36.png'),
          require('../../assets/profile_icons/37.png'),
          require('../../assets/profile_icons/38.png'),
          require('../../assets/profile_icons/39.png'),
          require('../../assets/profile_icons/40.png'),
          require('../../assets/profile_icons/40.png'),
          require('../../assets/profile_icons/41.png'),
          require('../../assets/profile_icons/42.png'),
          require('../../assets/profile_icons/43.png'),
          require('../../assets/profile_icons/44.png'),
          require('../../assets/profile_icons/45.png'),
          require('../../assets/profile_icons/46.png'),
        ];

        var Images = []

        for(let i =0;i!=Image_sources.length;i++){
          Images.push(
            <TouchableOpacity style={{backgroundColor: 'gray',borderRadius:'100%',margin: 5,overflow: 'hidden',width: 80,height: 80}}>
            <Animatable.Image animation="lightSpeedIn" delay={500+(100*i)} duration={1000} source={Image_sources[i]} style={{width: 90,height: 90}}/>
            </TouchableOpacity>
          )
        }


        return(
          <>
          <View style={{paddingVertical: 25, borderBottomWidth: 2,borderBottomColor: 'gray',borderBottomStyle: 'solid',width:'100%'}}>
          <Text style={{fontSize: 32,textAlign:'center',width: '100%',opacity: 0.7}}>Select profile image</Text>
          </View>
          <ScrollView style={{width: '100%',height:'100%'}}>
          <View style={{display: 'flex',flexDirection:'row',flexWrap: 'wrap',justifyContent: 'center',alignItems:'center'}}>
          {Images}
          </View>
          </ScrollView>
          </>
        )
}
