import { View, Text, StyleSheet, Button, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import HomeScreen from './src/homes/HomeScreen'
import { colors } from './src/constants/colors'

const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={colors.bgColor} />
        <HomeScreen />
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({


})