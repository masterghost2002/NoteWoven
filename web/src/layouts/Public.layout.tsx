import React from "react";
import Footer from "@/components/footer/Footer";
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        h-screen 
        w-screen 
        flex 
        flex-col 
        items-center 
        justify-center
        dark:bg-dark-gray
        dark:text-white
        relative
      "
    >
      <div
        className="
          w-full 
          min-h-[60px]
          self-start
          absolute
          top-0
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
      </div>
      <div
        className="
          text-center
          p-5
          md:w-1/4
          text-[16px]
          font-[500]
          text-light-normal-text
        "
      >
        Welcome to NoteWoven, where your notes and tasks intertwine seamlessly. Discover the art of organized creativity!
      </div>
      {children}
      <Footer/>
    </div>
  )
}
