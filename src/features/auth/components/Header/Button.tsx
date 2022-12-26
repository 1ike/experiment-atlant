import { StyleProp, ViewStyle, StyleSheet } from 'react-native';

import { ButtonClearSecondary } from '$ui';


type HeaderButtonProps = {
  onPress: () => void,
  containerStyle?: StyleProp<ViewStyle>
};

export default function HeaderButton({ onPress, containerStyle }: HeaderButtonProps) {
  return (
    <ButtonClearSecondary
      onPress={onPress}
      containerStyle={containerStyle}
      buttonStyle={styles.button}
    >
      Пропустить
    </ButtonClearSecondary>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
});
