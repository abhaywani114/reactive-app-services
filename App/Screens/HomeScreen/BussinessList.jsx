import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import Heading from "../../components/Heading"
import { useEffect, useState } from "react"
import ContentApi from "../../utils/ContentApi"
import colors from "../../utils/colors"


const BusinessListItem = ({ item }) => {
    return  (
        <View style={style.imageWrapper}>
            <Image style={style.image} source={{uri: item?.image[0]?.url}} />
            <View>
                <Text style={style.text.serviceName}>{item?.name}</Text>
                <Text style={style.text.conactPerson}>{item?.conactPerson}</Text>
                <Text style={style.text.categories}>{item?.category?.name}</Text>
            </View>
        </View>
    )
}

const BusinessList  = () => {
    const [businessListData, setBusinessListData ] = useState([])
    useEffect(() => {
        ContentApi.getBussinessList().then((d) => setBusinessListData(d.businessLists)).catch( err => console.error(err))
    },[])
    return (
        <View style={{marginTop: 10}}>
            <Heading text={"Latest Business Services"} />
            <FlatList
                data={businessListData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginBottom: 150}}
                renderItem={({item, key}) => <BusinessListItem item={item} />}
                />
        </View>
    )
}

const style = StyleSheet.create({
    imageWrapper: {
        marginRight: 20,
        padding: 10,
        paddingBottom: 15,
        backgroundColor: colors.WHITE,
        borderRadius: 5
    },
    image: {
        height: 150,
        width: 250,
        objectFit: 'cover',
        borderRadius: 5
    },
    text: {
        serviceName: {
            fontFamily: 'Roboto',
            fontSize: 17,
            fontWeight: 'bold',
            marginTop: 10
        },
        conactPerson: {
            fontSize: 15,
            marginTop: -2,
            color: colors.PRIMARY
        },
        categories: {
            backgroundColor: colors.PRIMARY,
            color: colors.SECONDARY,
            padding: 3,
            paddingHorizontal: 10,
            borderRadius: 5,
            marginTop: 15,
            alignSelf: 'flex-end',
            position: 'absolute',
            fontSize: 10,
            bottom: 0
        }
    }
})

export default BusinessList