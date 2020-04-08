import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignUpStackParamList, SignUpFlowProps } from './types';
import { SignUpConst } from './enums';
import {
  Permission,
  AccountCreation,
  ServiceTerms,
  MobileVerification,
  Completion,
} from '@screens/signUp';
import { Container } from '@components';

const SignUpStack = createStackNavigator<SignUpStackParamList>();

const SignUpFlow = (props: SignUpFlowProps): JSX.Element => {
  return (
    <Container>
      <SignUpStack.Navigator initialRouteName={SignUpConst.Permission}>
        <SignUpStack.Screen
          name={SignUpConst.Permission}
          component={Permission}
          options={{ headerShown: false }}
        />
        <SignUpStack.Screen
          name={SignUpConst.ServiceTerms}
          component={ServiceTerms}
          options={{ headerShown: false }}
        />
        <SignUpStack.Screen
          name={SignUpConst.AccountCreation}
          component={AccountCreation}
          options={{ headerShown: false }}
        />
        <SignUpStack.Screen
          name={SignUpConst.MobileVerification}
          component={MobileVerification}
          options={{ headerShown: false }}
        />
        <SignUpStack.Screen
          name={SignUpConst.Completion}
          component={Completion}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </SignUpStack.Navigator>
    </Container>
  );
};

export default SignUpFlow;
