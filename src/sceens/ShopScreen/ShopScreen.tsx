import React, {useRef, useState} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent, Pressable, StatusBar, View} from "react-native";
import {styles} from "./ShopStyles";
import {fakeData} from "../../data/FakeData";
import {PADDING} from "../../constant/constant";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {Empty} from "../../components/Empty/Empty";
import {ScrollUpIcon} from "../../svgIcons/scrollUpIcon";
import {ShopRenderItem} from "./ShopRenderItem/ShopRenderItem";

export const ShopScreen = () => {
    const listRef = useRef<FlatList<any>>(null);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const CONTENT_OFFSET_THRESHOLD = 300;

    const onPressScrollUpHandler = () => {
        listRef.current?.scrollToOffset({offset: 0, animated: true});
    }
    
    const onScrollFlatList = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
        setContentVerticalOffset(event.nativeEvent.contentOffset.y);
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <FlatList
                data={fakeData}
                ref={listRef}
                onScroll={onScrollFlatList}
                renderItem={ShopRenderItem}
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
            {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD
                && <Pressable style={[styles.scrollTopButton]}
                              onPress={onPressScrollUpHandler}
                >
                    <ScrollUpIcon/>
                </Pressable>}
        </View>
    );
};
