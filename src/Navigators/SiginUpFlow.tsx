import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { SignUpStackParamList } from './types';
import { SignUpConst } from './enums';
import {
  Permission,
  AccountCreation,
  ServiceTerms,
  MobileVerification,
  Completion,
} from '@screens/signUp';
import { Container } from '@components';
import usePermission from '@hooks/usePermission';

const SignUpStack = createStackNavigator<SignUpStackParamList>();

const SignUpFlow = (): JSX.Element => {
  const [permissionGranted] = usePermission({});

  return (
    <Container>
      <SignUpStack.Navigator initialRouteName={SignUpConst.AccountCreation}>
        {!permissionGranted && (
          <SignUpStack.Screen
            name={SignUpConst.Permission}
            component={Permission}
            options={{ headerShown: false }}
          />
        )}
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
