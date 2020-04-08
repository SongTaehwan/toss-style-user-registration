import React, { useState } from 'react';
import {
  ContentContainer,
  Content,
  BarButton,
  Hero,
  CheckableListItem,
  TextButton,
} from '@components';
import { StyleSheet } from 'react-native';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';
import { SignUpConst } from '@navigators/enums';
import { typo } from '@styles';
import { TypoConst, FontWeightConst } from '@styles/types';
import { pallette } from '@styles/colors';

type ServiceTerms = NavigationProps<
  SignUpStackParamList,
  SignUpConst.AccountCreation
>;

enum CheckValue {
  requirePolicy = 'requirePolicy',
  openBank = 'openBank',
  personalInfo = 'personalInfo',
  marketing = 'marketing',
  all = 'all',
}

const styles = StyleSheet.create({
  largeListItemContainer: {
    paddingTop: 16,
    paddingBottom: 10,
  },
  listItemContainer: {
    paddingVertical: 14,
  },
  largeFont: typo.getTextStyle(TypoConst.subTitle, FontWeightConst.bold),
  textButtonContainer: { flex: 1 },
  normalGreyFont: {
    ...typo.getTextStyle(
      TypoConst.normal,
      FontWeightConst.normal,
      pallette.deepGrey,
    ),
    textDecorationLine: 'underline',
  },
});

const initialState = {
  requirePolicy: false,
  openBank: false,
  personalInfo: false,
  marketing: false,
  all: false,
};

const ServiceTerms = ({ navigation }: ServiceTerms) => {
  const [checkList, setCheckList] = useState(initialState);

  const handleOnCheckAll = () => {
    setCheckList((prev) => ({
      requirePolicy: !prev.all,
      openBank: !prev.all,
      personalInfo: !prev.all,
      marketing: !prev.all,
      all: !prev.all,
    }));
  };

  const handleOnCheckRequirement = (value: string): void => {
    setCheckList((prev) => {
      const targetKey = value;
      const prevValue: boolean = prev[value];
      return {
        ...prev,
        all: false,
        [targetKey]: !prevValue,
      };
    });
  };

  const goToAccountCreation = () => {
    navigation.navigate(SignUpConst.AccountCreation, {
      marketing: checkList.marketing,
    });
  };

  return (
    <ContentContainer>
      <Content>
        <Hero contentText={'왓섭을 이용하기 전에\n아래 약관에 동의해주세요'} />
        <CheckableListItem
          value={CheckValue.all}
          checked={checkList.all}
          title={'아래 이용약관에 모두 동의합니다'}
          containerStyle={styles.largeListItemContainer}
          titleStyle={styles.largeFont}
          checkedIcon={'checked_large'}
          unCheckedIcon={'unchecked_large'}
          onPressCheckbox={handleOnCheckAll}
        />
        <CheckableListItem
          value={CheckValue.requirePolicy}
          checked={checkList.requirePolicy || checkList.all}
          titleStyle={styles.normalGreyFont}
          containerStyle={styles.listItemContainer}
          onPressCheckbox={handleOnCheckRequirement}
          TextComponent={
            <TextButton
              title={'왓섭 이용을 위한 필수 약관'}
              containerStyle={styles.textButtonContainer}
              textStyle={styles.normalGreyFont}
            />
          }
        />
        <CheckableListItem
          value={CheckValue.openBank}
          checked={checkList.openBank || checkList.all}
          titleStyle={styles.normalGreyFont}
          containerStyle={styles.listItemContainer}
          onPressCheckbox={handleOnCheckRequirement}
          TextComponent={
            <TextButton
              title={'오픈뱅킹 이용을 위한 필수 약관'}
              containerStyle={styles.textButtonContainer}
              textStyle={styles.normalGreyFont}
            />
          }
        />
        <CheckableListItem
          value={CheckValue.personalInfo}
          checked={checkList.personalInfo || checkList.all}
          titleStyle={styles.normalGreyFont}
          containerStyle={styles.listItemContainer}
          onPressCheckbox={handleOnCheckRequirement}
          TextComponent={
            <TextButton
              title={'개인정보 수집 및 이용, 제 3자 제공 동의'}
              containerStyle={styles.textButtonContainer}
              textStyle={styles.normalGreyFont}
            />
          }
        />
        <CheckableListItem
          value={CheckValue.marketing}
          checked={checkList.marketing || checkList.all}
          titleStyle={styles.normalGreyFont}
          containerStyle={styles.listItemContainer}
          onPressCheckbox={handleOnCheckRequirement}
          TextComponent={
            <TextButton
              title={'마케팅 정보 수신 및 맞춤형 광고 동의(선택)'}
              containerStyle={styles.textButtonContainer}
              textStyle={styles.normalGreyFont}
            />
          }
        />
      </Content>
      <BarButton
        title="동의하고 휴대전화 인증"
        disabled={
          !checkList.requirePolicy ||
          !checkList.openBank ||
          !checkList.personalInfo
        }
        onPress={goToAccountCreation}
      />
    </ContentContainer>
  );
};

export default ServiceTerms;
