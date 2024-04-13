import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./../Screens/HomeScreen/Home"
import { Feather } from '@expo/vector-icons';
import Colors  from './../utils/colors';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#001100',
          tabBarShowLabel: false
        }} >
          <Tab.Screen name="HomeNavigation" component={HomeNavigation} options={{
            tabBarIcon: (color,size) => (<Feather name="home" size={20} color={color} />)
            }}  />
          <Tab.Screen name="Booking" component={HomeScreen} options={{
            tabBarIcon: (color, size) => (<Feather name="truck" size={20} color={color}  />)
            }} />
          <Tab.Screen name="Profile" component={HomeScreen} options={{
            tabBarIcon: (color, size) => (<Feather name="user" size={20} color={color}  />)
            }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs