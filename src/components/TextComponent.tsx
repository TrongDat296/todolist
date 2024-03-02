import { StyleProp, Text, TextStyle } from 'react-native'
import React from 'react'
import { globalStyle } from '../styles/globalStyle';
import { fontFamilies } from '../constants/fontFamilies';
import { colors } from '../constants/colors';

interface Props {
    text: string,
    size?: number,
    font?: string,
    color?: string,
    flex?: number,
    styles?:StyleProp<TextStyle>

}

const TextComponent = (props: Props) => {
    const { text, font, size, color, flex,styles } = props;
    return (
        <Text style={[
            globalStyle.text, {
            flex: flex ?? 1,
            fontFamily: font ?? fontFamilies.semiBold,
            fontSize: size ?? 14,
            color: color ?? colors.textColor,
        },
        styles,
        ]}>{text}</Text>
    );
};

export default TextComponent