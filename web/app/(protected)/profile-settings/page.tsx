"use client";
import ProfileCard from "@/components/Profile/ProfileCard";
import useUserStore from "@/store/useUserStore";
import { useUserSyncStore } from "@/store/useUserStore";
import { toast } from "sonner";
import { createAxiosInstance } from "@/util/ApiHandler";
const MAX_FILE_SIZE = 10485760; // 10MB
export default function ProfileSettingsPage() {
  const user = useUserSyncStore(useUserStore, (state) => state.user);
  const setProfile = useUserStore(state => state.setProfile);

  // function to handle profile update
  const handleUpdateProfile = async (profileImage: File) => {
    if (!profileImage)
      return;
    if (!profileImage.type.startsWith('image/')) {
      toast.error('Profile must be an image');
      return;
    }
    if (profileImage.size > MAX_FILE_SIZE) {
      toast.error('Profile image must of less than 10MB in size');
      return;
    }
    const toastId = toast.loading('Updating profile...');
    const formData = new FormData();
    formData.append('profile', profileImage);
    const api = createAxiosInstance(user.accessToken);
    try {
      const res = await api.put('/api/user/update/profile', formData);
      const profileUrl = res.data.data.profileUrl;
      setProfile(profileUrl);
      toast.dismiss(toastId);
      toast.success('Profile updated successfully', {
        classNames: {
          toast: 'dark:!bg-light-gray dark:!text-white'
        }
      });
    } catch (error) {
      toast.dismiss(toastId);
      toast.error('Failed to update profile', {
        classNames: {
          toast: 'dark:!bg-light-gray dark:!text-white'
        }
      });
    }
  }

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
        handleUpdateProfile={handleUpdateProfile}
      />
    </div>
  )
}
