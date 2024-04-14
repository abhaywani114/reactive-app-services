import { FlatList, Modal, StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import CalendarPicker from "react-native-calendar-picker"
import BackArrow from "../../components/Back";
import Heading from "../../components/Heading";
import colors from "../../utils/colors";
import { useEffect, useState } from "react";
import getTimeStamps from "../../utils/getTimeStamps";



const BookingModel = ({showModel, bookNow}) => {
    const [selectedDate, setSelectedDate] = useState()
    const [selectedTime, setSelectedTime] = useState()
    const [timeStamps, setTimeStamps] = useState() 
    const [note, setNote] = useState() 
    useEffect(() => {
        setTimeStamps(getTimeStamps())
    },[])

    const onDateChange = (date) => {
        setSelectedDate(date)
    }

    return (
        <Modal
            animationType="slide"
            visible={showModel}>
            <ScrollView>            
            <KeyboardAvoidingView style={{ padding: 15}}>
                <BackArrow heading={'Booking'} back={bookNow} />
                <View style={{marginVertical: 20}}>
                    <Heading text={"Select Date"}  />
                    <View style={style.calenderWrapper}>
                        <CalendarPicker
                            minDate={Date.now()}
                            width={360}
                            textStyle={{ color: colors.SECONDARY, fontWeight: 'bold'}}
                            todayBackgroundColor={colors.PRIMARY}
                            todayTextStyle={{ color: colors.SECONDARY}}
                            selectedDayColor={colors.SECONDARY}
                            selectedDayStyle={{ color: colors.PRIMARY, backgroundColor: colors.SECONDARY}}
                            dayLabelsWrapper={{borderColor: '#fff'}}
                            onDateChange={onDateChange} 
                        />
                    </View>
                </View>
                <View>
                    <Heading text={"Select Time"}  />
                    <FlatList 
                        data={timeStamps}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, key}) => (
                            <TouchableOpacity style={style.timeWrapper(item == selectedTime)} onPress={() => setSelectedTime(item) }>
                                <Text style={style.timeText(item == selectedTime)}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{marginVertical: 20}}>
                    <Heading text={"Any suggestion date"}  />
                    <TextInput 
                    multiline={true}
                    style={style.suggestion}
                    placeholder="Suggestions..."
                    onChange={(text) => { setNote(text)}}
                    />
                </View>
                <View>
                    <TouchableOpacity style={style.btnWrapper}>
                        <Text style={style.btnText}>Confirm & Book</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        </Modal>
    )
}

const style = StyleSheet.create({
    calenderWrapper: {
        backgroundColor: colors.PRIMARY,
        borderRadius: 15,
        paddingVertical: 25,
    },
    timeWrapper: (isActive) => ({
        marginRight: 10,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.PRIMARY,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: isActive ? colors.PRIMARY:colors.SECONDARY
    }),
    timeText: (isActive) => ({
        fontSize: 15,
        fontWeight: 'bold',
        color: isActive ? colors.SECONDARY:colors.PRIMARY
    }),
    suggestion: {
        textAlignVertical: "top",
        height: 110,
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    btnWrapper: {
        backgroundColor: colors.PRIMARY,
        padding: 15,
        borderRadius: 99,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center'

    },
    btnText: {
        color: colors.SECONDARY,
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default BookingModel