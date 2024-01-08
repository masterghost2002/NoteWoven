import ThemeSwitcher from "./ThemeSwitcher"
import Mobilenavbar from "./navigation/Mobilenavbar"
export default function Header() {
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
          border-b-2
          `}
      >
        <Mobilenavbar

        />
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
  )
}
