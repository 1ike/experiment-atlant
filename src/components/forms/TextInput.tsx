import { Control, Controller } from 'react-hook-form';
import { FieldValues, Path, RegisterOptions } from 'react-hook-form/dist/types';

import { Input, InputProps } from '$ui';


type TextInputProps<V extends FieldValues> = {
  control: Control<V>,
  name: Path<V>,
  rules?: Omit<RegisterOptions<V>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
} & InputProps;

export default function TextInput<V extends FieldValues>({
  control, name, rules, ...otherProps
}: TextInputProps<V>) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <Input
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          errorMessage={fieldState.error?.message}
          {...otherProps}
        />
      )}
      name={name}
    />
  );
}
