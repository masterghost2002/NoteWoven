"use client";
import { useEffect, useCallback, useState, useMemo } from "react";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import useUserStore from "@/store/useUserStore";
import { UserType } from "@/types/types";
import { createAxiosInstance } from "@/util/ApiHandler";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // get user from store
    const user = useUserStore(state => state.user);
    const setUser = useUserStore(state => state.setUser);
    const accessToken = useMemo(()=>user.accessToken, [user]);

    //navigation
    const router = useRouter();

    //state
    const [isValidating, setIsValidating] = useState(false);

    const validateToken = useCallback(async () => {
        if (!accessToken) return;
        console.log('validating token', accessToken);
        setIsValidating(true);
        const api = createAxiosInstance(accessToken);

        try {
            const response = await api.post('/api/user/renew-token');
            const user: UserType = response.data.data;
            setUser(user);
            setIsValidating(false);
        } catch (error: any) {
            const statusCode = error.response.status;
            const errorMessage = error.response?.data?.message || 'Server Error';
            setIsValidating(false);
            toast.error(errorMessage);
               if (statusCode === 401)
                router.push('/welcome/sign-in');
        }

    }, [router, router,accessToken, setUser]);

    useEffect(() => {
        validateToken();
    }, [validateToken]);

    return (
        <div
            className="
               min-h-screen 
               max-h-screen 
               overflow-hidden 
               flex
           "
        >
            <Toaster
                position="top-center"
                richColors={true}
            />
            {/* <Sidenavbar

            /> */}
            <div
                className="
                   flex 
                   flex-col 
                   flex-grow
               "
            >
                <Header

                />

                <main
                    className="
          flex-grow 
          overflow-auto 
          dark:bg-light-gray
          bg-light-dark
        "
                >
                    {children}
                </main>
            </div>
        </div>
    )
}


