import z, { string } from "zod";

const PatientRegistrationZodSchema = z.object({
  name: z
    .string("Not a string")
    .min(3, "Name atleat 3 characters long")
    .max(10),
  email: z.email("Not email!!!"),
  password: z
    .string()
    .min(8, "Password must minimum 8 characters long")
    .regex(/[A-Z]/, "Password must contain atleast one Uppercase letter")
    .regex(/[a-z]/, "Password must contain atleast one Lowercase letter")
    .regex(/[0-9]/, "Password must contain atleast one Number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain atleast one speacial character",
    ),
  patient: z
    .object({
      contactNumber: string().optional(),
    })
    .optional(),
});
const LoginZodSchema = z.object({
  email: z.email("Not email!!!"),
  password: z
    .string()
    .min(8, "Password must minimum 8 characters long")
    .regex(/[A-Z]/, "Password must contain atleast one Uppercase letter")
    .regex(/[a-z]/, "Password must contain atleast one Lowercase letter")
    .regex(/[0-9]/, "Password must contain atleast one Number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain atleast one speacial character",
    ),
});

export const UserValidation = {
  PatientRegistrationZodSchema,
  LoginZodSchema,
};
