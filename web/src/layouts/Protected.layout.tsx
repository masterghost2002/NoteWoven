import { useEffect, useCallback } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { signal } from "@preact/signals-react";
import Header from "@/components/Header";
import Sidenavbar from "@/components/navigation/Sidenavbar";
import Main from "@/components/Main";
import useUserStore from "@/store/userUserStore";
import { UserType } from "@types";
import { createAxiosInstance } from "@/util/ApiHandler";
// 
const isValidating = signal(false);
const ProtectedLayout = () => {
    // get user from store
    const user = useUserStore(state => state.user);
    const setUser = useUserStore(state=>state.setUser);
    const accessToken = user.accessToken;

    // 
    const navigate = useNavigate();

    const validateToken = useCallback(async () => {
        isValidating.value = true;
        const api = createAxiosInstance(accessToken);

        try {
            const response = await api.post('/api/user/renew-token');
            const user:UserType = response.data.data;
            setUser(user);
            isValidating.value = false;
        } catch (error: any) {
            const statusCode = error.response.status;
            const errorMessage = error.response?.data?.message || 'Server Error';
            isValidating.value = false;
            toast.error(errorMessage);
            if (statusCode === 401)
                navigate('/welcome');
        }

    }, [accessToken, navigate, toast,setUser]);

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
            <Sidenavbar

            />
            <div
                className="
                    flex 
                    flex-col 
                    flex-grow
                "
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