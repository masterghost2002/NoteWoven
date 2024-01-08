import ProfileDrawer from "./ProfileDrawer"
import { Signal } from "@preact/signals-react"
type Props = {
  handleSheet:Signal<boolean>
}
export default function Menu({handleSheet}:Props){
  return (
    <div
      className="flex-grow flex flex-col relative"
    >
      <ProfileDrawer
        handleSheet={handleSheet}
      />
    </div>
  )
}
