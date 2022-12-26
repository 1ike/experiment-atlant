import { StyleSheet } from 'react-native';

import Layout from '../Layout';
import Header from '../Header';
import Form, { FormProps } from './Form';
import Social from './Social';
import SecondaryCallToAction from './SecondaryCallToAction';


type SignInAndSignUpLayoutProps = {
  skipButtonOnPress: () => void,

  headerPrimaryText: string,
  headerSecondaryText?: string,

  secondaryCallToActionQuestion: string,
  secondaryCallToActionTitle: string,
  secondaryCallToActionOnPress: () => void,
} & FormProps;

export default function SignInAndSignUpLayout({
  skipButtonOnPress,
  headerPrimaryText,
  headerSecondaryText,
  forgetPasswordOnPress,
  callToActionText,
  callToActionOnSubmit,
  secondaryCallToActionQuestion,
  secondaryCallToActionTitle,
  secondaryCallToActionOnPress,
}: SignInAndSignUpLayoutProps) {
  return (
    <Layout>

      <Header
        skipButtonOnPress={skipButtonOnPress}
        headerPrimaryText={headerPrimaryText}
        headerSecondaryText={headerSecondaryText}
      />

      <Form
        forgetPasswordOnPress={forgetPasswordOnPress}
        callToActionText={callToActionText}
        callToActionOnSubmit={callToActionOnSubmit}
      />

      <Social containerStyle={styles.social} />

      <SecondaryCallToAction
        question={secondaryCallToActionQuestion}
        title={secondaryCallToActionTitle}
        onPress={secondaryCallToActionOnPress}
        containerStyle={styles.secondaryCallToAction}
      />

    </Layout>
  );
}


const styles = StyleSheet.create({
  social: {
    marginTop: 45,
  },
  secondaryCallToAction: {
    marginBottom: 25,
  },
});
