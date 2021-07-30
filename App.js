import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import cScreen from './cScreen';
import slots from './slots';
import confirmation from './confirmation';

const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.button} >
      <Text style={styles.title}> Book a wellness session </Text>
      <Text style={styles.subTitle}> Visit one of our expert consultants to feel yourself 100% again!!</Text>
      <Button 
        title="Physiotherepy: 30 mins @ $45"
        onPress = {() => navigation.navigate("appointmentBooking") }
      />

      <Button 
        title="Chiro: 30 mins @ $100"
        onPress = {() => navigation.navigate("appointmentBooking") }
      />

      <Button 
        title="Aromatherepy: 30 mins @ $45"
        onPress = {() => navigation.navigate("appointmentBooking") }
      />

      <StatusBar style="canter" />
    </View>
  );
};


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="appointmentBooking" component={cScreen} />
        <Stack.Screen name="slots" component={slots} />
        <Stack.Screen name="confirmationBooking" component={confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
    marginBottom: 50
  },
  subTitle: {
    color: '#05375a',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 150
  }
 
});

export default App;