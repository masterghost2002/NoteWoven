
// Custom hook to which provide theme switch functionality
import { useEffect } from "react";
import { themeType } from "@types";
// global reference to darkMedia 
let darkMediaGLOBAL:MediaQueryList | null = null;

// constant key name of theme used to store and retrive theme from localstorage
const themeKey = 'note-woven-theme';

//  media listener to change the theme according to the system theme if user sets the theme to system
function mediaListener(ev: MediaQueryListEvent) {
    const htmlEl = document.documentElement;
    const resolver = ev.matches ? "dark" : "light";
    htmlEl.className = resolver;
}
// a small utility function to return the theme from localStorage in form of themeType
function getThemeFromLocalStorage():themeType{
    const theme = localStorage.getItem(themeKey);
    if(theme === 'light') return themeType.light;
    if(theme === 'dark') return themeType.dark;
    return themeType.system;
}

// set theme function 
const setTheme = (theme: themeType) => {
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    let _themeToSet: string = theme;
    if (theme === themeType.system) {
        darkMedia.addEventListener("change", mediaListener);
        _themeToSet = darkMedia.matches ? 'dark' : 'light'
        darkMediaGLOBAL = darkMedia;
    }
    else darkMedia.removeEventListener("change", mediaListener);
    document.documentElement.className = _themeToSet;
    localStorage.setItem(themeKey, theme);
}

// use effect to return at app load
const useTheme = () => {
    useEffect(() => {
        let theme:themeType = getThemeFromLocalStorage();
        setTheme(theme);
        return ()=>{
            if(!darkMediaGLOBAL) return;
            darkMediaGLOBAL.removeEventListener("change", mediaListener);
        }
    }, []);
    return setTheme;
};
export default useTheme;