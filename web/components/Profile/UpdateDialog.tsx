import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil } from 'lucide-react';
import { useState } from "react";
import { UserUpdatableFieldType } from "@/types/types";
type UpdateDialogProps = {
    header: string,
    label: string,
    value: string,
    isLoading:boolean,
    name:UserUpdatableFieldType,
    onSubmit: (value:string, updateFor:UserUpdatableFieldType) => Promise<void>
}
export default function UpdateDialog({ header, label, value,name, onSubmit, isLoading }:UpdateDialogProps) {
    const [currentInputValue, setCurrentInputValue] = useState(value);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setCurrentInputValue(e.target.value);
    }
    const handleOnClick = ()=>{
        onSubmit(currentInputValue, name);
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
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
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] dark:bg-dark-gray text-left">
                <DialogHeader>
                    <DialogTitle className="text-left">Edit {header}</DialogTitle>
                </DialogHeader>
                <div className="gap-4 flex flex-col">
                    <Label htmlFor={label} className="text-left">
                        {label}
                    </Label>
                    <Input id={label} name={name} value={value} onChange={handleChange} className="col-span-3" />
                </div>
                <DialogFooter>
                    <Button type="submit" disabled={isLoading} onClick={handleOnClick}>Update Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
