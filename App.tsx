import {NavigationContainer} from "@react-navigation/native";
import {MainStackType} from "./src/sceens/types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {View} from "react-native";
import {SVGShoppingCart} from "./src/svgIcons/SVGShoppingCart";
import {SvgHome} from "./src/svgIcons/SVGHome";
import {ShopScreen} from "./src/sceens/ShopScreen/ShopScreen";
import {CartScreen} from "./src/sceens/CartScreen/CartScreen";

const Tab = createBottomTabNavigator<MainStackType>()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={'Shop'}>

                <Tab.Screen name="Shop"
                            component={ShopScreen}
                            options={{
                                headerShown: false, tabBarIcon: ({focused}) => {
                                    return <View>
                                        <SvgHome colorFill={focused ? 'blue' : 'black'}/>
                                    </View>
                                }
                            }}/>

                <Tab.Screen name="Cart"
                            component={CartScreen}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({focused}) => {
                                    return <View>
                                        <SVGShoppingCart colorFill={focused ? 'blue' : 'black'}/>
                                    </View>
                                }
                            }}
                />


            </Tab.Navigator>
        </NavigationContainer>
    );
}


// yarn start --reset-cache
//  npm start -- --reset-cache
//  expo start -c
