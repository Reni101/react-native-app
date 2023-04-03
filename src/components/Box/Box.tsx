import React from 'react';
import {View, ViewProps} from "react-native";

interface BoxPropsI extends ViewProps {
    bgr: string
    width: number,
    height?: number,
    mt?: number,
    mr?: number,
    mb?: number,
    ml?: number,
}

export const Box = ({
                        children,
                        bgr, width, height, ml, mr, mt, mb,
                        ...restProps
                    }: BoxPropsI) => {


    if (children) {
        return <View
            {...restProps}
            style={[restProps.style, {
                backgroundColor: bgr,
                borderWidth: 1,
                width,
                margin: 3,
                height: height ?? width,
                marginTop: mt ? mt : undefined,
                marginBottom: mb ? mb : undefined,
                marginLeft: ml ? ml : undefined,
                marginRight: mr ? mr : undefined
            }]}>{children}</View>
    }

    return (
        <View
            {...restProps}
            style={[restProps.style, {
                backgroundColor: bgr,
                borderWidth: 1,
                width,
                margin: 3,
                height: height ?? width,
                marginTop: mt ? mt : undefined,
                marginBottom: mb ? mb : undefined,
                marginLeft: ml ? ml : undefined,
                marginRight: mr ? mr : undefined
            }]}>

        </View>
    );
};
