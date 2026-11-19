import { z } from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(8, "Min 8 characters."),
});

export type LoginForm = z.infer<typeof loginSchema>;
