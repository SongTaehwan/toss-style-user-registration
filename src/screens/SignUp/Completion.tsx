import React from 'react';
import { StyleSheet } from 'react-native';
import { ContentContainer, Content, BarButton, Hero, Text } from '@components';
import { NavigationProps, SignUpStackParamList } from '@navigators/types';
import { colors } from '@styles';

type CompletionProps = NavigationProps<SignUpStackParamList, 'Completion'>;

const styles = StyleSheet.create({
  heroContainerStyle: {
    flex: 1,
  },
});

const Completion = ({ navigation }: CompletionProps) => {
  return (
    <ContentContainer>
      <Content>
        <Hero containerStyle={styles.heroContainerStyle}>
          <Text normal color={colors.pallette.blue}>
            {'가입완료'}
          </Text>
          <Text title center>
            {'가입이 완료되었어요👏\n이제 구독과 해지가\n쉬워질거예요 😆'}
          </Text>
        </Hero>
      </Content>
      <BarButton title="완료" />
    </ContentContainer>
  );
};

export default Completion;
