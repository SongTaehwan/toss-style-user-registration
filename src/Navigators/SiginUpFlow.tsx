import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignUpStackParamList, SignUpFlowProps } from './types';
import { SignUpConst } from './enums';
import {
  Permission,
  ServiceTerms,
  Completion,
  AccountCreation,
} from '@screens/signUp';
import { Container } from '@components';
import { layout } from '@styles';

const SignUpStack = createStackNavigator<SignUpStackParamList>();

const SignUpFlow = (props: SignUpFlowProps): JSX.Element => {
  return (
    <Container topless>
      <SignUpStack.Navigator initialRouteName={SignUpConst.Permission}>
        <SignUpStack.Screen
          name={SignUpConst.Permission}
          component={Permission}
          options={layout.headerless}
        />
        <SignUpStack.Screen
          name={SignUpConst.ServiceTerms}
          component={ServiceTerms}
          options={layout.headerless}
        />
        <SignUpStack.Screen
          name={SignUpConst.AccountCreation}
          component={AccountCreation}
        />
        <SignUpStack.Screen
          name={SignUpConst.Completion}
          component={Completion}
          options={layout.headerless}
        />
      </SignUpStack.Navigator>
    </Container>
  );
};

export default SignUpFlow;
