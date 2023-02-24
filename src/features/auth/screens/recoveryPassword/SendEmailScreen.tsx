import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import HeaderPasswordRecovery from '../../components/HeaderPasswordRecovery';
import { useAppDispatch } from '$store';
import { setSkipAuth } from '../../state/auth';
import { RootStackScreenProps } from '~/navigation/types';
import Layout from '../../components/Layout';
import { EmailSchema } from '../../lib/validation';
import CallToActionButton from '../../components/CallToActionButton';
import { TextInput, Text } from '$ui';


const FormSchema = z.object({
  email: EmailSchema,
});

type Values = z.infer<typeof FormSchema>;


export type FormProps = {
  forgetPasswordOnPress: () => void,
  callToActionText: string,
  callToActionOnSubmit: (values: Values) => void,
};

export default function SendEmailScreen({ navigation }: RootStackScreenProps<'SendEmail'>) {
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<Values>({
    defaultValues: {
      email: '',
    },
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: zodResolver(FormSchema),
    mode: 'onBlur',
  });

  const skipButtonOnPress = () => dispatch(setSkipAuth(true));

  const onSubmit: SubmitHandler<Values> = (values) => {
    console.log(values);
    // navigation.navigate('SendCode');
  };

  return (
    <Layout edges={['right', 'bottom', 'left']}>
      <HeaderPasswordRecovery
        skipButtonOnPress={skipButtonOnPress}
        headerSecondaryText="На указанную почту будет отправлен код-пароль для входа в систему"
      />

      <TextInput
        control={control}
        name="email"
        placeholder="Введите почту"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        control={control}
        name="email"
        placeholder="Введите почту"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        control={control}
        name="email"
        placeholder="Введите почту"
        keyboardType="email-address"
        textContentType="emailAddress"
      />

      <CallToActionButton
        callToActionText="Отправить"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        callToActionOnSubmit={handleSubmit(onSubmit)}
      />
    </Layout>
  );
}
