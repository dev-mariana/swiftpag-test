import { z } from 'zod';

export const getChargeByIdParamSchema = z.object({
  id: z.string().cuid({ message: 'Invalid charge Id format' }),
});
