import { UserType, AdminType } from "@/types/types";
import FieldView from "./FieldView";
type Props = {
    user: UserType
}
const AdminInformation = ({admin}:{admin:AdminType | null}) => {
    if (!admin) return;
    return (
        <>
            <FieldView label="bio" value={admin.bio} />
            <FieldView label="Website" value={admin.website} />
            <FieldView label="Domain Url" value={admin.domainUrl} />
        </>
    )

}
const UserInformation = ({ user }: Props) => {
    if (!user) return;
    return (
        <div
            className="flex flex-col space-y-5 p-4"
        >
            <FieldView label="Full Name" value={user.fullname} />
            <FieldView label="Username" value={user.username} />
            <FieldView label="Email" value={user.email} />
            <AdminInformation 
                admin={user.admin}
            />
        </div>
    )
};
export default UserInformation;