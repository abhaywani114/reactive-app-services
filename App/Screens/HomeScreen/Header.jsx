import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native"
import { useAuth, useUser } from "@clerk/clerk-expo"
import { Feather } from '@expo/vector-icons';
import colors from "../../utils/colors"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const { user, isLoading  } = useUser()
    const [searchQuery, setSearchQuery] = useState('')
    const navigator = useNavigation()
    const { signOut } = useAuth();
    const onSearchClick = () => {
        navigator.navigate("search-screen", {
            searchQuery
        });
        setSearchQuery("")
    }
    return user && (
        <View style={style.mainWrapper}>
            <View style={{display: 'flex', flexDirection:'row', gap: 20, alignItems: 'center'}}>
                <Image source={{uri: user.imageUrl}} 
                    style={style.userImage}
                />
                <View>
                    <Text style={{color: colors.SECONDARY, fontSize: 17, fontFamily: 'Roboto'}}>Hey, <Text style={{fontWeight:'bold'}}>{user.firstName}!</Text></Text>
                    <Text style={{color: colors.SECONDARY, fontSize: 12, fontFamily: 'Roboto'}}>What would you like to find today?</Text>
                </View>
                <TouchableOpacity style={{ display: 'flex', flexGrow: 1,  alignItems:'flex-end'}} onPress={signOut}>
                    <Feather name="log-out" size={20} color={colors.SECONDARY} />
                </TouchableOpacity>
            </View>
            <View style={style.searchHolder}>
                <TextInput placeholder="Search..." style={style.search} value={searchQuery} onChangeText={(t) => setSearchQuery(t)} />
                <TouchableOpacity style={style.searchBtn} onPress={onSearchClick}>
                    <Feather name="search" size={20} color={colors.PRIMARY} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainWrapper: {
        backgroundColor: colors.PRIMARY,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        height: 150,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 99,
    },
    searchHolder: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 15,
        gap: 10
    },
    search: {
        padding: 5,
        paddingHorizontal: 16,
        backgroundColor: colors.WHITE,
        borderRadius: 10,
        width: '85%',
        fontFamily: 'Roboto'
    },
    searchBtn: {
        backgroundColor: colors.SECONDARY,
        borderRadius: 10,
        padding: 7
    }
})

export default Header