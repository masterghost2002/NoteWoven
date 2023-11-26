import z from 'zod';
const loginFields = z.object({
    credential:z.string(),
    password:z.string().min(8, {message:'Password must be 8 char long'}).max(50, {message:'Password must be less than 50 char'}),

});
export default loginFields;