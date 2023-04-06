import {FlatList, Image, ListRenderItem, Pressable, Text, View} from 'react-native';
import {fakeData, ItemI} from "./src/data/FakeData";
import {PADDING} from "./src/constant/constant";
import {SVGBin} from "./src/svgIcons/SVGBin";
import {styles} from "./AppStyles";
import {Header} from "./src/components/Header/Header";
import {Footer} from "./src/components/Footer/Footer";
import {Empty} from "./src/components/Empty/Empty";


export default function App() {
    const renderItem: ListRenderItem<ItemI> = ({item}) => {
        return <View style={[styles.itemProps]}>
            <Image style={[styles.imageStyle]}
                   resizeMode={'contain'}
                   source={item.image}/>
            <View style={[styles.infoIphone]}>
                <Text style={[styles.phoneName]}>{item.title}</Text>
                <View style={[styles.priceContainer]}>
                    <Text style={[styles.phonePrice]}> $ {item.price}</Text>
                    <Pressable>
                        <SVGBin/>
                    </Pressable>

                </View>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{paddingHorizontal: PADDING, flexGrow: 1}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                ListHeaderComponent={Header}
                ListHeaderComponentStyle={styles.header}
                stickyHeaderIndices={[0]}
                ListFooterComponent={Footer}
                ListFooterComponentStyle={styles.footer}
                ListEmptyComponent={Empty}
            />
        </View>
    );
}



