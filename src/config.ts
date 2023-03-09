import Constants from 'expo-constants';
import { z } from 'zod';

const ExtraSchema = z.object({
  googleExpoClientId: z.string().length(72),
  googleAndroidClientId: z.string().length(72),
  vkAppId: z.string().length(8),
  sentryDSN: z.string().min(1).url(),
});

type Extra = z.infer<typeof ExtraSchema>;

export const extra = Constants.manifest?.extra as Extra;
ExtraSchema.parse(extra);


export const {
  googleExpoClientId,
  googleAndroidClientId,
  vkAppId,
  sentryDSN,
} = extra;
