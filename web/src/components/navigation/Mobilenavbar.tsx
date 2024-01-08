import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu as MenuIcon } from "lucide-react";
import {signal} from '@preact/signals-react';
import Menu from "./Menu";
const handleSheet = signal(false);
export default function Mobilenavbar() {
    return (
        <Sheet
            open={handleSheet.value}
            onOpenChange={()=>handleSheet.value=!handleSheet.value}
        >
            <SheetTrigger
                className="md:hidden"
            >
                <MenuIcon />
            </SheetTrigger>
            <SheetContent
                side={'left'}
                className="dark:bg-dark-gray p-0 flex flex-col"
            >
                <SheetHeader>
                    <SheetTitle
                        className="text-left text-[28px] p-4"
                    >

                        Menu
                    </SheetTitle>
                </SheetHeader>
                <Menu 
                    handleSheet={handleSheet}
                />
            </SheetContent>
        </Sheet>

    )
}
