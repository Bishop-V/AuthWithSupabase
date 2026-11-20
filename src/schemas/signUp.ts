import { z } from "zod";

export const formSchema = z
  .object({
    email: z.email("Please input email").trim(),
    password: z.string().min(6, "Must be 6 characters"),
    confirmPass: z.string(),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Passwords don't match",
    path: ["confirmPass"],
  });

export type signUpFormType = z.infer<typeof formSchema>;
