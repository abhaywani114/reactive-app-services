import { StatusBar } from 'expo-status-bar';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo"
import Login  from "./App/Screens/LoginScreen/Login"
import { StyleSheet, Text, View } from 'react-native';
import constants from './App/utils/constants';
import tokenCache from './App/utils/storeTokens';
import Tabs from './App/Navigations/Tabs'
import { useFonts } from 'expo-font'
import RobotoFont from './assets/font/Roboto-Regular.ttf'

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto': RobotoFont
  });

  return (
      <ClerkProvider publishableKey={constants.expoPubKey}  tokenCache={tokenCache}>
         <View style={styles.container}>
          <SignedIn>
            <Tabs/>
          </SignedIn>
          <SignedOut>
            <Login />
          </SignedOut>
          <StatusBar style="auto" />
        </View>
      </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    fontFamily: 'Roboto'
  },
});
