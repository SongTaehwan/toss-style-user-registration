import React, { useReducer, useRef, useCallback, useState } from 'react';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';
import { SignUpConst } from '@navigators/enums';
import {
  ContentContainer,
  Content,
  BarButton,
  Hero,
  Input,
  VSpace,
  HorizontalView,
  Text,
  Picker,
  ArrowBackButton,
} from '@components';
import {
  Platform,
  UIManager,
  LayoutAnimation,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';
import { pallette } from '@styles/colors';
import validator from 'validator';

type AccountCreationProps = NavigationProps<
  SignUpStackParamList,
  'AccountCreation'
>;

type State = {
  title: string;
  step: number;
  name: string;
  SSN: string;
  SSNLast: string;
  provider: string;
  phoneNumber: string;
};

enum TitleByStep {
  name = '왓섭은 사용중인\n구독서비스를 모아서 📦',
  SSN = '차곡차곡 정리하고 📑',
  phoneNumber = '한번에 보여드립니다 📊',
  provider = '그러고보니 핸드폰 요금도\n정기지출인거 아시나요😯',
  last = '입력해주신 번호로\n인증번호를 보냅니다 ✉️',
}

const initialState: State = {
  title: '왓섭은 사용중인\n구독서비스를 모아서 📦',
  step: 1,
  name: '',
  SSN: '',
  SSNLast: '',
  provider: '',
  phoneNumber: '',
};

enum DispatchEvent {
  CHANGE_STEP = 'CHANGE_STEP',
  CHANGE_NAME = 'CHANGE_NAME',
  CHANGE_SSN = 'CHANGE_SSN',
  CHANGE_PROVIDER = 'CHANGE_PROVIDER',
  CHANGE_PHONE_NUMBER = 'CHANGE_PHONE_NUMBER',
  CHANGE_SSN_LAST = 'CHANGE_SSN_LAST',
}

const userReducer = (state = initialState, { type, payload }): State => {
  switch (type) {
    case DispatchEvent.CHANGE_STEP:
      return {
        ...state,
        step: payload.step,
        title: payload.title,
      };
    case DispatchEvent.CHANGE_NAME:
      return { ...state, name: payload };
    case DispatchEvent.CHANGE_SSN:
      return { ...state, SSN: payload };
    case DispatchEvent.CHANGE_SSN_LAST:
      return { ...state, SSNLast: payload };
    case DispatchEvent.CHANGE_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: payload,
      };
    case DispatchEvent.CHANGE_PROVIDER:
      return { ...state, provider: payload.provider, title: payload.title };
    default:
      return state;
  }
};

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const styles = StyleSheet.create({
  ssnContainer: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  ssnInput: {
    flex: 0.5,
    paddingRight: 0,
  },
  ssnSecondInput: {
    flex: 0.1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  ssnRightLabel: {
    flex: 0.4,
    paddingBottom: 6,
  },
  inactive: {
    color: pallette.lightGrey,
  },
});

const AccountCreation = ({
  navigation,
  route,
}: AccountCreationProps): JSX.Element => {
  const { marketingAgreement } = route.params;
  const [
    { title, step, name, SSN, SSNLast, provider, phoneNumber },
    dispatch,
  ] = useReducer(userReducer, initialState);
  const secondSSNInput = useRef();
  const [isSecondInputFocused, setFocused] = useState(false);

  const refCallback = useCallback((node) => {
    if (node !== null) {
      secondSSNInput.current = node;
    }
  }, []);

  const onChangeName = (userName: string): void => {
    dispatch({ type: DispatchEvent.CHANGE_NAME, payload: userName });
  };

  const onChangeSSN = (ssnFront: string): void => {
    if (ssnFront.length === 6) {
      const inputRef = secondSSNInput.current;
      inputRef.focus();
      setFocused(true);
    }

    dispatch({ type: DispatchEvent.CHANGE_SSN, payload: ssnFront });
  };

  const onChangePhoneNumber = (mobileNumber: string): void => {
    const phoneNumber = mobileNumber.replace(/[^0-9]+/g, '') + '-------------';
    const phone1 = phoneNumber.slice(0, 3);
    const phone2 = phoneNumber.slice(3, 7);
    const phone3 = phoneNumber.slice(7, 11);
    const phoneText = `${phone1}-${phone2}-${phone3}`.replace(/[^0-9]*$/g, '');

    if (phoneText.length === 13) {
      nextStep();
      Keyboard.dismiss();
    }

    dispatch({ type: DispatchEvent.CHANGE_PHONE_NUMBER, payload: phoneText });
  };

  const onChangeSSNLast = (lastNumber: string): void => {
    if (lastNumber !== '') {
      nextStep();
      setFocused(false);
    }

    dispatch({ type: DispatchEvent.CHANGE_SSN_LAST, payload: lastNumber });
  };

  const onChangeProvider = (selectedProvider: string): void => {
    dispatch({
      type: DispatchEvent.CHANGE_PROVIDER,
      payload: {
        provider: selectedProvider,
        title: TitleByStep.last,
      },
    });
  };

  const goToMobileVerification = () => {
    navigation.navigate(SignUpConst.MobileVerification, {
      name,
      SSN,
      provider,
      phoneNumber,
      marketingAgreement,
    });
  };

  const nextStep = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    switch (step) {
      case 1:
        return dispatch({
          type: DispatchEvent.CHANGE_STEP,
          payload: { step: 2, title: TitleByStep.SSN },
        });
      case 2:
        return dispatch({
          type: DispatchEvent.CHANGE_STEP,
          payload: { step: 3, title: TitleByStep.phoneNumber },
        });
      case 3:
        return dispatch({
          type: DispatchEvent.CHANGE_STEP,
          payload: { step: 4, title: TitleByStep.provider },
        });
    }
  };

  const verificationCheck = () => {
    if (name === '') {
      return Alert.alert('유효하지 않은 정보', '이름을 입력해주세요');
    }

    if (SSN.length !== 6 || SSNLast === '') {
      return Alert.alert('유효하지 않은 정보', '주민등록번호를 확인해주세요');
    }

    if (!validator.isMobilePhone(phoneNumber, 'ko-KR')) {
      return Alert.alert('유효하지 않은 정보', '휴대폰 번호를 확인해주세요');
    }

    if (provider === '') {
      return Alert.alert('유효하지 않은 정보', '통신사를 선택해주세요');
    }

    goToMobileVerification();
  };

  return (
    <ContentContainer>
      <Content>
        <ArrowBackButton />
        <Hero contentText={title} />
        {step > 3 && (
          <>
            <Picker
              value={provider}
              label="통신사"
              onSelect={onChangeProvider}
            />
            <VSpace space={32} />
          </>
        )}
        {step > 2 && (
          <>
            <Input
              value={phoneNumber}
              autoFocus
              maxLength={13}
              label="전화번호"
              onChangeText={onChangePhoneNumber}
              returnKeyType={'go'}
              onSubmitEditing={nextStep}
              keyboardType={'phone-pad'}
            />
            <VSpace space={32} />
          </>
        )}
        {step !== 1 && (
          <>
            <HorizontalView
              style={styles.ssnContainer}
              verticalAlign={'center'}>
              <Input
                containerStyle={styles.ssnInput}
                value={SSN}
                maxLength={6}
                autoFocus
                label="주민등록번호"
                onChangeText={onChangeSSN}
                returnKeyType={'go'}
                keyboardType={'decimal-pad'}
              />
              <Text
                subTitle
                color={
                  isSecondInputFocused ? pallette.black : pallette.lightGrey
                }>
                -
              </Text>
              <Input
                inputRef={refCallback}
                value={SSNLast}
                maxLength={1}
                containerStyle={styles.ssnSecondInput}
                onChangeText={onChangeSSNLast}
                returnKeyType={'go'}
                keyboardType={'decimal-pad'}
              />
              <Text
                title
                style={styles.ssnRightLabel}
                color={
                  isSecondInputFocused ? pallette.black : pallette.lightGrey
                }>
                • • • • • •
              </Text>
            </HorizontalView>
            <VSpace space={32} />
          </>
        )}
        <Input
          value={name}
          label="이름"
          autoFocus
          onChangeText={onChangeName}
          returnKeyType={'go'}
          onSubmitEditing={nextStep}
        />
        <VSpace space={32} />
      </Content>
      <BarButton title="보내기" onPress={verificationCheck} />
    </ContentContainer>
  );
};

export default AccountCreation;
