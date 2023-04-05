import {FlatList, Image, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {fakeData, ItemI} from "./src/data/FakeData";
import {PADDING, WIDTH} from "./src/constant/constant";


export default function App() {
    const renderItem: ListRenderItem<ItemI> = ({item}) => {
        return <View style={[styles.itemProps]}>
            <Image style={[styles.imageStyle]}
                   resizeMode={'contain'}
                   source={item.image}/>
            <View style={[styles.infoIphone]}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{paddingHorizontal: PADDING}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        flex: 1,
    },
    imageStyle: {
        width: (WIDTH - PADDING * 2) / 2 - 8,
        height: (WIDTH - PADDING * 2) / 2 - 8,
    },
    itemProps: {
        backgroundColor: 'white',
        width: (WIDTH - PADDING * 2) / 2 - 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        paddingTop: 10
    },
    infoIphone: {
        marginTop: 19,
        marginBottom: 22,
        marginLeft: 12,
        marginRight: 15
    }
});

