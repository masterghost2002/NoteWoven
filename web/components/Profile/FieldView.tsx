import { Pencil } from 'lucide-react';
import { Button } from '../ui/button';
type Props = {
    label: string;
    value: string;
}
const FieldView = ({ label, value }: Props) => {
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
            <Button
                className="
                h-full
                p-2
                gap-2
                text-black
                dark:text-white
                dark:bg-dark-gray
                bg-gray-100
                rounded-full
                flex
                flex-col
                items-center
                justify-center
                hover:bg-transparent
                active:bg-transparent
            "
            >
                <div>
                    <Pencil size={20} />
                </div>
            </Button>
        </div>
    )
};
export default FieldView;