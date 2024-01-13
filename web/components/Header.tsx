import Mobilenavbar from "./navigation/Mobilenavbar";
import ThemeSwitcher from "./ThemeSwitcher";
export default function Header() {
  return (
    <header
        className={
          `
          w-full
          min-h-[30px]
          md:min-h-[60px] 
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
          border-b-2
          `}
      >
        <Mobilenavbar

        />
        <span
          className="
            text-[16px]
            font-bold
          "
        >
          NoteWoven
        </span>
        <ThemeSwitcher />
      </header>
  )
}
