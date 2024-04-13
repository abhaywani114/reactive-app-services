import { View, Text } from "react-native"
import Header from "./Header"
import Slider from "./Slider"
import Category from "./Category"
import BussniessList from "./BussinessList"
import { ScrollView } from "react-native-virtualized-view"

const HomeScreen = () => {
    return (
        <View>
            <Header />
            <ScrollView>

            <View style={{ padding: 10 }}>
                <Slider />
                <Category />
                <BussniessList />
            </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen