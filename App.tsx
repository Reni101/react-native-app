import {FlatList, Image, ListRenderItem, Pressable, StatusBar, Text, View} from 'react-native';
import {fakeData, ItemI} from "./src/data/FakeData";
import {PADDING} from "./src/constant/constant";
import {SVGShoppingCart} from "./src/svgIcons/SVGShoppingCart";
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
                        <SVGShoppingCart/>
                    </Pressable>

                </View>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                numColumns={2}
                bounces={false}
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



