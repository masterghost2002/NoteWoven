import * as z from 'zod';
import { signInFormSchema, serverSetupFormSchema } from "./schemas";
type ServerSetupFormType = z.infer<typeof serverSetupFormSchema>;
type ServerSetupFormProps = {
    onSubmit:(values:ServerSetupFormType)=>Promise<void>,
    isLoading:Signal<boolean>
}
type SignInFormType = z.infer<typeof signInFormSchema>;
type SignInFormProps = {
    onSubmit:(values:SignInFormType)=>Promise<void>,
    isLoading:Signal<boolean>
}
export {SignInFormType, SignInFormProps, ServerSetupFormType, ServerSetupFormProps};