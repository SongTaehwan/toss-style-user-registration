import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@components';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    top: 10,
    left: 20,
    height: 50,
  },
});

const ArrowBackButton = () => {
  const navigation = useNavigation();

  const handler = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handler}>
      <Icon source={{ uri: 'arrow' }} />
    </TouchableOpacity>
  );
};

export default ArrowBackButton;
