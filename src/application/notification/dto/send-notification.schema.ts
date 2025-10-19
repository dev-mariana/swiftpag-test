import { z } from 'zod';

export const sendNotificationSchema = z.object({
  charge_id: z.string().min(10).max(32),
});
