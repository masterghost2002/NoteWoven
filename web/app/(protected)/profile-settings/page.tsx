"use client";
import ProfileCard from "@/components/Profile/ProfileCard";
import UserInformation from "@/components/Profile/UserInformation";
import useUserStore from "@/store/useUserStore";
import { useUserSyncStore } from "@/store/useUserStore";
export default function ProfileSettingsPage() {
  const user = useUserSyncStore(useUserStore, (state) => state.user);
  const setProfile = useUserStore(state => state.setProfile);

  // function to handle profile update
  const onChangeProfile = async (profileImage:File)=>{
    const {handleUpdateProfile} = (await import('./api-functions'));
    await handleUpdateProfile({profileImage, accessToken:user?.accessToken, setProfile});
  };

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
      />
    </div>
  )
}
