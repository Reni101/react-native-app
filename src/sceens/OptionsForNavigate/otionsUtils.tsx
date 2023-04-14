import {Text, View} from "react-native";
import {HomeIcon} from "../../svgIcons/homeIcon";
import {ShoppingCartIcon} from "../../svgIcons/shoppingCartIcon";


export const optionsUtils = (name: "Cart" | "Shop") => {
    return {
        headerShown: false,
        tabBarIcon: ({focused}: { focused: boolean }) => {
            const color = focused ? 'rgb(38,110,0)' : 'black'
            return <View>
                {name === "Shop"
                    ? <HomeIcon colorFill={color}/>
                    : <ShoppingCartIcon colorFill={color}/>}
            </View>
        },
        tabBarLabel: ({focused}: { focused: boolean }) => {
            return <>
                <Text style={{color: focused ? 'rgb(38,110,0)' : 'black'}}>{name}</Text>
            </>
        },
    }
}