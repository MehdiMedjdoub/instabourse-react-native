import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedSplash from "react-native-animated-splash-screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import AnimatedLogo from './components/logo/Animated';

import Home from './screens/Home';
import Setting from './screens/Setting';
import Stock from './screens/stock/Stock';
import Network from './screens/network/Network';
import UserProfileProvider from './contexts/UserProfileContext';

const Tab = createBottomTabNavigator();

const MyTheme = {
	...DefaultTheme,
	colors: {
	  ...DefaultTheme.colors,
	//   primary: 'rgb(255, 45, 85)',
	  background: '#000000'
	},
};

export default function App() {

	const [ isLoaded, setIsLoaded ] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true)
		  }, 3000);
		  return () => clearTimeout(timer);
	})

	return (
		<UserProfileProvider>
			<AnimatedSplash
				translucent={true}
				isLoaded={isLoaded}
				// logoImage={require("./assets/logo.png")}
				customComponent={<AnimatedLogo />}
				backgroundColor={"#262626"}
				logoHeight={150}
				logoWidth={150}
			>
				<NavigationContainer theme={MyTheme}>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							headerShown: false,
							tabBarIcon: ({ focused, color, size }) => {
							let iconName;
				
							if (route.name === 'Feed') {
								iconName = focused ? 'home' : 'home-outline';
							} else if (route.name === 'Settings') {
								iconName = focused ? 'settings': 'settings-outline';
							} else if (route.name === 'Stock') {
								iconName = focused ? 'trending-up': 'trending-up-outline';
							} else if (route.name === 'Réseau') {
								iconName = focused ? 'people': 'people-outline';
							}
				
							// You can return any component that you like here!
							return <Ionicons name={iconName} size={size} color={color} />;
							},
							tabBarStyle: {
								height: 90,
								paddingHorizontal: 5,
								paddingTop: 0,
								backgroundColor: '#000',
								position: 'absolute',
								borderTopWidth: 0,
							},
							tabBarActiveTintColor: 'white',
							tabBarInactiveTintColor: 'gray',
						})}
					>
						<Tab.Screen name="Feed" component={Home} />
						<Tab.Screen name="Réseau" component={Network} />
						<Tab.Screen name="Stock" component={Stock} />
						<Tab.Screen name="Settings" component={Setting} />
					</Tab.Navigator>
				</NavigationContainer>
			</AnimatedSplash>
		</UserProfileProvider>
	);
}