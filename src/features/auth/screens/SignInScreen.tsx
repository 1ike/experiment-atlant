import type { AuthStackScreenProps } from '../navigation';
import SignInAndSignUpLayout from '../components/SignInAndSignUpLayout';


export default function SignInScreen({ navigation }: AuthStackScreenProps<'SignIn'>) {
  return (
    <SignInAndSignUpLayout />
  );
}
