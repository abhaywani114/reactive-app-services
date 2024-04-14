import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/Home';
import BusinessListByCategory from '../Screens/BusniessListByCategory/BusniessListByCategory';
import BusniessDetailScreen from '../Screens/BusniessDetailScreen/BusniessDetailScreen';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';

const Stack = createStackNavigator(undefined);

function HomeNavigation()  {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="business-navigator" component={BusinessListByCategory} />
      <Stack.Screen name="business-detail" component={BusniessDetailScreen} />
      <Stack.Screen name="search-screen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigation