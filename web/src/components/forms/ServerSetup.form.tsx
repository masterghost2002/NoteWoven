import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from 'axios';
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signal } from "@preact/signals-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import config from "@/config";

// form schema
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }).max(50, { message: "Username must no exceed 50 characters." }),
    email: z.string().email(),
    bio: z.string().min(2, { message: "Bio must me 2 char long" }).max(200, { message: "Bio must not exceed 200 character" }),
    website: z.string().url(),
    domainUrl: z.string().url(),
    password: z.string().min(8, { message: "Password must be 8 character long" }),
});

// signal states
const isLoading = signal(false);
export default function ServerSetupForm() {

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            bio: "",
            website: "",
            domainUrl: "",
            password: "",
        },
    });
    const onSubmit = async (values: z.infer<typeof formSchema>): Promise<void> => {
        const id = toast.loading('Setting up server ...', {
            classNames: {
                toast: 'dark:!bg-light-gray dark:!text-white'
            }
        });
        isLoading.value = true;
        try {
            await axios.post(`${config.serverUrl}/api/server/server-setup`, { serverData: values });
            toast.success('Server setup is done. Redirecting to login page.', {
                classNames: {
                    toast: 'dark:!bg-light-gray dark:!text-white'
                }
            });
            toast.dismiss(id);
            isLoading.value = false;
            setTimeout(() => {
                navigate('/');
            }, 2000)

        } catch (error: any) {
            toast.error(error.response.data.message);
            toast.dismiss(id);
            isLoading.value = false;

            // if the server setup is already done navigate to login page
            if (error.response.status === 409)
                setTimeout(() => {
                    navigate('/');
                }, 2000);
        }

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full h-auto">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="bio" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="website" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="domainUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="domain url" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full p-2"
                    disabled={isLoading.value === true}
                >
                    Continue
                </Button>
            </form>
        </Form>
    )
}
