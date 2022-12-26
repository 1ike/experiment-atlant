import { makeStyles } from '@rneui/themed';
import { GestureResponderEvent } from 'react-native';

import {
  Text, View, ButtonPrimary, TextLink,
} from '$ui';


export type CallToActionButtonProps = {
  callToActionText: string,
  callToActionOnSubmit: (event: GestureResponderEvent) => void,
};


export default function CallToActionButton(
  { callToActionText, callToActionOnSubmit }: CallToActionButtonProps,
) {
  const styles = useStyles();

  return (
    <View>
      <ButtonPrimary onPress={callToActionOnSubmit}>{callToActionText}</ButtonPrimary>

      <Text style={styles.agreement}>
        Нажимая на кнопку
        {' '}
        «
        {callToActionText}
        »
        {' '}
        вы соглашаетесь
        {'\n'}
        на&nbsp;
        <TextLink url="https://ya.ru">
          обработку персональных данных
        </TextLink>
      </Text>
    </View>
  );
}


const useStyles = makeStyles((theme) => ({
  agreement: {
    margin: 20,
    textAlign: 'center',
    fontSize: theme.fontSizeSmall,
    lineHeight: theme.fontSizeSmall + (theme.fontSizeSmall * 0.6),
    color: theme.colors.textSecondary,
  },
}));
