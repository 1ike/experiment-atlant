import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '$store';


type OnboardingState = boolean;

const initialState: OnboardingState = false;

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    onboardingSkip() {
      return true;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { onboardingSkip } = onboardingSlice.actions;

export const onboardingReducerName = onboardingSlice.name;

export default onboardingSlice.reducer;


export const selectOnboardingSkip = (state: RootState) => state.onboarding;
