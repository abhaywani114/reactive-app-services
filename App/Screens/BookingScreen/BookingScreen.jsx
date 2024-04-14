import { View, Text, FlatList, Image, StyleSheet, ScrollView } from "react-native"
import { useUser } from "@clerk/clerk-expo"
import Heading from "../../components/Heading"
import ContentApi from "../../utils/ContentApi"
import { useEffect, useState } from "react"
import colors from "../../utils/colors"


const BookingScreen = () => {
    const [myBookings, setMyBookings] = useState([])
    const [loading, setRefreshing] = useState(false)
    const { user } = useUser()

    const getMyBookings = () => {
        setRefreshing(true)
        ContentApi.getMyBookings(user.primaryEmailAddress.emailAddress).
            then((d) => {
                setMyBookings(d.bookings)
                setRefreshing(false)
            }).catch( err  => console.log(error))
    }

    useEffect(() => {
        getMyBookings()
    }, [user])

    
    return (
        <ScrollView style={{ padding: 15 }}>
            <Heading text={"My Bookings"} />
            <FlatList
                data={myBookings}
                onRefresh={() => getMyBookings()}
                refreshing={loading}
                renderItem={({item, key}) => <BookingItems item={item} />}
            />
        </ScrollView>
    )
}

const BookingItems = ({ item }) => {
    return (
        <View style={style.bookWrapper}>
            <View style={{ width: '40%', padding: 3 }}>
                <Image source={{ uri: item.businessList.image[0].url }} style={style.image} />
            </View>
            <View>
                <Text style={style.conactPerson}>{item.businessList.conactPerson}</Text>
                <Text style={style.bookingName}>{item.businessList.name}</Text>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={style.date}>{(new Date(item.date)).toLocaleDateString()} - {item.time}</Text>
                    <Text style={style.status(item.bookingStatus)}>{item.bookingStatus}</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    bookWrapper: {
         flexDirection: 'row' ,
         gap:10,
         backgroundColor: colors.WHITE,
         marginTop: 10,
         padding: 4,
         alignItems: 'center',
         borderRadius: 10
    },
    conactPerson:{
        fontSize: 13,
        color: '#444'
    },
    bookingName: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginVertical: 5
    },
    date: {
        color: colors.PRIMARY,
        fontSize: 12
    },
    image: {
        height: 100,
        borderRadius: 10   
    },
    status: (bookingStatus) => ({
        padding: 5,
        fontSize: 9,
        textTransform: 'uppercase',
        backgroundColor: bookingStatus == 'Booked'  ? colors.PRIMARY:'green',
        color: colors.SECONDARY,
        borderRadius: 9
    })
})

export default BookingScreen
