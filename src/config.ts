import Constants from 'expo-constants';
import { z } from 'zod';

const ExtraSchema = z.object({
  googleAndroidClientId: z.string().length(72),
  vkAppId: z.string().length(8),
  sentryDSN: z.string().min(1).url(),
});

type Extra = z.infer<typeof ExtraSchema>;

export const extra = Constants.manifest?.extra as Extra;
ExtraSchema.parse(extra);


export const {
  googleAndroidClientId,
  vkAppId,
  sentryDSN,
} = extra;

export const scheme = Constants.manifest?.scheme as string;
export const easProjectId = Constants.manifest?.extra?.eas?.projectId as string;
