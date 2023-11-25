import z from 'zod';
const serverSetupFields = z.object({
    domainUrl:z.string().url(),
    website:z.string().url(),
    bio:z.string().min(2).max(50),
    email:z.string().email(),
    username:z.string().min(6, {message:'Username at least 6 char long '}).max(20, {message:'Username should not ecxeed 20 char'}),
    password:z.string().min(8, {message:'Password must be 8 char long'}).max(50, {message:'Password must be less than 50 char'}),
    profileUrl:z.string().url().optional()

});
export default serverSetupFields;