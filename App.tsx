import {NavigationContainer} from "@react-navigation/native";
import {MainStackType} from "./src/sceens/types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ShopScreen} from "./src/sceens/ShopScreen/ShopScreen";
import {CartScreen} from "./src/sceens/CartScreen/CartScreen";
import {MyTabBar} from "./src/components/MyTabBar/MyTabBar";

const Tab = createBottomTabNavigator<MainStackType>()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>

                <Tab.Screen name="Shop"
                            options={{headerShown:false}}
                            component={ShopScreen}
                />

                <Tab.Screen name="Cart"
                            options={{headerShown:false}}
                            component={CartScreen}

                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}


// yarn start --reset-cache
// npm start -- --reset-cache
// expo start -c
