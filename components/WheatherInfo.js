import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WheatherInfo({ currentWeather, name }) {
    console.log(currentWeather)
    const { main } = currentWeather
    const { weather } = currentWeather
    const imageUrl = `https://openweathermap.org/img/wn/${weather ? weather[0].icon : '01d'  }@4x.png`
    console.log(weather)
    return (
        <View style={styles.WheatherInfo}>
            <Text>{name? name : 'Loading data'}</Text>
            <Image style={styles.imageStyle} source={{ uri: imageUrl }}></Image>
            <Text style={styles.textPrimary}>{main ? `${main.temp}°` : 'Loading Info'}</Text>
            <Text style={styles.textDescription}>{weather ? weather[0].description : 'Loading Info'}</Text>
            <Text style={styles.textSecondary}>{weather ? weather[0].main : 'Loading Info'}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    WheatherInfo: {
        alignItems: 'center',
    },
    imageStyle: {
        width: 100,
        height: 100,
    }, 
    textDescription: {
        textTransform: 'capitalize'
    },
    textPrimary: {
        color: PRIMARY_COLOR,
        fontSize: 40,
    },
    textSecondary: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
    }
})

