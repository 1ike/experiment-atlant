import { StyleProp, ViewStyle } from 'react-native';

import { ButtonClearSecondary } from '$ui';


type SkipButtonProps = {
  onPress: () => void,
  containerStyle?: StyleProp<ViewStyle>
};

export default function SkipButton({ onPress, containerStyle }: SkipButtonProps) {
  return (
    <ButtonClearSecondary
      onPress={onPress}
      containerStyle={containerStyle}
    >
      Пропустить
    </ButtonClearSecondary>
  );
}
