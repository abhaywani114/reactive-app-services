import { StyleSheet, Text, View } from "react-native"
import colors from "../utils/colors"

const Heading = ({text}) => {
    return (
        <View>
            <Text style={styles.heading}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
     fontFamily: 'Roboto',
     fontSize: 17,
     fontWeight: 'bold',
     color: colors.PRIMARY,
     marginBottom: 10
    }
})
export default Heading