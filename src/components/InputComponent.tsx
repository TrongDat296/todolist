import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import TitleComponent from './TitleComponent';
import RowComponent from './RowComponent';
import {globalStyle} from '../styles/globalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../constants/colors';

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  title?: string;
  prefix?: ReactNode;
  affix?: ReactNode;
  allowClear?: boolean;
  multible?: boolean;
  numberOfLine?: number;
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    placeholder,
    title,
    prefix,
    affix,
    allowClear,
    multible,
    numberOfLine,
  } = props;

  return (
    <View style={{marginBottom: 16}}>
      {title && <TitleComponent text={title} />}
      <RowComponent
        styles={[
          globalStyle.inputContainer,
          {
            marginTop: title ? 8 : 0,
            minHeight: multible && numberOfLine ? 32 * numberOfLine : 32,
            paddingVertical: 14,
            paddingHorizontal: 10,
            alignItems: 'flex-start',
          },
        ]}>
        {prefix && prefix}
        <View
          style={{
            flex: 1,
            paddingLeft: prefix ? 8 : 0,
            paddingRight: affix ? 8 : 0,
          }}>
          <TextInput
            style={[
              globalStyle.text,
              {margin: 0, padding: 0, paddingVertical: 3, flex: 0},
            ]}
            placeholder={placeholder ?? ''}
            placeholderTextColor={'#676767'}
            value={value}
            onChangeText={val => onChange(val)}
            multiline={multible}
            numberOfLines={numberOfLine}
          />
        </View>
        {affix && affix}

        {allowClear && (
          <TouchableOpacity onPress={() => onChange('')}>
            <AntDesign name="close" size={20} color={colors.white} />
          </TouchableOpacity>
        )}
      </RowComponent>
    </View>
  );
};

export default InputComponent;
