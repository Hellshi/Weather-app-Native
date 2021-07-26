import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'

export default function App() {
  const [error, setError] = useState(null)
  useEffect(() => {
    Load()
  }, [])

  const Load = async() => {
    try{
      let { status } = await Location.requestBackgroundPermissionsAsync()

      if (status !== 'granted') {
        setError('Acess to location is needed')
        return
      }
      const location = await Location.getCurrentPositionAsync()
      const { latitude, longitude } = location.coords
      alert(`${latitude} ${longitude}`)
    }catch(error){}
  }
  return (
    <View style={styles.container}>
      <Text>Hello from the deepts of hell</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
