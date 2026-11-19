import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .trim()
    .min(2, "Min 2 characters.")
    .max(30, "Max 30 characters"),
  password: z.string().min(8, "Min 8 characters."),
  confirmPassword: z.string().min(8, "Min 8 characters."),
});

export type SignUpForm = z.infer<typeof signUpSchema>;
