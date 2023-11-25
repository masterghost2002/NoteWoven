import { signal } from '@preact/signals-react';
import { useEffect } from 'react';
const isScrolled = signal(false);
export default function useOnScroll({ threshold = 0, elementId }: { threshold: number, elementId: string }) {
    if (elementId === '' || elementId.trim().length === 0)
        return;
    const handleScrollFunction = () => {
        if (window.scrollY > threshold)
            isScrolled.value = true;
        else isScrolled.value = false;
    }
    useEffect(() => {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element having id ${elementId} is not found: Error at useOnScrollHook`);
            return;
        }
        window.addEventListener('scroll', handleScrollFunction);
        return () => window.removeEventListener('scroll', handleScrollFunction);
    }, []);
    return isScrolled;
}