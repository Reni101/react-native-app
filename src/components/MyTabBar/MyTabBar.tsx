import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationHelpers, ParamListBase, TabNavigationState} from "@react-navigation/native";
import {BottomTabNavigationEventMap} from "@react-navigation/bottom-tabs";
import {BottomTabDescriptorMap} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {HomeIcon} from "../../svgIcons/homeIcon";
import {ShoppingCartIcon} from "../../svgIcons/shoppingCartIcon";

interface TabBarProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export const MyTabBar = ({state, descriptors, navigation}: TabBarProps) => {
    return (
        <View style={[styles.container]}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {

                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        style={{alignItems:'center'}}
                        hitSlop={20}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >

                        {route.name === "Shop"
                            ? <HomeIcon colorFill={isFocused ? '#673ab7' : '#222'}/>
                            : <ShoppingCartIcon colorFill={isFocused ? '#673ab7' : '#222'}/>}

                        <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                            {label.toString()}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        height: 70,
        paddingHorizontal: 30,
        padding: 15
    }
})