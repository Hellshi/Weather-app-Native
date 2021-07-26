import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'

const API_KEY = '7290651dc0b266597e031812f9623844'
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {
  const [error, setError] = useState(null)
  const [wheater, setWheater] = useState([])
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
      const wheatherURL = `${baseURL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      const response = await fetch(wheatherURL)
      const result = await response.json()
      if(response.ok) {
        setWheater(result)
      } else {
        setError(result.message)
      }
    }catch(error){}
  }
  if(wheater) {
    const { main } = wheater
      return (
    <View style={styles.container}>
      <Text>{main.temp}</Text>
      <StatusBar style="auto" />
    </View>
  )
  }
;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
