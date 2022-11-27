import { useRef, useState } from 'react';
import { StyleSheet, Image, ImageRequireSource } from 'react-native';
import ViewPager, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';

import {
  Text, View, ButtonClearSecondary, ScreenLayout, ButtonPrimary,
} from '@ui';
import { RootStackScreenProps } from '@navigation/types';

/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const step1Img = require('../images/step_1.png') as ImageRequireSource;
const step2Img = require('../images/step_2.png') as ImageRequireSource;
const step3Img = require('../images/step_3.png') as ImageRequireSource;
/* eslint-enable @typescript-eslint/no-var-requires */
/* eslint-enable global-require */

type Step = {
  title: string,
  text: string,
  img: ImageRequireSource,
};

const steps: Step[] = [
  {
    title: 'Создавай задачи',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: step1Img,
  },
  {
    title: 'Управляй временем',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: step2Img,
  },
  {
    title: 'Отслеживай прогресс',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: step3Img,
  },
];

export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  const viewPagerRef = useRef<ViewPager>(null);

  const [isActiveStep, setIsActiveStep] = useState<number>(0);

  const onFinishOrSkip = () => console.log(' This is the end ');
  const onPageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setIsActiveStep(e.nativeEvent.position);
  };

  return (
    <ScreenLayout>
      <ViewPager
        ref={viewPagerRef}
        onPageSelected={onPageSelected}
        pageMargin={20}
        style={styles.container}
      >
        {steps.map((step, index, array) => {
          const isLastStep = index === array.length - 1;
          const goNextStep = () => viewPagerRef.current?.setPage(index + 1);

          return (
            // eslint-disable-next-line react/no-array-index-key
            <View key={index} style={styles.step}>
              <ButtonClearSecondary
                containerStyle={[styles.skipContainer, isLastStep && styles.skipContainerHide]}
                onPress={onFinishOrSkip}
              >
                Пропустить
              </ButtonClearSecondary>
              <Image
                source={step.img}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.title}>{step.title}</Text>
              <Text>{step.text}</Text>
              <ButtonPrimary
                title={isLastStep ? 'Начать' : 'Далее'}
                containerStyle={styles.nextContainer}
                onPress={isLastStep ? onFinishOrSkip : goNextStep}
              />
            </View>
          );
        })}
      </ViewPager>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  step: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    flex: 1,
  },
  skipContainer: {
    position: 'relative',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  skipContainerHide: {
    top: -100,
  },
  title: {
    marginTop: 50,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  },
  nextContainer: {
    marginTop: 50,
  },
});
