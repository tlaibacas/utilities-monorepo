import { z } from "zod";

export const passwordSchema = z.object({
  length: z
    .number({
      error: "validation.length.type",
    })
    .min(4, { message: "validation.length.min" })
    .max(64, { message: "validation.length.max" }),

  numbers: z
    .boolean({ error: "validation.numbers.type" })
    .optional()
    .default(false),

  symbols: z
    .boolean({ error: "validation.symbols.type" })
    .optional()
    .default(false),

  uppercase: z
    .boolean({
      error: "validation.uppercase.type",
    })
    .optional()
    .default(false),

  lowercase: z
    .boolean({
      error: "validation.lowercase.type",
    })
    .optional()
    .default(false),
});

export type PasswordOptions = z.infer<typeof passwordSchema>;
