import { StyleSheet } from "react-native";
import colors from "./colors";
const primaryBtn = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.SECONDARY,
        padding: 10,
        borderRadius: 30,
        marginTop: 25
    },
    text: {
        color: colors.PRIMARY,
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'capitalize'
    }
})

export default {
    primaryBtn
}

