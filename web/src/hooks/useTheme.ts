import { useEffect } from "react";
const themeKey = 'note-woven-theme';
function mediaListner(ev: MediaQueryListEvent) {
    const htmlEl = document.documentElement;
    const resolver = ev.matches ? "dark" : "light";
    htmlEl.className = resolver;
}
const setTheme = (theme: string) => {
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    let _themeToSet:string = theme;
    if(theme === 'system'){
        darkMedia.addEventListener("change", mediaListner);
        _themeToSet = darkMedia.matches?'dark':'light'
    }
    else darkMedia.removeEventListener("change", mediaListner);
    document.documentElement.className = _themeToSet;
    localStorage.setItem(themeKey, theme);
}
const useTheme = () => {
    useEffect(() => {
        let theme = localStorage.getItem(themeKey);
        if (!theme)
            theme = 'light' // default theme
        setTheme(theme)
    }, []);
    return setTheme;
};
export default useTheme;