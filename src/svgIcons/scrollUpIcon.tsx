import React from 'react';
import Svg, {Path, SvgProps} from "react-native-svg";

export const ScrollUpIcon = (props: SvgProps) => {
    return (
        <Svg
            width="40px"
            height="40px"
            viewBox="0 0 16 16"
            fill="none"

            {...props}
        >
            <Path
                clipRule="evenodd"
                d="M8 0C3.58172 3.86258e-07 -3.86258e-07 3.58172 0 8C3.86258e-07 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 -3.86258e-07 8 0ZM4 8H7L7 13H9V8L12 8V7L8 3L4 7V8Z"
                fill="rgb(38,110,0)"
                fillRule="evenodd"
            />
        </Svg>
    );
};

