import { useRef, useState } from 'react';

import { makeStyles } from '@rneui/themed';
import {
  ScrollView, Text, View, ButtonClearSecondary, ButtonOpenURL, ScreenLayout, ButtonPrimary, Input,
} from '$ui';
import { useAppDispatch } from '$store';
import type { AuthStackScreenProps } from '../navigation';
import Social from '../components/Social';


export default function WelcomeScreen({ navigation }: AuthStackScreenProps<'Welcome'>) {
  const styles = useStyles();

  return (
    <ScreenLayout>
      <ScrollView>

        <ButtonClearSecondary
          onPress={() => console.log('Пропустить!!!!!!')}
          containerStyle={styles.skipButton}
        >
          Пропустить
        </ButtonClearSecondary>
        <View style={styles.welcome}>
          <Text style={styles.welcomeHeader}>Приветствую!</Text>
          <Text style={styles.welcomeText}>Без тебя держать небо было скучно...</Text>
        </View>
        <Input placeholder="Введите почту" />
        <Input placeholder="Введите пароль" />


        <ButtonClearSecondary
          containerStyle={styles.forgetPasswordContainer}
          buttonStyle={styles.forgetPasswordButton}
          titleStyle={styles.forgetPasswordTitle}
        >
          Забыли пароль?
        </ButtonClearSecondary>

        <ButtonPrimary>Войти</ButtonPrimary>

        <View style={styles.agreementContainer}>
          <Text style={styles.agreement}>Нажимая на кнопку Войти вы соглашаетесь</Text>
          <View style={styles.agreementRawWithLink}>
            <Text style={styles.agreement}>на </Text>
            <ButtonOpenURL
              titleStyle={styles.agreementButtonTitle}
              url="https://ya.ru"
            >
              обработку персональных данных
            </ButtonOpenURL>
          </View>
        </View>

        <Social containerStyle={styles.social} />

      </ScrollView>
    </ScreenLayout>
  );
}


const useStyles = makeStyles((theme) => ({
  skipButton: {
    alignSelf: 'flex-end',
    marginBottom: 65,
  },
  welcome: {
    marginBottom: 42,
  },
  welcomeHeader: {
    marginBottom: 5,
    alignSelf: 'flex-start',
    fontSize: 30,
    fontWeight: 'bold',
  },
  welcomeText: {
    alignSelf: 'flex-start',
    fontSize: 18,
  },
  forgetPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgetPasswordButton: {
    paddingTop: 0,
  },
  forgetPasswordTitle: {
    fontSize: theme.fontSizeSmall,
    color: theme.colors.textSecondary,
  },
  agreementContainer: {
    margin: 20,
    alignItems: 'center',
  },
  agreement: {
    fontSize: theme.fontSizeSmall,
    color: theme.colors.textSecondary,
  },
  agreementRawWithLink: {
    flexDirection: 'row',
  },
  agreementButtonTitle: {
    fontSize: theme.fontSizeSmall,
  },
  social: {
    marginTop: 45,
    marginBottom: 25,
  },
}));
