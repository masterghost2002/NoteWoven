import { Pencil } from 'lucide-react'
const profileInputId = 'profile-picker-input';
export default function ProfilePicker() {
  const onClickProfileButton = () => {
    const profileInput = document.getElementById(profileInputId);
    if (!profileInput) return;
    profileInput.click();
  }
  return (
    <div className="sm:shrink-0 my-2">
      <button
        onClick={onClickProfileButton}
        className='relative'
      >
        <img
          alt="Paul Clapton"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          className="h-16 w-16 rounded-lg object-cover shadow-sm"
        />
        <Pencil
          className='
          absolute
          -top-2
          -right-2
          h-[18px]
        '
        />
      </button>
      <input
        className="hidden"
        type="file"
        id={profileInputId}
      >
      </input>
    </div>
  )
}
