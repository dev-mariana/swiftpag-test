import { z } from 'zod';

export const createChargeSchema = z.object({
  payer_name: z.string().min(3).max(100),
  payer_document: z.string().min(11).max(14),
  amount: z.number().int().positive(),
  description: z.string().optional(),
});
