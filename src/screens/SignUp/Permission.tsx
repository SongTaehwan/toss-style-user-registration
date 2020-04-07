import React from 'react';
import {
  ContentContainer,
  Content,
  BarButton,
  Hero,
  Text,
  VSpace,
} from '@components';
import { colors } from '@styles';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';

type PermissionProps = NavigationProps<SignUpStackParamList, 'AccountCreation'>;

const Permission = ({ navigation }: PermissionProps) => {
  return (
    <ContentContainer>
      <Content>
        <Hero>
          <Text title>{'👋 반가워요'}</Text>
          <VSpace space={11} />
          <Text subTitle center color={colors.pallette.grey}>
            {'원활한 관리를 위해, 알림 설정과\n휴대전화 인증을 진행합니다'}
          </Text>
        </Hero>
        <VSpace space={16} />
      </Content>
      <BarButton
        title="확인"
        onPress={(): void => navigation.navigate('ServiceTerms')}
      />
    </ContentContainer>
  );
};

export default Permission;
