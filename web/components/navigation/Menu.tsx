import ProfileDrawer from "./ProfileDrawer"
type Props = {
  setHandleSheet?:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Menu({setHandleSheet}:Props){
  return (
    <div
      className="flex-grow flex flex-col relative"
    >
      <ProfileDrawer
        setHandleSheet={setHandleSheet}
      />
    </div>
  )
}
