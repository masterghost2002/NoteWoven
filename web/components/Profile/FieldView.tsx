import UpdateDialog from './UpdateDialog';
import { UserUpdatableFieldType } from "@/types/types";
type Props = {
    label: string;
    value: string;
    name:UserUpdatableFieldType;
    onUpdate:(value:string, updateFor:UserUpdatableFieldType)=>Promise<void>
}
const FieldView = ({ label, value,name, onUpdate }: Props) => {
    return (
        <div
            className="flex items-center justify-between gap-4"
        >
            <div
                className="flex flex-col"
            >
                <div
                    className="
                    text-sm
                    text-light-normal-text
                    dark:text-dark-normal-text
                    font-bold
                "
                >
                    {label}
                </div>
                <div
                    className="
                    text-md
                    text-light-selected-text
                    dark:text-dark-selected-text
                    break-all
                "
                >
                    {value}
                </div>
            </div>
            <UpdateDialog
                header={label}
                label={label}
                name = {name}
                onSubmit = {onUpdate}
                value={value}
                isLoading={false}
            />
        </div>
    )
};
export default FieldView;