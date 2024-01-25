import { AdminType, UserUpdatableFieldType } from "@/types/types";
import FieldView from "./FieldView";
type Props = {
    admin: AdminType | null;
    updateUserField: (value: string, updateFor: UserUpdatableFieldType) => Promise<void>
}
const AdminInformation = ({ admin, updateUserField }: Props) => {
    if (!admin) return;
    return (
        <div
            className="flex flex-col space-y-5 p-4"
        >
            <div className="border-t border-gray-300"></div>
            <FieldView label="Bio" name="bio" value={admin.bio} onUpdate={updateUserField} />
            <FieldView label="Website" name="website" value={admin.website} onUpdate={updateUserField} />
            <FieldView label="Domain Url" name="domainUrl" value={admin.domainUrl} onUpdate={updateUserField} />
        </div>
    )

};
export default AdminInformation;