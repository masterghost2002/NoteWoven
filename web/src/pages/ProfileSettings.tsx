import ProfileCard from "@/components/Profile/ProfileCard";
import useUserStore from "@/store/userUserStore"
export default function ProfileSettings() {
  const user = useUserStore(state=>state.user);
  return (
    <div
      className="
        p-2
        md:p-5
      "
    >
      <ProfileCard
        username = {user.username}
        email = {user.email}
        profileUrl = {user.profileUrl}
        fullname = {user.fullname}
        joinedAt = {user.createdAt}
        lastUpdatedAt = {user.updatedAt}
      />
    </div>
  )
}
