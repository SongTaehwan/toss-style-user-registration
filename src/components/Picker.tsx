import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { Text } from '@components';
import React from 'react';
import { pallette } from '@styles/colors';

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
    top: 18,
    fontSize: 16,
    color: pallette.blue,
  },
  defaultInput: {
    paddingHorizontal: 8,
    paddingBottom: 12,
    fontSize: 16,
    color: pallette.lightGrey,
    borderBottomWidth: 1,
    borderBottomColor: pallette.lightGrey,
  },
  active: {
    borderBottomColor: pallette.blue,
    color: pallette.black,
  },
  fontInActive: {
    color: pallette.lightGrey,
  },
});

const Picker = ({}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}></Text>
      <TouchableOpacity>
        <Text>{}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Picker;
