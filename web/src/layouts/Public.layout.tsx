import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";
export default function PublicLayout() {
  return (
    <div
      className="
        flex 
        flex-col 
        h-screen 
        max-h-screen
        font-ma
        dark:bg-dark-gray
        dark:text-white
      "
    >
      <header
        className="
          w-full 
          min-h-[60px] 
          flex-shrink-0
          p-5
          "
      >
        <h1
          className="
            text-[20px]
            font-bold
          "
        >
          NoteWoven
        </h1>
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
      >
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}
