"use client";
import ProfileCard from "@/components/Profile/ProfileCard";
import useUserStore from "@/store/userUserStore";
import { toast } from "sonner";
const MAX_FILE_SIZE = 10485760; // 10MB
export default function ProfileSettingsPage() {
  const user = useUserStore(state => state.user);
  const handleUpdateProfile = async (newProfileImage: File) => {
    if (!newProfileImage.type.startsWith('image/')) {
      toast.error('Profile must be an image');
      return;
    }
    if (newProfileImage.size > MAX_FILE_SIZE) {
      toast.error('Profile image must of less than 10MB in size');
      return;
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
