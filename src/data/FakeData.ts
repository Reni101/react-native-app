import {ImageSourcePropType} from "react-native";

export interface ItemI {
    id: number,
    title: string,
    price: number,
    image: ImageSourcePropType
}

const images = [
    require('../../assets/phonePhoto/image 1.png'),
    require('../../assets/phonePhoto/image 2.png'),
    require('../../assets/phonePhoto/image 3.png'),
    require('../../assets/phonePhoto/image 4.png'),
    require('../../assets/phonePhoto/image 5.png'),
    require('../../assets/phonePhoto/image 6.png'),

]

const titles = [
    'Apple iPhone 13 128GB Blue',
    'Apple iPhone 14 Pro 128GB Space Black',
    'Apple iPhone 12 128GB Purple',
    'Apple iPhone SE 128GB 2022 Midnight',
    'Apple iPhone 13 512GB Midnight',
    'Apple iPhone 14 Pro Max 256GB Purple'
]

const prices = [999, 1199, 799, 599, 899, 1199]

export const fakeData: ItemI[] = [...Array(12)].map((_, index) => ({
    id: index + 1,
    title: titles[index % titles.length],
    price: prices[index % prices.length],
    image: images[index % images.length],
}))