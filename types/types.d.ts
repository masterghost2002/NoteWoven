import { User, Admin } from "@prisma/client"
type Theme = 'dark' | 'light' | 'system'
type UserWithoutPassword  = Omit<User, 'password'>;
type JwtUserPayload{
    id:string,
    username:string,
    email:string
}
type UserType = UserWithoutPassword & {
    admin:Admin | null
};
export {UserType,Theme, JwtUserPayload}