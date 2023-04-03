import React from 'react';
import {View} from "react-native";

interface ZStackProps {
    children: JSX.Element[] | JSX.Element
    revers?: boolean
}

const getAbsoluteChildren = (children: JSX.Element[] | JSX.Element, reverse?: boolean) => {
    let childrenForRender = React.Children.toArray(children)
    if (reverse) {
        childrenForRender = childrenForRender.reverse()
    }
    return childrenForRender.map((child: any) => {
        return React.cloneElement(child, {position: 'absolute'},
            child.props.children)
    })
}


export const ZStack = ({children, revers}: ZStackProps) => {
    return (
        <View style={{position: 'absolute'}}>
            {getAbsoluteChildren(children, revers)}
        </View>
    )
};

// Из всех children делаем массив
//  Перемапливаем его
//  Клонируем каждый child и добавляем ему свойство position: 'absolute'
//  Ретурнием его