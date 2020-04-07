import React from 'react';
import { View, Text } from 'react-native';
import { ContentContainer, Content, BarButton, Hero } from '@components';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';
import { SignUpConst } from '@navigators/enums';

type ServiceTerms = NavigationProps<
  SignUpStackParamList,
  SignUpConst.AccountCreation
>;

const ServiceTerms = ({ navigation }: ServiceTerms) => {
  return (
    <ContentContainer>
      <Content>
        <Hero contentText={'왓섭을 이용하기 전에\n아래 약관에 동의해주세요'} />
      </Content>
      <BarButton
        title="동의하고 휴대전화 인증"
        onPress={(): void => navigation.navigate('AccountCreation')}
      />
    </ContentContainer>
  );
};

export default ServiceTerms;
