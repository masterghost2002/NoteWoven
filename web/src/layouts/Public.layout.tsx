import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";
import useOnScroll from "@/hooks/useOnScroll.hooks";
import {Toaster} from 'sonner';
import ThemeSwitcher from "@/components/ThemeSwitcher";
export default function PublicLayout() {
  const isScrolled = useOnScroll({ threshold: 0, elementId: 'main-container' });
  return (
    <div
      className="
        flex 
        flex-col 
        min-h-screen
        font-ma
        relative
        dark:bg-dark-gray
        dark:text-white
      "
    >
      <Toaster 
        position="top-center" 
        richColors = {true}
      />
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
          ${isScrolled?.value === true && 'border-b-2'}
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
        <ThemeSwitcher/>
      </header>
      <main
        className="
        flex-grow 
        flex 
        flex-col 
        items-center 
        justify-center
        p-5
        "
        id="main-container"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
