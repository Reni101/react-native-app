import {MainScreen} from "./src/sceens/Main/MainScreen";
import {NavigationContainer} from "@react-navigation/native";
import {ShoppingCartScreen} from "./src/sceens/ShoppingCarstScreen/ShoppingCartScreen";
import {MainStackType} from "./src/sceens/types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<MainStackType>()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen name="Main" component={MainScreen} options={{headerShown:false}}/>
                <Tab.Screen name="Shop"  options={{headerShown:false}} >
                    {(props) => <ShoppingCartScreen {...props}  value={12}/>}
                </Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    );
}


// yarn start --reset-cache
//  npm start -- --reset-cache
//  expo start -c
