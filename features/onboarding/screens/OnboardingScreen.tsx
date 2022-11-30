import { useRef, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import ViewPager, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';

import {
  Text, View, ButtonClearSecondary, ScreenLayout, ButtonPrimary,
} from '@ui';
import { RootStackScreenProps } from '@navigation/types';
import { useAppDispatch } from '@store';
import { onboardingSkip } from '../state/onboarding';
import Progress from '../components/Progress';
import { steps } from '../stepData';


export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  const viewPagerRef = useRef<ViewPager>(null);

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const dispatch = useAppDispatch();
  const onFinishOrSkip = () => {
    dispatch(onboardingSkip());
  };

  const onPageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setActiveStepIndex(e.nativeEvent.position);
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
              <Progress activeIndex={activeStepIndex} steps={steps} />
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
