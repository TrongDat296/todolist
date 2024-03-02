import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import SearchScreen from '../SearchScreen';
import HomeScreen from '../screen/homes/HomeScreen';
import AddNewTask from '../screen/taks/AddNewTask';
import auth from '@react-native-firebase/auth';
import LoginScreen from '../screen/auth/LoginScreen';
import SignUpScreen from '../screen/auth/SignUpScreen';

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  const Stack = createNativeStackNavigator();

  const MainRouter = (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddNewTask" component={AddNewTask} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );

  const AuthRouter = (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
  return isLogin ? MainRouter : AuthRouter;
};

export default Router;
