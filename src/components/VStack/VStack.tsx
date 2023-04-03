import React, {ReactNode} from 'react';
import {View} from "react-native";

interface VStackProps {
    children: ReactNode
}

export const VStack = ({children}: VStackProps) => {
    return (
        <View>
            {children}
        </View>
    );
};

