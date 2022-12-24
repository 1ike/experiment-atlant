import SignInAndSignUpLayout from '../components/SignInAndSignUpLayout';
import { useAppDispatch } from '$store';
import { setSkipAuth } from '../state/auth';
import { RootStackScreenProps } from '~/navigation/types';


export default function SignUpScreen({ navigation }: RootStackScreenProps<'SignUp'>) {
  const dispatch = useAppDispatch();

  const skipButtonOnPress = () => dispatch(setSkipAuth(true));

  const forgetPasswordOnPress = () => {
    console.log('forgetPasswordOnPress');
  };

  const callToActionOnSubmit = () => {
    console.log('callToActionOnSubmit');
  };

  const secondaryCallToActionOnPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SignInAndSignUpLayout
      skipButtonOnPress={skipButtonOnPress}
      headerPrimaryText="Регистрация"
      forgetPasswordOnPress={forgetPasswordOnPress}
      callToActionText="Зарегистрироваться"
      callToActionOnSubmit={callToActionOnSubmit}
      secondaryCallToActionQuestion="Еще нет аккаунта?"
      secondaryCallToActionTitle="Войти!"
      secondaryCallToActionOnPress={secondaryCallToActionOnPress}
    />
  );
}
