import type { AuthStackScreenProps } from '../navigation';
import WelcomeAndRegLayout from '../components/WelcomeAndRegLayout';


export default function WelcomeScreen({ navigation }: AuthStackScreenProps<'Welcome'>) {
  return (
    <WelcomeAndRegLayout />
  );
}
