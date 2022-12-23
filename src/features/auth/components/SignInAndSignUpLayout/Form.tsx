import { makeStyles } from '@rneui/themed';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Text, View, ButtonClearSecondary, ButtonPrimary, TextInput, TextInputPassword, TextLink,
} from '$ui';


const FormSchema = z.object({
  email: z.string().email({ message: 'Введите корректный email' }),
  password: z.string().trim().min(5, { message: 'Пароль должен содержать минимум 5 символов' }),
});

type Values = z.infer<typeof FormSchema>;


export type FormProps = {
  forgetPasswordOnPress: () => void,
  callToActionText: string,
  callToActionOnSubmit: (values: Values) => void,
};


export default function Form({
  forgetPasswordOnPress, callToActionText, callToActionOnSubmit,
}: FormProps) {
  const styles = useStyles();

  const { control, handleSubmit } = useForm<Values>({
    defaultValues: {
      email: '',
      password: '',
    },
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: zodResolver(FormSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Values> = (values) => callToActionOnSubmit(values);

  /* eslint-disable @typescript-eslint/no-misused-promises */
  return (
    <View>
      <TextInput
        control={control}
        name="email"
        placeholder="Введите почту"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInputPassword
        control={control}
        name="password"
        placeholder="Введите пароль"
      />

      <ButtonClearSecondary
        onPress={forgetPasswordOnPress}
        containerStyle={styles.forgetPasswordContainer}
        buttonStyle={styles.forgetPasswordButton}
        titleStyle={styles.forgetPasswordTitle}
      >
        Забыли пароль?
      </ButtonClearSecondary>

      <ButtonPrimary onPress={handleSubmit(onSubmit)}>{callToActionText}</ButtonPrimary>

      <View style={styles.agreementContainer}>
        <Text style={styles.agreement}>
          Нажимая на кнопку
          {' '}
          {callToActionText}
          {' '}
          вы соглашаетесь
          на&nbsp;
          <TextLink url="https://ya.ru">
            обработку персональных данных
          </TextLink>
        </Text>
      </View>
    </View>
  );
}


const useStyles = makeStyles((theme) => ({
  skipButton: {
    alignSelf: 'flex-end',
    marginBottom: 65,
  },
  header: {
    marginBottom: 42,
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
  },
  agreement: {
    textAlign: 'center',
    fontSize: theme.fontSizeSmall,
    lineHeight: theme.fontSizeSmall + (theme.fontSizeSmall * 0.6),
    color: theme.colors.textSecondary,
  },
}));
