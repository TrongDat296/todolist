import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../homes/HomeScreen';
import AddNewTask from '../taks/AddNewTask';
import SearchScreen from '../SearchScreen';

const Router = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='AddNewTask' component={AddNewTask} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
        </Stack.Navigator>
    )
}

export default Router;