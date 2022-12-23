import { StyleSheet } from 'react-native';
import { ScrollView, ScreenLayout } from '$ui';

import Social from './Social';
import SkipButton from './SkipButton';
import Header from '../Header';
import Form, { FormProps } from './Form';
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
    <ScreenLayout>
      <ScrollView>

        <SkipButton
          onPress={skipButtonOnPress}
          containerStyle={styles.skipButton}
        />

        <Header
          primaryText={headerPrimaryText}
          secondaryText={headerSecondaryText}
          containerStyle={styles.header}
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

      </ScrollView>
    </ScreenLayout>
  );
}


const styles = StyleSheet.create({
  skipButton: {
    alignSelf: 'flex-end',
    marginBottom: 65,
  },
  header: {
    marginBottom: 42,
  },
  social: {
    marginTop: 45,
  },
  secondaryCallToAction: {
    marginBottom: 25,
  },
});
