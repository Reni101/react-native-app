import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type MainStackType = {
    Main: undefined
    Shop: {
        value2: number
    } | undefined
}

export type StackShopProps = NativeStackScreenProps<MainStackType,'Shop'>