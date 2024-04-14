import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./../Screens/HomeScreen/Home"
import BookingScreen from "./../Screens/BookingScreen/BookingScreen"
import { Feather } from '@expo/vector-icons';
import Colors  from './../utils/colors';
import HomeNavigation from './HomeNavigation';
import colors from './../utils/colors';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.PRIMARY
        }} >
          <Tab.Screen name="HomeNavigation" component={HomeNavigation} options={{
            tabBarLabel: (color, size) => (<Text style={{ fontSize: 12, color: color }}>Home</Text>),
            tabBarIcon: (color,size) => (<Feather name="home" size={20} color={color} />)
            }}  />
          <Tab.Screen name="Booking" component={BookingScreen} options={{
            tabBarLabel: (color) => (<Text style={{ fontSize: 12 }}>Booking</Text>),
            tabBarIcon: (color, size) => (<Feather name="truck" size={20} color={color}  />)
            }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs