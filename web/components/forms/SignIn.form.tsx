"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { SignInFormType, SignInFormProps } from "@/form-schemas/form.types";
import { signInFormSchema } from "@/form-schemas/schemas";
export default function SignInForm({isLoading, onSubmit}:SignInFormProps) {
    const form = useForm<SignInFormType>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
            credential: "",
            password: ""
        },
    });
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full h-auto">
                <FormField
                    control={form.control}
                    name="credential"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="username or email" {...field}
                                />
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
                <Button 
                    type="submit" 
                    className="w-full"
                    disabled = {isLoading}
                >
                    Sign In
                </Button>
            </form>
        </Form>
    )
}
