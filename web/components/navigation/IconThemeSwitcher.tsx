"use client";
import { memo, useEffect, useState } from "react";
import IconButton from "../ui/iconbutton";
import { Moon, Sun, SunMoon } from "lucide-react";
import { themeType } from "@/types/types";
import { setTheme } from "@/hooks/useTheme";
const IconThemeSwitcher = () => {
    const [currentThemeName, setCurrentThemeName] = useState('System');
    const handleThemeSwitch = () => {
        const currentTheme = localStorage.getItem('note-woven-theme');
        if (currentTheme === themeType.dark) {
            setTheme(themeType.system);
            setCurrentThemeName('System');
        }
        else if (currentTheme === themeType.light) {
            setTheme(themeType.dark);
            setCurrentThemeName('Dark');
        }
        else {
            setTheme(themeType.light);
            setCurrentThemeName('Light');
        }
    }
    useEffect(() => {
        const theme = localStorage.getItem('note-woven-theme');
        if (theme === themeType.dark) {
            setCurrentThemeName('Dark');
        }
        else if (theme === themeType.light) {
            setCurrentThemeName('Light');
        }
        else {
            setCurrentThemeName('System');
        };
    }, []);
    return (
        <IconButton
            label={currentThemeName}
            onClick={handleThemeSwitch}
            icon={
                currentThemeName === 'System' ? <SunMoon /> : currentThemeName === 'Light' ? <Moon /> : <Sun />
            }
        />
    )
};
export default memo(IconThemeSwitcher);