import { useRef, useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import {
  Text, View, ButtonClearSecondary, ScreenLayout, ButtonPrimary, Input,
} from '$ui';
import { useAppDispatch } from '$store';
import type { AuthStackScreenProps } from '../navigation';


export default function WelcomeScreen({ navigation }: AuthStackScreenProps<'Welcome'>) {
  return (
    <ScreenLayout>
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

    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 15,
  },
});
