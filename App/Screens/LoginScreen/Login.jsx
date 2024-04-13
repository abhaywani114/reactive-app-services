import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser"
import colors from "../../utils/colors"
import button  from '../../utils/buttons'
 
WebBrowser.maybeCompleteAuthSession();
 
const Login = () => {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
    return (
        <View style={style.main}>
            <View style={style.topView}>
                <Text>App Developed by: Abrar Ajaz Wani</Text>
                <Text>abhaywani114@gmail.com</Text>
            </View>
            <View style={style.bottomView}>
                <Text style={{ color: colors.SECONDARY, fontSize: 21, textAlign: 'center', borderBottomWidth: 1, borderBottomColor: colors.SECONDARY, paddingBottom: 10}}>
                    Let's find a 
                    <Text style={{ fontWeight: 'bold'}}> professional cleaning and repair</Text> service
                </Text>
                <Text style={{ color: colors.SECONDARY, marginTop: 20, fontSize: 15, textAlign: 'center' }}>Best app to find services near you which deliver you a professional service.</Text>
                <TouchableOpacity style={button.primaryBtn.wrapper} activeOpacity={0.8} onPress={onPress}>
                    <Text style={button.primaryBtn.text}>Let's get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style  = StyleSheet.create({
    main: {
        
    },
    topView: {
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomView: {
        height: '35%',
        backgroundColor: colors.PRIMARY,
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        padding: 35
    }
});

export default Login