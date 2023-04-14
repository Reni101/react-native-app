import {NavigationContainer} from "@react-navigation/native";
import {MainStackType} from "./src/sceens/types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ShopScreen} from "./src/sceens/ShopScreen/ShopScreen";
import {CartScreen} from "./src/sceens/CartScreen/CartScreen";
import {optionsUtils} from "./src/sceens/OptionsForNavigate/otionsUtils";

const Tab = createBottomTabNavigator<MainStackType>()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={'Shop'}>

                <Tab.Screen name="Shop"
                            component={ShopScreen}
                            options={optionsUtils('Shop')}/>

                <Tab.Screen name="Cart"
                            component={CartScreen}
                            options={optionsUtils('Cart')}
                />


            </Tab.Navigator>
        </NavigationContainer>
    );
}


// yarn start --reset-cache
//  npm start -- --reset-cache
//  expo start -c
