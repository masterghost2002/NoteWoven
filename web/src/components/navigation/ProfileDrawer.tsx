import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerClose
} from "@/components/ui/drawer";
import { useNavigate } from "react-router-dom";
import { Cog, LogOut } from 'lucide-react';
import IconButton from '../ui/iconbutton';
import { UserType } from "@types";
import IconThemeSwitcher from "./IconThemeSwitcher";
import useUserStore from "@/store/userUserStore";
import { Signal } from "@preact/signals-react";
type Props = {
    handleSheet: Signal<boolean>
}
const Profile = ({ user }: { user: UserType }) => {
    return (
        <div className="
            absolute 
            inset-x-0 
            bottom-0 
            border-t 
            border-gray-100 
            dark:border-gray-500 
            flex 
            items-center 
            gap-2 
            bg-inherit 
            p-4 
            hover:bg-gray-50
            dark:hover:bg-dark-gray
            ">
            <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
            />

            <div>
                <p className="text-xs">
                    <strong className="block font-medium">
                        {user.fullname || 'John Doe'}
                    </strong>

                    <span>
                        {user.email || 'john_doe@notewoven.com'}
                    </span>
                </p>
            </div>
        </div>
    )
}
const DrawerButtons = ({ handleSheet }: Props) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user-data');
        window.location.reload();
    };
    const handleSettingsClick = () => {
        handleSheet.value = false;
        navigate('/profile-settings');
    }
    return (
        <div
            className="
                flex
                justify-between
                items-center
                p-5
            "
        >
            <DrawerClose asChild>
                <IconButton
                    icon={<Cog />}
                    label='Settings'
                    onClick={handleSettingsClick}
                />
            </DrawerClose>
            <IconThemeSwitcher />
            <IconButton
                icon={<LogOut />}
                label='Logout'
                onClick={handleLogout}
            />
        </div>
    )
}
const ProfileDrawer = ({ handleSheet }: Props) => {
    const user = useUserStore(state => state.user);
    return (
        <Drawer

        >
            <DrawerTrigger>
                <Profile
                    user={user}
                />
            </DrawerTrigger>
            <DrawerContent
                className="
                    md:w-[300px] 
                    dark:bg-dark-gray
                "
            >
                <DrawerHeader
                    className="text-left"
                >
                    <DrawerTitle>
                        Hey, {user.fullname || 'John Doe'}
                    </DrawerTitle>
                    <DrawerDescription>
                        #PersonalizeYourProfile 🚀✨
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerButtons
                    handleSheet={handleSheet}
                />
                <DrawerFooter
                    className="
                        border-t 
                        border-gray-100 
                        dark:border-gray-500
                        text-light-normal-text
                        dark:text-dark-normal-text
                        font-medium
                        text-sm
                    "
                >

                    @{user.username || 'jogn_doe'}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
export default ProfileDrawer;
