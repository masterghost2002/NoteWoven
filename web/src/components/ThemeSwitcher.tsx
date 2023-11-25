import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import useTheme from "@/hooks/useTheme";
import { themeType } from "@types";
export default function ThemeSwitcher() {
    const setTheme = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className="bg-transparent border-0" variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
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

