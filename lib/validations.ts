import { z } from 'zod';

export const trialFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  childName: z.string().min(2, 'Child name must be at least 2 characters'),
  childAge: z.coerce.number().min(3, 'Minimum age is 3').max(18, 'Maximum age is 18'),
  programInterest: z.string().min(1, 'Please select a program'),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type TrialFormData = z.infer<typeof trialFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
