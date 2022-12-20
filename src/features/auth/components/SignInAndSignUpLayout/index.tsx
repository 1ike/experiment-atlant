import { StyleSheet } from 'react-native';
import { ScrollView, ScreenLayout } from '$ui';

import Social from './Social';
import SkipButton from './SkipButton';
import Header from '../Header';
import Form from './Form';
import SecondaryCallToAction from './SecondaryCallToAction';


export default function SignInAndSignUpLayout() {
  return (
    <ScreenLayout>
      <ScrollView>

        <SkipButton
          onPress={() => console.log('Пропустить!!!!!!')}
          containerStyle={styles.skipButton}
        />

        <Header
          primaryText="Приветствую!"
          secondaryText="Без тебя держать небо было скучно..."
          containerStyle={styles.header}
        />

        <Form />

        <Social containerStyle={styles.social} />

        <SecondaryCallToAction
          question="Еще нет аккаунта?"
          title="Зарегистрироваться!"
          onPress={() => console.log('WeakCallToAction')}
          containerStyle={styles.weakCallToAction}
        />

      </ScrollView>
    </ScreenLayout>
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
  social: {
    marginTop: 45,
  },
  weakCallToAction: {
    marginBottom: 25,
  },
});
