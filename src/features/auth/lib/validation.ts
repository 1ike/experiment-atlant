import * as z from 'zod';


export const EmailSchema = z.string().email({ message: 'Введите корректный email' });

const passwordErrorMessage = 'Пароль должен содержать 6-8 символов';
export const PasswordSchema = z.string().trim()
  .min(6, { message: passwordErrorMessage })
  .max(8, { message: passwordErrorMessage });
