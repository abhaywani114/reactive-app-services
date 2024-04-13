import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import ContentApi from "../../utils/ContentApi"
import { Ionicons } from '@expo/vector-icons';
import colors from "../../utils/colors";

const BusinessListByCategory = () => {
    const { params }  = useRoute()
    const navigator = useNavigation()
    const [ dataBusinessList, setDataBusinessList ] = useState([])

    useEffect(() => {
        const { category } = params
        category && ContentApi.getBusinessListByCategory(category).then((d) => setDataBusinessList(d.businessLists)).catch(err => console.error(err))
        console.log(dataBusinessList)
    },[params])

    return dataBusinessList.length > 0 && (
        <View style={{padding: 20, paddingHorizontal: 15}}>
            <View style={style.arrowWrapper}>
               <TouchableOpacity onPress={() => navigator.goBack()}>
                    <Ionicons name="arrow-back-sharp" size={24} color={colors.PRIMARY} />
                </TouchableOpacity>
               <Text style={style.textHeading}>{params?.category}</Text>
            </View>
            <ScrollView>
                <FlatList 
                    data={dataBusinessList}
                    contentContainerStyle={{ marginTop: 20, paddingBottom: 100 }}
                    renderItem={({item, key}) => <BusinessListItems item={item} />}
                />
            </ScrollView>
        </View>
    )
}

const BusinessListItems = ({item}) => {
    return (
        <View style={style.listWrapper}>
            <Image
                source={{uri: item?.image[0]?.url}}
                style={style.image}
            />
            <View style={{ justifyContent: 'center' }}>
                <Text style={style.textCP}>{ item?.conactPerson }</Text>
                <Text style={style.textName}>{ item?.name }</Text>
                <Text style={style.textAddr}>
                    <Entypo name="location-pin" size={15} color={colors.PRIMARY} />
                    <Text> { item?.address }</Text>
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    arrowWrapper : {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textHeading: {
        fontWeight: 'bold',
        fontSize: 17
    },
    listWrapper: {
        flexDirection: 'row',
        gap: 15,
        backgroundColor: colors.WHITE,
        padding: 10,
        borderRadius: 10
    },
    image: {
        height: 100,
        width: 130,
        borderRadius: 10
    },
    textCP: {
        color: '#777',
        fontSize: 15
    },
    textName: {
        color: colors.PRIMARY,
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 1
    },
    textAddr: {
     display: 'flex',
     justifyContent: 'center',
     fontSize: 11,
     marginVertical: 7
    }
})

export default BusinessListByCategory