import React from 'react';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';
import { ContentContainer, Content, BarButton, Hero } from '@components';

type AccountCreationProps = NavigationProps<
  SignUpStackParamList,
  'AccountCreation'
>;

const AccountCreation = ({ navigation }: AccountCreationProps): JSX.Element => {
  return (
    <ContentContainer>
      <Content>
        <Hero contentText={'왓섭은 사용중인\n구독서비스를 모아서 📦'} />
      </Content>
      <BarButton
        title="보내기"
        onPress={(): void => navigation.navigate('MobileVerification')}
      />
    </ContentContainer>
  );
};

export default AccountCreation;
