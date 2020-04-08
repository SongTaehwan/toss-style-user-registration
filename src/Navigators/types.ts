import { RouteProp, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlowConst } from './enums';

export interface NavigationProps<
  T extends ParamListBase,
  K extends keyof T = string
> {
  navigation: StackNavigationProp<T, K>;
  route: RouteProp<T, K>;
}

export type AppFlowParamList = {
  SignUpFlow: undefined;
};

export type SignUpStackParamList = {
  Permission: undefined;
  ServiceTerms: undefined;
  AccountCreation: {
    marketingAgreement: boolean;
  };
  MobileVerification: {
    name: string;
    SSN: string;
    provider: string;
    phoneNumber: string;
    marketingAgreement: boolean;
  };
  Completion: undefined;
};

export type SignUpFlowProps = NavigationProps<
  AppFlowParamList,
  FlowConst.SignUpFlow
>;
