import sentry from './sentry';
import store from '$store';
import persist from './persist';
import fonts from './fonts';


export const beforeRendering = async () => {
  sentry();
  await persist(store);
  await fonts();
};

export const afterRendering = async () => {
};
