import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';
import { ContentContainer, Content, BarButton, Hero, Input } from '@components';
import _debounce from 'lodash/debounce';

type MobileVerificationProps = NavigationProps<
  SignUpStackParamList,
  'AccountCreation'
>;

const styles = StyleSheet.create({
  paddingless: {
    paddingHorizontal: 0,
  },
});

const MobileVerification = ({
  navigation,
}: MobileVerificationProps): JSX.Element => {
  const [code, setCode] = useState<string>('');
  return (
    <ContentContainer>
      <Content>
        <Hero contentText={'👆 여기 위로 오는\n인증번호를 입력해주세요'} />
        <Input value={code} label="인증번호" />
      </Content>
      <BarButton
        title="완료"
        square
        containerStyle={styles.paddingless}
        onPress={(): void => navigation.navigate('Completion')}
      />
    </ContentContainer>
  );
};

export default MobileVerification;
