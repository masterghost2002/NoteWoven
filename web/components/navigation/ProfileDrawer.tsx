"use client";
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
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Cog, LogOut } from 'lucide-react';
import IconButton from '../ui/iconbutton';
import { UserType } from "@/types/types";
import IconThemeSwitcher from "./IconThemeSwitcher";
import { DummyProfile } from "@/constants/UserInfoTemp";
import useUserStore from "@/store/useUserStore";
type Props = {
    setHandleSheet?: React.Dispatch<React.SetStateAction<boolean>>
}
const Profile = ({ user }: { user: UserType}) => {
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
            <Image
                alt="Man"
                src={user?.profileUrl || DummyProfile}
                className="h-[40px] w-[40px] rounded-full object-cover"
                width={40}
                height={40}
                priority = {true}
            />

            <div>
                <p className="text-xs">
                    <strong className="block font-medium">
                        {user?.fullname || 'John Doe'}
                    </strong>

                    <span>
                        {user?.email || 'john_doe@notewoven.com'}
                    </span>
                </p>
            </div>
        </div>
    )
}
const ProfileDrawer = ({ setHandleSheet }: Props) => {
    const router = useRouter();
    const user = useUserStore(state => state.user);
    const handleLogout = () => {
        localStorage.removeItem('user-data');
        window.location.reload();
    };
    const handleSettingsClick = () => {
        if (setHandleSheet)
            setHandleSheet(false);
        router.push('/profile-settings');
    }
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
                        Hey, {user?.fullname || 'John Doe'}
                    </DrawerTitle>
                    <DrawerDescription>
                        #PersonalizeYourProfile 🚀✨
                    </DrawerDescription>
                </DrawerHeader>
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

                    @{user?.username || 'jogn_doe'}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
export default ProfileDrawer;
