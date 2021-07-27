import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const ReloadIcon = ({ load }) => {
    const ReloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    return (
        <View style={styles.reloadIcon} >
            <Ionicons  name={ReloadIconName} onPress={() => load()} size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 45,
        left: 190,
    },
})
export default ReloadIcon
