import { Outlet } from "react-router-dom"
export default function Main() {
  return (
    <main
        className="
          flex-grow 
          overflow-auto 
        "
    >
        <Outlet/>
    </main>
  )
}
