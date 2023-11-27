import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";
import useTheme from "@/hooks/useTheme";
import { themeType } from "@types";
export default function ThemeSwitcher() {
    const setTheme = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="h-[1.2rem] w-[1.2rem]">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden" />
                    <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block" />
                    <span className="sr-only">Toggle theme</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="
                    dark:bg-light-gray
                    mx-5
                "
            >
                <DropdownMenuLabel>Choose your theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={()=>setTheme(themeType.light)}
                >
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={()=>setTheme(themeType.dark)}
                >
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                onClick={()=>setTheme(themeType.system)}
                >
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

