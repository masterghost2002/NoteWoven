"use client";
import { Button } from "./button";
type Props = {
    icon: JSX.Element,
    onClick: () => void,
    label: string
}
const IconButton = ({ icon, onClick, label }: Props) => {
    return (<Button
        onClick={onClick}
        className="
            h-full
            p-2
            gap-2
            text-black
            dark:text-white
            bg-transparent
            rounded-full
            flex
            flex-col
            items-center
            justify-center
            hover:bg-transparent
            active:bg-transparent
            "
    >
        <div>
            {icon}
        </div>
        <span className="text-xs">
            {label}
        </span>
    </Button>)
};
export default IconButton;