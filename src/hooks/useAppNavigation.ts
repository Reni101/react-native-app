import {NavigationProp, useNavigation} from "@react-navigation/native";
import {MainStackType} from "../sceens/types";
export type NavigationUseType = NavigationProp<MainStackType>

export const useAppNavigation = () => useNavigation<NavigationUseType>()