import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import colors from "../utils/colors";

function BackArrow({heading, back}) {
    return <View style={style.arrowWrapper}>
        <TouchableOpacity onPress={() => back()}>
            <Ionicons name="arrow-back-sharp" size={24} color={colors.PRIMARY} />
        </TouchableOpacity>
        <Text style={style.textHeading}>{heading}</Text>
    </View>;
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
    }
})

export default BackArrow