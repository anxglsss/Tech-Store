import { z } from 'zod'

export const schema = z.object({
	username: z.string().min(1, 'Required'),
	email: z.string().email('Invalid email').min(1, 'Required'),
	password: z.string().min(6, 'Too small'),
})

export type IData = z.infer<typeof schema>
