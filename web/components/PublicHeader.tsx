"use client";
import useOnScroll from "@/hooks/useOnScroll.hooks";
import ThemeSwitcher from "@/components/ThemeSwitcher";
const PublicHeader = () => {
    const isScrolled = useOnScroll({ threshold: 0, elementId: 'main-container' });
    return (
        <header
            className={
                `
            w-full 
            min-h-[60px] 
            flex-shrink-0
            flex
            items-center
            p-5
            sticky
            top-0
            z-10
            bg-white
            justify-between
            dark:bg-dark-gray
            ${isScrolled === true && 'border-b-2'}
            `}
        >
            <h1
                className="
              text-[20px]
              font-bold
            "
            >
                NoteWoven
            </h1>
            <ThemeSwitcher />
        </header>
    )
};
export default PublicHeader;