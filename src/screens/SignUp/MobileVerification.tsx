import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Keyboard } from 'react-native';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';
import {
  ContentContainer,
  Content,
  BarButton,
  Hero,
  Input,
  Text,
  ArrowBackButton,
} from '@components';
import useText from '@hooks/useText';
import useTimer from '@hooks/useTimer';
import { typo } from '@styles';
import { TypoConst, FontWeightConst } from '@styles/types';
import { pallette } from '@styles/colors';
import ServerAPI from '@api/ServerAPI';

type MobileVerificationProps = NavigationProps<
  SignUpStackParamList,
  'AccountCreation'
>;

const styles = StyleSheet.create({
  paddingless: {
    paddingHorizontal: 0,
  },
  remainTime: {
    ...typo.getTextStyle(
      TypoConst.small,
      FontWeightConst.normal,
      pallette.grey,
    ),
    paddingLeft: 32,
  },
});

const MobileVerification = ({
  navigation,
  route,
}: MobileVerificationProps): JSX.Element => {
  const { name, phoneNumber, SSN, marketingAgreement } = route.params;
  const [code, setCode] = useText<string>('', { delayTime: 0 });
  const [isValidCode, setValidState] = useState(false);
  const [remainTime, trigger] = useTimer({
    startTime: 180,
    onCompleted: goBackPreviousPage,
  });

  useEffect(() => {
    trigger();
  }, []);

  function goBackPreviousPage(): void {
    Alert.alert('입력시간 초과', '이전화면으로 이동합니다.', [
      { text: '확인', onPress: () => navigation.pop() },
    ]);
  }

  const handleOnChangeCode = (codeInput: string): void => {
    if (codeInput.length === 6) {
      validationCheck(codeInput);
    }

    setCode(codeInput);
  };

  const validationCheck = async (codeInput: string): Promise<any> => {
    try {
      if (codeInput === '123456') {
        setValidState(true);
        Keyboard.dismiss();
      } else {
        Alert.alert('유효하지않은 인증번호입니다.');
      }
    } catch (error) {
      Alert.alert('유효하지않은 인증번호입니다.');
    }
  };

  const createUser = async (): Promise<any> => {
    try {
      const user = {
        name,
        phoneNumber,
        SSN,
        marketingAgreement,
      };

      // Send User Createion Request
      goToCompletion();
    } catch (error) {}
  };

  const goToCompletion = () => {
    navigation.navigate('Completion');
  };

  return (
    <ContentContainer>
      <Content>
        <ArrowBackButton />
        <Hero contentText={'👆 여기 위로 오는\n인증번호를 입력해주세요'} />
        <Input
          value={code}
          label="인증번호"
          maxLength={6}
          onChangeText={handleOnChangeCode}
        />
        <Text style={styles.remainTime}>{`입력 가능시간 ${
          Math.floor(remainTime / 60) > 0
            ? Math.floor(remainTime / 60) + '분 '
            : ''
        }${remainTime % 60}초 남았습니다.`}</Text>
      </Content>
      <BarButton
        title="완료"
        square
        disabled={!isValidCode}
        containerStyle={styles.paddingless}
        onPress={createUser}
      />
    </ContentContainer>
  );
};

export default MobileVerification;
