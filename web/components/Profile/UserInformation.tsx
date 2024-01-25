import { UserType, AdminType } from "@/types/types";
import FieldView from "./FieldView";
import { UserUpdatableFieldType } from "@/types/types";
type Props = {
    user: UserType,
    updateUserField: (value: string, updateFor: UserUpdatableFieldType) => Promise<void>
}
const UserInformation = ({ user, updateUserField }: Props) => {
    if (!user) return;
    return (
        <div
            className="flex flex-col space-y-5 p-4"
        >
            <FieldView label="Full Name" name="fullname" value={user.fullname} onUpdate={updateUserField} />
            <FieldView label="Username" name="username" value={user.username} onUpdate={updateUserField} />
            <FieldView label="Email" name="email" value={user.email} onUpdate={updateUserField} />
        </div>
    )
};
export default UserInformation;