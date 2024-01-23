import { toast } from "sonner";
import { createAxiosInstance } from "@/util/ApiHandler";
import { UserUpdatableFieldType } from "@/types/types";
const MAX_FILE_SIZE = 10485760; // 10MB
type UpdateProfileType = {
    profileImage: File;
    accessToken:string | undefined;
    setProfile: (profileUrl: string) => void;
};
type UpdateUserInformationType = {
    accessToken:string | undefined;
    setUserUpdate: (updateFor:UserUpdatableFieldType, value:string)=>void;
    updateFor:UserUpdatableFieldType;
    updateValue:string;
}
const handleUpdateProfile = async ({profileImage, accessToken, setProfile}:UpdateProfileType) => {
    if (!accessToken || !profileImage) return;
    // validate profile image
    if (!profileImage.type.startsWith('image/')) {
        toast.error('Profile must be an image');
        return;
    }
    // validate profile image size
    if (profileImage.size > MAX_FILE_SIZE) {
        toast.error('Profile image must of less than 10MB in size');
        return;
    }
    // update profile
    const toastId = toast.loading('Updating profile...');
    const formData = new FormData();
    formData.append('profile', profileImage);
    const api = createAxiosInstance(accessToken);
    try {
        const res = await api.put('/api/user/update/profile', formData);
        const profileUrl = res.data.data.profileUrl;
        setProfile(profileUrl);
        toast.dismiss(toastId);
        toast.success('Profile updated successfully');
    } catch (error) {
        toast.dismiss(toastId);
        toast.error('Failed to update profile');
    }
};
const handleUpdateUserInformation = async ({accessToken, updateFor, updateValue, setUserUpdate}:UpdateUserInformationType) => {

}
export { handleUpdateProfile, handleUpdateUserInformation }