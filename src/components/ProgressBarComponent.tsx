import { View, Text, DimensionValue } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    size?: 'small' | 'default' | 'larger',
    color?: string,
    percent: DimensionValue
}
const ProgressBarComponent = (props: Props) => {
    const { size, color, percent } = props;
    const heightContent = size === 'small' ? 6 : size === 'larger' ? 10 : 8
    return (
        <View style={{ marginTop: 12, marginBottom: 16 }}>
            <View style={{
                height: heightContent,
                width: "100%",
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                marginTop: 15,
                borderRadius: 100,
            }}>
                <View style={{
                    backgroundColor: color ?? colors.blue,
                    width: percent,
                    height: heightContent,
                    borderRadius: 100,
                }} />
            </View>
            <RowComponent styles={{ justifyContent: 'space-between', marginTop: 5 }}>
                <TextComponent text='Progress' size={12} />
                <TextComponent font={fontFamilies.semiBold} text={`${percent}`} size={12} flex={0} />
            </RowComponent>
        </View>
    )
}

export default ProgressBarComponent