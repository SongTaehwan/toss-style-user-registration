import React from 'react';
import { View, Text } from 'react-native';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';

type AccountCreationProps = NavigationProps<
  SignUpStackParamList,
  'AccountCreation'
>;

const AccountCreation = ({ navigation }: AccountCreationProps): JSX.Element => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default AccountCreation;
