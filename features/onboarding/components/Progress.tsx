import { useMemo } from 'react';
import { makeStyles } from '@rneui/themed';

import { View } from '@ui';
import { Step } from '../stepData';


export default function Progress({ activeIndex, steps }: { activeIndex: number, steps: Step[] }) {
  const styles = useStyles();

  const stepStyles = useMemo(() => [
    styles.step2,
    styles.step3,
  ], [styles]);

  stepStyles.splice(activeIndex, 0, styles.stepActive);

  return (
    <View style={styles.container}>
      {steps.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <View key={index} style={[styles.step, stepStyles[index]]} />
      ))}
    </View>
  );
}

const useStyles = makeStyles((theme) => {
  const nonActiveColor = theme.colors.grey4;

  return {
    container: {
      flexDirection: 'row',
      marginTop: 20,
      flexGap: 5,
    },
    step: {
      height: 5,
      borderRadius: 2,
      marginHorizontal: 5,
    },
    stepActive: {
      width: 36,
      backgroundColor: theme.colors.primary,
    },
    step2: {
      width: 16,
      backgroundColor: nonActiveColor,
    },
    step3: {
      width: 8,
      backgroundColor: nonActiveColor,
    },
  };
});
