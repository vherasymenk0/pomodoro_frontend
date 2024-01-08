import { User } from '@/types/user.interface'

export type AuthFormData = Pick<User, 'email' | 'password'>
