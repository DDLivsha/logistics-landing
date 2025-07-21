import { z } from 'zod'

export const IntroFormSchema = z.object({
   name: z
      .string()
      .min(1, { error: 'Name is required' })
      .max(20, { error: 'Name must be at most 20 characters' })
      .regex(
         /^(?!.* {2})[a-zA-Zа-яА-ЯіїєґІЇЄҐ'-]+(?: [a-zA-Zа-яА-ЯіїєґІЇЄҐ'-]+)*$/,
         { error: 'Only letters' }
      ),
   phone: z
      .string()
      .min(8, 'Min 8 symbols')
      .max(20, 'Max 20 symbols')
      .regex(/^(\+)?[0-9]+$/, { error: 'Only numbers' }),
   email: z
      .email({ error: 'Invalid email' })
      .max(30, { error: 'Max 30 symbols' })
})

export type IForm = z.infer<typeof IntroFormSchema>