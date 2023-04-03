import React from 'react';
import {View} from "react-native";

interface ZStackProps {
    children: JSX.Element[] | JSX.Element
}

const getAbsoluteChildren = (children: JSX.Element[] | JSX.Element) => {
    let childrenForRender = React.Children.toArray(children)
    return childrenForRender.map((child: any) => {
        return React.cloneElement(child, {position: 'absolute'},
            child.props.children)
    })
}


export const ZStack = ({children}: ZStackProps) => {
    return (
        <View style={{position: 'relative'}}>
            {getAbsoluteChildren(children)}
        </View>
    )
};

// Из всех children делаем массив
//  Перемапливаем его
//  Клонируем каждый child и добавляем ему свойство position: 'absolute'
//  Ретурнием его