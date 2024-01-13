"use client";
import { useEffect, useState } from 'react';
export default function useOnScroll({ threshold = 0, elementId }: { threshold: number, elementId: string }) {
    const handleScrollFunction = () => {
        if (window.scrollY > threshold)
            setIsScrolled(true);
        else setIsScrolled(false);
    }
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        if (elementId === '' || elementId.trim().length === 0)
        return;
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