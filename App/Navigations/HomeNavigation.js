import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/Home';
import BusinessListByCategory from '../Screens/BusniessListByCategory/BusniessListByCategory';

const Stack = createStackNavigator(undefined);

function HomeNavigation()  {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="business-navigator" component={BusinessListByCategory} />
    </Stack.Navigator>
  );
}

export default HomeNavigation