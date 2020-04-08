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

const ServiceTerms = ({ navigation }: ServiceTerms) => {
  const [open, setOpen] = useState(false);
  return (
    <ContentContainer>
      <Content>
        <Hero contentText={'왓섭을 이용하기 전에\n아래 약관에 동의해주세요'} />
        <CheckableListItem
          checked={open}
          title={'아래 이용약관에 모두 동의합니다'}
          containerStyle={styles.largeListItemContainer}
          titleStyle={styles.largeFont}
          checkedIcon={'checked_large'}
          unCheckedIcon={'unchecked_large'}
          onPress={() => setOpen(!open)}
        />
        <CheckableListItem
          checked={open}
          titleStyle={styles.normalGreyFont}
          containerStyle={styles.listItemContainer}
          TextComponent={
            <TextButton
              title={'왓섭 이용을 위한 필수 약관'}
              containerStyle={styles.textButtonContainer}
              textStyle={styles.normalGreyFont}
            />
          }
        />
        <CheckableListItem
          checked={open}
          titleStyle={styles.normalGreyFont}
          containerStyle={styles.listItemContainer}
          TextComponent={
            <TextButton
              title={'오픈뱅킹 이용을 위한 필수 약관'}
              containerStyle={styles.textButtonContainer}
              textStyle={styles.normalGreyFont}
            />
          }
        />
        <CheckableListItem
          checked={open}
          titleStyle={styles.normalGreyFont}
          containerStyle={styles.listItemContainer}
          TextComponent={
            <TextButton
              title={'개인정보 수집 및 이용, 제 3자 제공 동의'}
              containerStyle={styles.textButtonContainer}
              textStyle={styles.normalGreyFont}
            />
          }
        />
        <CheckableListItem
          checked={open}
          titleStyle={styles.normalGreyFont}
          containerStyle={styles.listItemContainer}
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
        onPress={(): void => navigation.navigate('AccountCreation')}
      />
    </ContentContainer>
  );
};

export default ServiceTerms;
