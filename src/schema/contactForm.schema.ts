import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().nonempty("This field is required"),
  email: z.string().nonempty("This field is required"),
  message: z.string().nonempty("This field is required"),
});

export type contactFormType = z.infer<typeof contactFormSchema>;
