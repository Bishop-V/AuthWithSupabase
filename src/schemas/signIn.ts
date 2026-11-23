import { z } from "zod";

export const signinSchema = z.object({
  email: z.email("Enter a valid email").trim(),
  password: z.string().min(1, "Password is required"),
});

export type SigninForm = z.infer<typeof signinSchema>;