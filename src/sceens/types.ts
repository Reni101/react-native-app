import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type MainStackType = {
    Shop: undefined
    Cart: {
        value2: number
    } | undefined
}

// export type StackShopProps = NativeStackScreenProps<MainStackType,'Shop'>