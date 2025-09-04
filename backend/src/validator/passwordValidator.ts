import { z } from "zod";

export const passwordSchema = z.object({
  length: z
    .number({
      error: "The 'length' field must be a number",
    })
    .min(4, { message: "Password must be at least 4 characters long" })
    .max(64, { message: "Password must be at most 64 characters long" }),

  numbers: z
    .boolean({ error: "The 'numbers' field must be true or false" })
    .optional()
    .default(false),

  symbols: z
    .boolean({ error: "The 'symbols' field must be true or false" })
    .optional()
    .default(false),

  uppercase: z
    .boolean({
      error: "The 'uppercase' field must be true or false",
    })
    .optional()
    .default(false),

  lowercase: z
    .boolean({
      error: "The 'lowercase' field must be true or false",
    })
    .optional()
    .default(false),
});

export type PasswordOptions = z.infer<typeof passwordSchema>;
