import {MainScreen} from "./src/sceens/Main/MainScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ShoppingCartScreen} from "./src/sceens/ShoppingCarstScreen/ShoppingCartScreen";
import {MainStackType} from "./src/sceens/types";

const Stack = createNativeStackNavigator<MainStackType>()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Shop" component={ShoppingCartScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}



