import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native"
import { SceneView } from "react-navigation"
import Heading from "../../components/Heading";
import BackArrow from "../../components/Back";
import ContentApi from "../../utils/ContentApi";
import { BusinessListItems } from "../BusniessListByCategory/BusniessListByCategory";

const SearchScreen = () => {
    const { params } = useRoute();
    const navigation = useNavigation()
    const [searchQuery, setSearchQuery] = useState(params.searchQuery)
    const [result, setResult] = useState([])
    useEffect(() => {
        ContentApi.searchQuery(searchQuery).then( d => setResult(d.businessLists)).catch(err => console.error(err))
    }, [searchQuery])
    return (
        <View style={{ padding: 15 }}>
            <BackArrow heading={`Search: ${searchQuery}`} back={() => navigation.goBack() } />
            <FlatList 
                data={result}
                renderItem={({item, key}) => <BusinessListItems item={item} />}
            />
        </View>
    )
}

export default SearchScreen