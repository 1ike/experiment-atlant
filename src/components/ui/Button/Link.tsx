import { ButtonInline, ButtonInlineProps } from './Inline';
import { useLink } from '../hooks/useLink';


export type ButtonLinkProps = ButtonInlineProps & {
  url: string,
};

export function ButtonLink({
  url, buttonStyle, titleStyle, ...otherProps
}: ButtonLinkProps) {
  const handlePress = useLink(url);

  return (
    <ButtonInline
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPress={handlePress}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      {...otherProps}
    />
  );
}
