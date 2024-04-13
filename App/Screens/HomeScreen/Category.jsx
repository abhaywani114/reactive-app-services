import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Heading from "../../components/Heading"
import { useEffect, useState } from "react"
import ContentApi from "../../utils/ContentApi"
import { useNavigation } from "@react-navigation/native"

const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        ContentApi.getCategories().then(data => setCategories(data?.categories)).catch(err => console.error(err))
    }, []);
    const navgator = useNavigation()
    const onPress = (category) => {
        navgator.navigate("business-navigator", {category})
    }
    return (
        <View style={{ marginTop: 10 }}>
            <Heading text={'Category'} />
            <FlatList
                data={categories}
                numColumns={4}
                renderItem={({item}) => (
                    <TouchableOpacity style={style.categoryWrapper} onPress={() => onPress(item?.name)}>
                        <View style={style.iconWrapper}>
                            <Image source={{ uri: item?.icon?.url}} style={style.image} />
                        </View>
                        <Text style={style.text}>{item?.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const style = StyleSheet.create({
    categoryWrapper: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 7,
        backgroundColor: '#fdfdfd',
        borderRadius: 20,
    },
    image: {
        height:40,
        width: 40,
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 7
    }
})
export default Category