"use client"
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import SignInForm from "@/components/forms/SignIn.form";
import api from "@/util/ApiHandler";
import { SignInFormType } from "@/form-schemas/form.types";
import { UserType } from "@/types/types";
import useUserStore from "@/store/useUserStore";
// component and its state
export default function SignInPage() {
    const [isLoading, setIsLoading] = useState(false);
    //user store
    const setUser = useUserStore(state=>state.setUser);

    //navigation
    const router = useRouter();

    const handleSignIn = async (data:SignInFormType)=>{
        setIsLoading(true);
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
            router.push('/');
        } catch (error:any) {
            
            toast.error(error.response.data.message);
            toast.dismiss(id);
        }
        setIsLoading(false);
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
