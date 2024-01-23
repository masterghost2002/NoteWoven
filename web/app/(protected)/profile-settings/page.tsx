"use client";
import ProfileCard from "@/components/Profile/ProfileCard";
import UserInformation from "@/components/Profile/UserInformation";
import useUserStore from "@/store/useUserStore";
import { useUserSyncStore } from "@/store/useUserStore";
import { UserUpdatableFieldType } from "@/types/types";
export default function ProfileSettingsPage() {
  const user = useUserSyncStore(useUserStore, (state) => state.user);
  const accessToken = user?.accessToken;
  const setProfile = useUserStore(state => state.setProfile);
  const setUserUpdate = useUserStore(state=>state.setUserUpdate);

  // function to handle profile picture update
  const onChangeProfile = async (profileImage:File)=>{
    const {handleUpdateProfile} = (await import('./api-functions'));
    await handleUpdateProfile({profileImage, accessToken, setProfile});
  };

  //function for updating user data
  const updateUserField = async (value:string, updateFor:UserUpdatableFieldType)=>{
    if(updateFor !== 'email' && updateFor !== 'username'){
      const {handleUpdateUserInformation} = (await import('./api-functions'));
      await handleUpdateUserInformation({accessToken, updateValue:value, updateFor, setUserUpdate})
    }
  }

  // if user is not logged in
  if(!user) return null;

  // if user is logged in
  return (
    <div
      className="
        p-2
        md:p-5
      "
    >
      <ProfileCard
        username={user.username}
        email={user.email}
        profileUrl={user.profileUrl}
        fullname={user.fullname}
        joinedAt={user.createdAt}
        lastUpdatedAt={user.updatedAt}
        onChangeProfile={onChangeProfile}
      />
      <UserInformation 
        user={user} 
        updateUserField={updateUserField}
      />
    </div>
  )
}
