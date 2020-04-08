import React from 'react';
import {
  ContentContainer,
  Content,
  BarButton,
  Hero,
  Text,
  VSpace,
  PermissionListItem,
} from '@components';
import { colors } from '@styles';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';
import { BackHandler, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import usePermission from '@hooks/usePermission';

type PermissionProps = NavigationProps<SignUpStackParamList, 'AccountCreation'>;

const Permission = ({ navigation }: PermissionProps) => {
  const [, requestPermission] = usePermission({
    onCompleted: goToServiceTerms,
  });

  useFocusEffect(() => {
    const onPressBack = () => {
      Alert.alert(
        '이대로 떠나실 건가요? 😭',
        '멋진 서비스가 기다리고 있어요! 😎',
        [{ text: '아니오', style: 'cancel' }],
        {
          cancelable: true,
        },
      );
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onPressBack);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onPressBack);
    };
  });

  function goToServiceTerms(): void {
    navigation.navigate('ServiceTerms');
  }

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
        <PermissionListItem
          title="휴대전화 인증"
          subTitle="이후 오픈뱅킹을 통해 구독서비스 자동 연동을 위해 본인 인증을 진행합니다."
        />
        <VSpace space={24} />
        <PermissionListItem
          title="알림 설정"
          subTitle="구독서비스가 결제되기 전, 미리 알림을 보내서 알려줍니다."
          iconName="phone"
        />
      </Content>
      <BarButton title="확인" onPress={requestPermission} />
    </ContentContainer>
  );
};

export default Permission;
