"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServerSetupForm from "@/components/forms/ServerSetup.form";
import { toast } from "sonner";
import { ServerSetupFormType } from "@/form-schemas/form.types";
import api from "@/util/ApiHandler";
export default function ServerSetupPage() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const handleServerSetup = async (data: ServerSetupFormType): Promise<void> => {
        const id = toast.loading('Setting up server ...', {
            classNames: {
                toast: 'dark:!bg-light-gray dark:!text-white'
            }
        });
        if (data.password !== data.confirmPassword) {
            toast.error('Password and confirm password must be same');
            return;
        }
        setIsLoading(true);
        try {
            await api.post('/api/server/server-setup', { serverData: data });
            toast.success('Server setup is done. Redirecting to login page.', {
                classNames: {
                    toast: 'dark:!bg-light-gray dark:!text-white'
                }
            });
            toast.dismiss(id);
            setIsLoading(false);
            setTimeout(() => {
                router.push('/welcome/sign-in');
            }, 2000)

        } catch (error: any) {
            toast.error(error.response.data.message);
            toast.dismiss(id);
            setIsLoading(false);
            // if the server setup is already done navigate to login page
            if (error.response.status === 409)
                setTimeout(() => {
                    router.push('/welcome/sign-in');
                }, 2000);
        }

    }
    return (
        <div
            className="
                flex 
                flex-col 
                gap-10
                w-full 
                md:w-1/3 
                "
        >
            <h1
                className="text-[48px] font-[700] "
            >
                Welcome to NoteWoven
            </h1>
            <p
                className="
                    font-[500] 
                    text-light-normal-text
                "
            >
                Thank you for choosing NoteWoven, the ultimate note-taking and task management app. Before you can start using NoteWoven, you need to set up your own server.
                Don’t worry, it’s easy and fast!
            </p>
            <ServerSetupForm
                onSubmit={handleServerSetup}
                isLoading={isLoading}
            />
        </div>
    )
}
