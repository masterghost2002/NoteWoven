import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { signal } from "@preact/signals-react";
import SignInForm from "@/components/forms/SignIn.form";
import api from "@/util/ApiHandler";
import { SignInFormType } from "@/form-schemas/form.types";
import { UserType } from "@types";
import useUserStore from "@/store/userUserStore";

// component and its state
const isLoading = signal(false);
export default function SignInPage() {
    const navigate = useNavigate();
    //user store
    const setUser = useUserStore(state=>state.setUser);

    const handleSignIn = async (data:SignInFormType)=>{
        isLoading.value = true;
        const id = toast.loading('Singing In ...', {
            classNames: {
                toast: 'dark:!bg-light-gray dark:!text-white'
            }
        });
        try {
            const response = await api.post('/api/user/sign-in', {loginData:data});
            const user:UserType = response.data.data;
            setUser(user);
            toast.success('Signin Success, Redirecting to dashboard', {
                classNames: {
                    toast: 'dark:!bg-light-gray dark:!text-white'
                }
            });
            toast.dismiss(id);
            navigate("/dashboard")
        } catch (error:any) {
            
            toast.error(error.response.data.message);
            toast.dismiss(id);
        }
        isLoading.value = false;
        toast.dismiss(id);
    }
    return (
        <div
            className="
                flex flex-col 
                justify-center 
                items-start 
                w-full 
                md:w-1/4 
                gap-10 
                text-start
                "
        >
            <div
                className="
                    text-center
                    text-[16px]
                    font-[500]
                    text-light-normal-text
                    "
            >
                Welcome to NoteWoven, where your notes and tasks intertwine seamlessly. Discover the art of organized creativity!
            </div>
            <h1
                className="text-[48px] font-bold"
            >
                Sign In
            </h1>
            <SignInForm 
                onSubmit = {handleSignIn}
                isLoading={isLoading}
            />
        </div>
    )
}
