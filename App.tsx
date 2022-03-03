import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './screens/Home';
import Setting from './screens/Setting';
import Stock from './screens/stock/Stock';

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

	const styles = StyleSheet.create({
		container: {
			// flex: 1,
			backgroundColor: '#000',
			// alignItems: 'center',
			// justifyContent: 'center',
		},
	});

	return (
		<NavigationContainer theme={MyTheme}>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
					let iconName;
		
					if (route.name === 'Feed') {
						iconName = focused
						? 'home'
						: 'home-outline';
					} else if (route.name === 'Settings') {
						iconName =  'settings';
					} else if (route.name === 'Stock') {
						iconName =  'trending-up';
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
				<Tab.Screen name="Réseau" component={Home} />
				<Tab.Screen name="Stock" component={Stock} />
				<Tab.Screen name="Settings" component={Setting} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}