import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react';
import { globalStyle } from '../styles/globalStyle';

interface Props {
    title?: string;
    back?: boolean;
    right?: ReactNode;
    children: ReactNode;
}

const Container = (props: Props) => {
    const { title, back, right, children} = props;
    return (
        <ScrollView style={[globalStyle.container,{paddingVertical:22}]}>
            {children}
        </ScrollView>
    )
}

export default Container
