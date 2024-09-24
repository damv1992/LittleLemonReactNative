import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'
import WelcomeScreen from './WelcomeScreen'
import LoginScreen from './LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({size}) => {
                let iconName
                if (route.name === 'Welcome') iconName = 'home'
                else if (route.name === 'Login') iconName = 'enter'
                return <Ionicons name={iconName} size={size} />
              },
            })}
            initialRouteName="Login">
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
          </Tab.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
})
