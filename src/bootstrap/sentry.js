import * as Sentry from 'sentry-expo';

import { sentryDSN } from '../config';

export default () => {
  /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
  Sentry.init({
    dsn: sentryDSN,
    enableInExpoDevelopment: false,
    debug: false,
  });
};
