"use client";
import { Pencil } from 'lucide-react';
import Image from 'next/image';
import {DummyProfile} from '@/constants/UserInfoTemp';
const profileInputId = 'profile-picker-input';
type Props = {
  profileUrl: string,
  handleUpdateProfile: (newProfileImage: File) => Promise<void>
}
export default function ProfilePicker({profileUrl, handleUpdateProfile}: Props) {
  const onClickProfileButton = () => {
    const profileInput = document.getElementById(profileInputId);
    if (!profileInput) return;
    profileInput.click();
  }
  const handleOnChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProfileImage = e.target.files?.[0];
    if (!newProfileImage) return;
    handleUpdateProfile(newProfileImage);
  }
  return (
    <div className="sm:shrink-0 my-2">
      <button
        onClick={onClickProfileButton}
        className='relative'
      >
        <Image
          alt="Paul Clapton"
          src={profileUrl && profileUrl.length > 0 ? profileUrl : DummyProfile}
          className="h-16 w-16 rounded-lg object-cover shadow-sm"
          width={16}
          height={16}
          objectFit="cover"
          loading="lazy"
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
        onChange={handleOnChangeProfile}
      >
      </input>
    </div>
  )
}
