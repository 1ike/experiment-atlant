import { makeStyles } from '@rneui/themed';
import { StyleProp, ViewStyle } from 'react-native';

import { Text, View, ButtonInline } from '$ui';

type WeakCallToActionProps = {
  question: string,
  title: string,
  onPress: () => void,
  containerStyle?: StyleProp<ViewStyle>
};

export default function WeakCallToAction({
  question, title, onPress, containerStyle,
}: WeakCallToActionProps) {
  const styles = useStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>
        {question}
        {' '}
      </Text>
      <ButtonInline
        onPress={onPress}
        titleStyle={styles.buttonTitle}
      >
        {title}
      </ButtonInline>
    </View>
  );
}


const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: theme.fontSizeSmall,
    color: theme.colors.textSecondary,
  },
  buttonTitle: {
    fontSize: theme.fontSizeSmall,
  },
}));
