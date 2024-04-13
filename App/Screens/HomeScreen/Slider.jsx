import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import ContentApi from "../../utils/ContentApi"
import { useEffect, useState } from "react"
import colors from "../../utils/colors"
import Heading from "../../components/Heading"

const Slider = () => {
    [ sliderData, setSliderData ] = useState([])
    useEffect( () => {
        ContentApi.getSlider().then((data) => {
            setSliderData(data.sliders)
        }).catch((err)  => console.error(err))
    }, []);

    return (
        sliderData.length > 0 && <View>
            <Heading text={'Offers for you'} />
            <FlatList 
                data={sliderData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({item, index}) => (
                    <View style={{ marginLeft: 10 }}>
                        <Image
                            source={{uri: item?.image?.url}}
                            style={styles.image}
                        />
                    </View>   
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
   image: {
    width: 200,
    height: 150,
    objectFit: 'cover',
    borderRadius: 20,
   }
})

export default Slider