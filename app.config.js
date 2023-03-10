import 'dotenv/config';

export default ({ config }) => {
  const {
    RN_SCHEME,
    RN_GOOGLE_EXPO_CLIENT_ID,
    RN_GOOGLE_ANDROID_CLIENT_ID,
    RN_VK_APP_ID,
    RN_SENTRY_DSN,
  } = process.env;

  /*
  eslint-disable
  @typescript-eslint/no-unsafe-return,
  @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-member-access,
  */
  return {
    ...config,
    scheme: RN_SCHEME,
    extra: {
      ...config.extra,
      googleExpoClientId: RN_GOOGLE_EXPO_CLIENT_ID,
      googleAndroidClientId: RN_GOOGLE_ANDROID_CLIENT_ID,
      vkAppId: RN_VK_APP_ID,
      sentryDSN: RN_SENTRY_DSN,
    },
  };
};
