import { useEffect, useCallback } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { signal } from "@preact/signals-react";
import Header from "@/components/Header";
import Sidenavbar from "@/components/navigation/Sidenavbar";
import Main from "@/components/Main";
import useUserStore from "@/store/userUserStore";
import { createAxiosInstance } from "@/util/ApiHandler";
const ProtectedLayout = () => {
    // get user from store
    const user = useUserStore(state => state.user);
    const accessToken = user.accessToken;

    // 
    const navigate = useNavigate();

    const validateToken = useCallback(async () => {
        const api = createAxiosInstance(accessToken);

        try {
            const response = await api.get('/api/user/validate-token');
            console.log(response);
        } catch (error: any) {
            const statusCode = error.response.satus;
            const errorMessage = error.response?.data?.message || 'Server Error';
            console.log(errorMessage);

            toast.error(errorMessage);
            if (statusCode === 403)
                navigate('/welcome');
        }

    }, [accessToken, navigate, toast]);

    useEffect(() => {
        // validateToken();
    }, []);

    return (
        <div
            className="
                min-h-screen 
                max-h-screen 
                overflow-hidden 
                flex
            "
        >
            <Sidenavbar

            />
            <div
                className="flex flex-col flex-grow"
            >
                <Header

                />

                <Main

                />
            </div>
        </div>
    )
};
export default ProtectedLayout;