import React, {ReactNode} from 'react';
import {ScrollView, View} from "react-native";
import {PADDING, WIDTH} from "../../constant/constant";


interface HStackProps {
    children: ReactNode
}

export const HStack = ({children}: HStackProps) => {
    let sumWidth = 0
    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return
        const {width} = child.props
        sumWidth += width
    })
    if ((WIDTH - PADDING * 2) < sumWidth) {
        return <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: -PADDING}}
        >
            {children}
        </ScrollView>
    }

    return (
        <View style={{flexDirection: 'row'}}>
            {children}
        </View>
    );
};

