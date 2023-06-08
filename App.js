import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import { AppProvider } from './AppContext';
import HomeScreen from './screens/HomeScreen';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Minha História') {
                iconName = focused ? 'history' : 'history';
              } else if (route.name === 'Imagens') {
                iconName = focused ? 'image' : 'image';
              }
                else if (route.name === 'Títulos') {
                iconName = focused ? 'trophy' : 'trophy';
              }
                else if (route.name === 'Hino') {
                iconName = focused ? 'music' : 'music';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'yellow',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Minha História" component={Screen1} />
          <Tab.Screen name="Imagens" component={Screen2} />
          <Tab.Screen name="Títulos" component={Screen3} />
          <Tab.Screen name="Hino" component={Screen4} />
        </Tab.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
