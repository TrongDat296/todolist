import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { globalStyle } from '../styles/globalStyle';
import TextComponent from './TextComponent';
import { colors } from '../constants/colors';

interface Props {
    text: string;
    size?: number;
    color?: string;
    tagStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<ViewStyle>
    onPress?: () => void;

}

const TaskComponent = (props: Props) => {

    const { text, size, color, tagStyle, textStyle, onPress } = props;

    return (
        <TouchableOpacity 
        onPress={onPress}
        disabled = {!onPress} 
         style={[globalStyle.tag, tagStyle, { backgroundColor: color ?? colors.blue }]}>
            <TextComponent text={text} style={textStyle} />
        </TouchableOpacity>
    )
}

export default TaskComponent