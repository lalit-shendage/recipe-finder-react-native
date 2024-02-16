import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS } from '../Constant'


const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='(tabs)'  options={{
            headerTitle: "Recipe app",
            headerStyle: styles.title,
        }}/>
    </Stack>
  )
}

const styles = StyleSheet.create({
    title:{
        backgroundColor: COLORS.title,
    }
})

export default RootLayout