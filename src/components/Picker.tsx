import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { Text } from '@components';
import React, { useState, useEffect } from 'react';
import { pallette } from '@styles/colors';
import BottomSheet from './BottomSheet';
import Icon from 'react-native-vector-icons/AntDesign';

interface PickerProps {
  label?: string;
  value?: string;
  autoFocus?: boolean;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    height: 56,
    width: '100%',
    paddingHorizontal: 24,
  },
  label: {
    position: 'absolute',
    left: 32,
    top: 0,
    fontSize: 12,
    color: pallette.grey,
  },
  defaultPicker: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 4,
    paddingBottom: 12,
    color: pallette.grey,
    borderBottomWidth: 1,
    borderBottomColor: pallette.grey,
  },
  defaultPickerValue: {
    fontSize: 16,
    color: pallette.grey,
    flex: 1,
  },
  labelActive: {
    color: pallette.blue,
  },
  pickerActive: {
    borderBottomColor: pallette.blue,
    borderBottomWidth: 2,
  },
  fontInActive: {
    color: pallette.grey,
  },
  valueActive: {
    color: pallette.black,
  },
});

const Picker = ({
  label,
  value = '12341234',
  onSelect,
}: PickerProps): JSX.Element => {
  const [modalOpen, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!modalOpen);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.label, modalOpen && styles.labelActive]}>
          {label}
        </Text>
        <TouchableOpacity
          style={[styles.defaultPicker, modalOpen && styles.pickerActive]}
          onPress={toggleModal}>
          <Text
            style={[
              styles.defaultPickerValue,
              modalOpen && styles.valueActive,
            ]}>
            {value}
          </Text>
          <Icon
            name={'caretup'}
            size={12}
            color={modalOpen ? pallette.blue : pallette.grey}
          />
        </TouchableOpacity>
      </View>
      <BottomSheet
        isVisible={modalOpen}
        close={toggleModal}
        onPress={onSelect}
      />
    </>
  );
};

export default Picker;
