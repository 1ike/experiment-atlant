import { makeStyles } from '@rneui/themed';
import { StyleProp, ViewStyle } from 'react-native';

import { Text, View, ButtonInline } from '$ui';

type SecondaryCallToActionProps = {
  question: string,
  title: string,
  onPress: () => void,
  containerStyle?: StyleProp<ViewStyle>
};

export default function SecondaryCallToAction({
  question, title, onPress, containerStyle,
}: SecondaryCallToActionProps) {
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
