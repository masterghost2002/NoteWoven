import { memo, useEffect } from "react";
import { signal } from '@preact/signals-react'
import { Sun, Moon, SunMoon } from "lucide-react";
import IconButton from "../ui/iconbutton";
import { themeType } from "@types";
import { setTheme } from "@/hooks/useTheme";

//
const themeIcon = signal(Sun);
const currentThemeName = signal('System');
const IconThemeSwitcher = () => {
    const handleThemeSwitch = () => {
        const currentTheme = localStorage.getItem('note-woven-theme');
        if (currentTheme === themeType.dark) {
            setTheme(themeType.system);
            themeIcon.value = SunMoon;
            currentThemeName.value = 'System';
        }
        else if (currentTheme === themeType.light) {
            setTheme(themeType.dark);
            themeIcon.value = Moon;
            currentThemeName.value = 'Dark';
        }
        else {
            setTheme(themeType.light);
            themeIcon.value = Sun;
            currentThemeName.value = 'Light';
        }
    }
    useEffect(() => {
        const theme = localStorage.getItem('note-woven-theme');
        if (theme === themeType.dark) {
            themeIcon.value = Moon;
            currentThemeName.value = 'Dark';
        }
        else if (theme === themeType.light) {
            themeIcon.value = Sun;
            currentThemeName.value = 'Light';
        }
        else {
            themeIcon.value = SunMoon;
            currentThemeName.value = 'System';
        };
    }, []);
    return (
        <IconButton
            label={currentThemeName.value}
            onClick={handleThemeSwitch}
            icon={<themeIcon.value />}
        />
    )
};
export default memo(IconThemeSwitcher);