import {FlatList, Image, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {fakeData, ItemI} from "./src/data/FakeData";


export default function App() {
    const renderItem: ListRenderItem<ItemI> = ({item}) => {
        return <View>
            <Image style={[styles.image]} source={item.image}/>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>

        </View>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                numColumns={2}
            />
            <Image style={styles.image} source={require('./assets/favicon.png')}/>
            <Image style={styles.image} source={require('./assets/phonePhoto/image 1.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
    }
});

