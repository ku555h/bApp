import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import confirmation from './confirmation';

const jsonData = { "slots" : {
    "slot1": "10:00am to 10:30am",
    "slot2": "10:30am to 11:00am",
    "slot3": "11:00am to 11:30am",
    "slot4": "11:30am to 12:00pm",
    "slot5": "12:30am to 1:00pm",
    "slot6": "1:00pm to 1:30pm",
    "slot7": "1:30pm to 2:00pm",
    "slot8": "2:00pm to 2:30pm",
    "slot9": "2:30pm to 3:00pm",
    "slot10": "3:00pm to 3:30pm",
    "slot11": "3:30pm to 4:00pm"
 }
}
export default class Slot extends Component {
  constructor(props) {
     super(props);
     this.state ={
       bookingDate: this.props.navigation.bookingDate
     }
    }

//     onButtonClickHandler = () => {
//     window.alert('Booking Confirmed!!')
//   };
    
  render = () => {
    let _this = this
    const slots = jsonData.slots
    const slotsarr = Object.keys(slots).map( function(k) {
      return (  <View key={k} style={{margin:5}}>
          <Button
              title={slots[k]}
               //onPress={() => this.navigation("confirmation")}  
              onPress={() => alert('Slot Booked')}

          />
                </View>)
    });
    return (
      <View style={styles.container}>
            {slotsarr}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 150
    },
    button: {
      alignItems: 'center',
      marginBottom: 30,
      padding: 20
    }
});