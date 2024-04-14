import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import ContentApi from "../../utils/ContentApi"
import colors from "../../utils/colors";
import BackArrow from "../../components/Back";

const BusinessListByCategory = () => {
    const { params }  = useRoute()
    const navigator = useNavigation()
    const [ dataBusinessList, setDataBusinessList ] = useState([])

    useEffect(() => {
        const { category } = params
        category && ContentApi.getBusinessListByCategory(category).then((d) => setDataBusinessList(d.businessLists)).catch(err => console.error(err))
    },[params])

    return  (
        <View style={{padding: 20, paddingHorizontal: 15}}>
            <BackArrow heading={params.category} back={() => navigator.goBack()} />
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

export const BusinessListItems = ({item}) => {
    const navigator = useNavigation()
    const gotoBussniessDetail = () => {
        navigator.navigate("business-detail", {
            businessDetail: item
        })
    }
    return (
        <TouchableOpacity style={style.listWrapper} onPress={gotoBussniessDetail}>
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
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
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
