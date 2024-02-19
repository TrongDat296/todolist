import {View, Text, Modal, Button, Dimensions} from 'react-native';
import React, {useState} from 'react';
import TitleComponent from './TitleComponent';
import TextComponent from './TextComponent';
import RowComponent from './RowComponent';
import {colors} from '../constants/colors';
import {ArrowDown2} from 'iconsax-react-native';
import {globalStyle} from '../styles/globalStyle';
import SpaceComponent from './SpaceComponent';
import DatePicker from 'react-native-date-picker';
interface Props {
  type?: 'date' | 'time' | 'datetime';
  title?: string;
  placeholder?: string;
  selected?: Date;
  onSelect: (val: Date) => void;
}

const DateTimePickerComponent = (props: Props) => {
  const {type, title, placeholder, selected, onSelect} = props;

  const [isVisibleModalDateTIme, setIsVisibleModalDateTime] = useState(false);
  const [date, setDate] = useState(selected ?? new Date());
  return (
    <>
      <View style={{marginBottom: 16}}>
        {title && <TitleComponent text={title} />}
        <RowComponent
          onPress={() => setIsVisibleModalDateTime(true)}
          styles={[
            globalStyle.inputContainer,
            {
              marginTop: title ? 8 : 0,
              paddingVertical: 16,
            },
          ]}>
          <TextComponent
            flex={1}
            text={
              selected
                ? type =='time'?`${selected.getHours()}:${selected.getMinutes()}`: `${selected.getDate()}/${selected.getMonth() + 1}/ ${selected.getFullYear()}`
                : placeholder
                ? placeholder
                : ''
            }
            color={selected ? colors.textColor : '#676767'}
          />
          <ArrowDown2 size={20} color={colors.textColor} />
        </RowComponent>
      </View>
      <Modal visible={isVisibleModalDateTIme} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              alignItems: 'center',
              alignContent: 'center',
              margin: 20,
              width: '90%',
              backgroundColor: colors.white,
              padding: 20,
              borderRadius: 20,
            }}>
            <TitleComponent text="Date Time Picker" color={colors.textColor} />
            <View>
              <DatePicker
                mode={type ? type:'datetime'}
                date={selected ?? new Date()}
                onDateChange={val => setDate(val)}
                locale="vi"
              />
            </View>
            <Button
              title="Confirm"
              onPress={() => {
                onSelect(date);
                setIsVisibleModalDateTime(false);
              }}
            />
            <SpaceComponent />
            <Button
              title="Close"
              onPress={() => setIsVisibleModalDateTime(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DateTimePickerComponent;
