import * as z from 'zod';
const signInFormSchema = z.object({
    credential: z.string().refine(value => {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isUsername = /^[a-zA-Z0-9_-]+$/.test(value);
        return isEmail || isUsername;
    }, {
        message: 'Invalid username or email',
    }),
    password: z.string().min(8, { message: "Password must be 8 character long" }),
});
const serverSetupFormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }).max(50, { message: "Username must no exceed 50 characters." }),
    fullname:z.string().min(4, {message:"Full Name must be at least 4 characters"}).max(50, {message:"Full Name must not exceed 50 characters"}),
    email: z.string().email(),
    bio: z.string().min(2, { message: "Bio must me 2 char long" }).max(200, { message: "Bio must not exceed 200 character" }),
    website: z.string().url(),
    domainUrl: z.string().url(),
    password: z.string().min(8, { message: "Password must be 8 character long" }),
    confirmPassword: z.string().min(8, { message: "Password must be 8 character long" })
});
export {signInFormSchema, serverSetupFormSchema};