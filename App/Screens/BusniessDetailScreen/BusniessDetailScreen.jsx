import { useNavigation, useRoute } from "@react-navigation/native"
import {  useState } from "react"
import { Ionicons, Entypo } from '@expo/vector-icons';
import colors from "../../utils/colors";
import BookingModel from "./BookingModel";

const { View, Text, Image, StyleSheet, TouchableOpacity, Modal } = require("react-native")

const BusniessDetailScreen = () => {
    const { params } = useRoute()
    const navigator = useNavigation()
    const [ business, setBusiness ] = useState(params.businessDetail)
    const [showModel, setShowModel] = useState(false)
    const bookNow = () => setShowModel(!showModel)

    return business && (
        <View style={{height: '100%'}}>
            <View>
                <Image 
                    source={{uri: business?.image[0]?.url}}
                    style={style.image}
                />
                <TouchableOpacity style={style.arrow} onPress={() => navigator.goBack()}>
                    <Ionicons name="arrow-back-sharp" size={24} color={colors.PRIMARY} />
                </TouchableOpacity>
            </View>
            <View style={style.textWrapper}>
                <Text style={style.businessName}>{business?.name}</Text>
                <View  style={style.categoryWrapper}>
                    <Text style={style.contactPerson}>{business?.conactPerson}</Text>
                    <Text>|</Text>
                    <View style={{ backgroundColor: colors.PRIMARY, padding: 3, borderRadius: 5, justifyContent: 'center'}}>
                        <Text style={style.category}>{business?.category.name}</Text>
                    </View>
                    <Text>|</Text>
                    <Text style={style.address}><Entypo name="location-pin" size={15} color={colors.PRIMARY} /> {business?.address}</Text>
                </View>
                <View style={{ borderTopWidth: 2, borderBlockColor: '#ccc', marginVertical: 10}}></View>
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 15, color: '#444'}}>About Me</Text>
                <Text>{business?.description}</Text>
            </View>
            <View style={style.buttonWrapper}>
                <TouchableOpacity style={style.btn1}><Text style={style.bt1Text}>Message</Text></TouchableOpacity>
                <TouchableOpacity style={style.btn2}  onPress={bookNow}><Text style={style.bt2Text}>Book Now</Text></TouchableOpacity>
            </View>
            <BookingModel showModel={showModel} bookNow={bookNow} />
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        width: '100%',
        height: 250
    },
    arrow: {
        position: 'absolute',
        backgroundColor: colors.SECONDARY,
        padding: 7,
        borderRadius: 99,
        top: 10,
        left: 10
    },
    textWrapper: {
        padding: 20
    },
    businessName: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    contactPerson: {
        color: colors.PRIMARY,
        fontWeight: 'bold',
        fontSize: 13
    },
    categoryWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
        gap: 10
    },
    category: {
        color: colors.SECONDARY,
        fontSize: 9,
    },
    address: {
        fontSize: 13,
        letterSpacing: 0.2,
        color: '#444',
        marginVertical: 5
    },
    buttonWrapper: {
        flexDirection:'row',
        gap: 10,
        position: 'absolute',
        bottom: 0,
        padding: 10,
        backgroundColor: colors.SECONDARY
    },
    btn1: {
        flex: 0.5,
        alignItems: 'center',
        color: colors.PRIMARY,
        borderWidth: 3,
        padding: 10,
        borderColor: colors.PRIMARY,
        borderRadius: 99
    },
    bt1Text: {
        color: colors.PRIMARY,
        fontWeight: 'bold',
        fontSize: 15
    },
    btn2: {
        flex: 0.5,
        alignItems: 'center',
        backgroundColor: colors.PRIMARY,
        borderWidth: 3,
        padding: 10,
        borderColor: colors.PRIMARY,
        borderRadius: 99
    },
    bt2Text: {
        color: colors.SECONDARY,
        fontWeight: 'bold',
        fontSize: 15
    },
})
export default BusniessDetailScreen