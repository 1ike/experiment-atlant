import { StyleSheet } from 'react-native';
import { View } from '$ui';

import SkipButton from './SkipButton';
import HeaderText from './HeaderText';


export type HeaderProps = {
  skipButtonOnPress: () => void,
  headerPrimaryText: string,
  headerSecondaryText?: string,
};

export default function Header({
  skipButtonOnPress,
  headerPrimaryText,
  headerSecondaryText,
}: HeaderProps) {
  return (
    <View>
      <SkipButton
        onPress={skipButtonOnPress}
        containerStyle={styles.skipButton}
      />
      <HeaderText
        primaryText={headerPrimaryText}
        secondaryText={headerSecondaryText}
        containerStyle={styles.header}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  skipButton: {
    alignSelf: 'flex-end',
    marginBottom: 65,
  },
  header: {
    marginBottom: 42,
  },
});
