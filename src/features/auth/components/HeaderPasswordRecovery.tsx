import { Optional } from '~/lib/typeUtilities';
import Header, { HeaderProps } from './Header';


export default function HeaderPasswordRecovery(props: Optional<HeaderProps, 'headerPrimaryText'>) {
  return (
    <Header
      headerPrimaryText="Восстановление пароля"
      {...props}
    />
  );
}
