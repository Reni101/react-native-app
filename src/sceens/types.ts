export type MainStackType = {
    Shop: undefined
    Cart: {
        value2: number
    } | undefined
}


export enum Screens {
    CART ='Cart',
    Shop='Shop'
    
}

// export type StackShopProps = NativeStackScreenProps<MainStackType,'Shop'>