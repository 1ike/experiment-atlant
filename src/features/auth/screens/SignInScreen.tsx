import SignInAndSignUpLayout from '../components/SignInAndSignUpLayout';
import { useAppDispatch } from '$store';
import { setSkipAuth } from '../state/auth';
import { RootStackScreenProps } from '~/navigation/types';


export default function SignInScreen({ navigation }: RootStackScreenProps<'SignIn'>) {
  const dispatch = useAppDispatch();

  const skipButtonOnPress = () => dispatch(setSkipAuth(true));

  const forgetPasswordOnPress = () => {
    navigation.navigate('SendEmail');
  };

  const callToActionOnSubmit = () => {
    console.log('callToActionOnSubmit');
  };

  const secondaryCallToActionOnPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SignInAndSignUpLayout
      skipButtonOnPress={skipButtonOnPress}
      headerPrimaryText="Приветствую!"
      headerSecondaryText="Без тебя держать небо было скучно..."
      forgetPasswordOnPress={forgetPasswordOnPress}
      callToActionText="Войти"
      callToActionOnSubmit={callToActionOnSubmit}
      secondaryCallToActionQuestion="Уже есть аккаунт?"
      secondaryCallToActionTitle="Зарегистрироваться!"
      secondaryCallToActionOnPress={secondaryCallToActionOnPress}
    />
  );
}
