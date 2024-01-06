import { User, Admin } from "@prisma/client"
type Theme = 'dark' | 'light' | 'system'
type UserWithoutPassword  = Omit<User, 'password'>;
type UserType = UserWithoutPassword & {
    admin:Admin | null
};
export {UserType,Theme}