import { StyleSheet } from 'react-native';
import { ScrollView, ScreenLayout } from '$ui';

import Social from './Social';
import SkipButton from './SkipButton';
import Header from '../Header';
import Form from './Form';


export default function WelcomeAndRegLayout() {
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
    marginBottom: 25,
  },
});
