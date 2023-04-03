import React, {ReactNode} from 'react';
import {View} from "react-native";


interface HStackProps {
    children: ReactNode
}

export const HStack = ({children}: HStackProps) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {children}
        </View>
    );
};

