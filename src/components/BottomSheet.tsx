import React, { useState } from 'react';
import {
  View,
  ModalProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import Modal from 'react-native-modal';
import Content from './Content';
import Hero from './Hero';
import { Icon, Text } from '@components';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import HSpace from './HSpace';
import { pallette } from '@styles/colors';

interface BottomSheetProps extends ModalProps {
  isVisible: boolean;
  modalStyle?: StyleProp<ViewStyle>;
  close?: () => void;
  onPress?: (provider: string) => void;
}

const styles = StyleSheet.create({
  defaultModal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: 'white',
    minHeight: '40%',
    paddingBottom: 30,
  },
  hero: {
    height: 65,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 29,
    paddingTop: 26,
    paddingBottom: 12,
  },
  heroText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    flexDirection: 'row',
    height: 80,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontActive: {
    color: pallette.blue,
  },
});

type Provider = {
  provider: string;
  source: ImageSourcePropType;
};

const providerData: Provider[] = [
  { provider: 'SKT', source: { uri: 'skt' } },
  { provider: 'KT', source: { uri: 'kt' } },
  { provider: 'LG+', source: { uri: 'lg' } },
  { provider: '알뜰폰', source: { uri: 'enexpensive' } },
];

interface ProviderListItemProps {
  source: ImageSourcePropType;
  provider: string;
  onPress?: (provider: string) => void;
  checked?: boolean;
}

const ProviderListItem = ({
  source,
  provider,
  onPress,
  checked,
}: ProviderListItemProps) => {
  const handler = () => {
    if (onPress) {
      onPress(provider);
    }
  };

  return (
    <TouchableOpacity style={styles.list} onPress={handler}>
      <View style={styles.listContent}>
        <Icon source={source} />
        <HSpace space={12} />
        <Text
          subTitle
          content={provider}
          style={checked && styles.fontActive}
        />
      </View>
      {checked && <Icon source={{ uri: 'checker' }} />}
    </TouchableOpacity>
  );
};

const BottomSheet = ({
  isVisible,
  modalStyle,
  close,
  onPress,
}: BottomSheetProps): JSX.Element => {
  const [selectedProvider, setProvider] = useState('');

  const handleOnChangeProvider = (provider: string): void => {
    setProvider(provider);

    if (onPress) {
      onPress(provider);
    }
  };

  const renderProviderList = ({ item: { provider, source } }) => {
    return (
      <ProviderListItem
        checked={selectedProvider === provider}
        provider={provider}
        source={source}
        onPress={handleOnChangeProvider}
      />
    );
  };

  const listKeyExtractor = ({ provider }: Provider) => provider;

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.2}
      style={[styles.defaultModal, modalStyle]}
      onBackdropPress={close}>
      <View style={styles.content}>
        <Hero
          contentText="통신사를 선택해주세요"
          containerStyle={styles.hero}
          contentTextStyle={styles.heroText}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={providerData}
          keyExtractor={listKeyExtractor}
          renderItem={renderProviderList}
        />
      </View>
    </Modal>
  );
};

export default BottomSheet;
