import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function WheatherInfo({ currentWeather, weather }) {
    
    console.log(weather)
    const { main } = currentWeather
    //const { icon } = weather
    const imageUrl = `https://openweathermap.org/img/wn/${weather ? weather[0].icon : '01d'  }@4x.png`
    console.log(imageUrl)
    return (
        <View style={styles.WheatherInfo}>
            <Image style={styles.imageStyle} source={{ uri: imageUrl }}></Image>
            <Text>{main ? main.temp : 'Loading Info'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    WheatherInfo: {
        alignItems: 'center'
    },
    imageStyle: {
        width: 100,
        height: 100,
    }
})

