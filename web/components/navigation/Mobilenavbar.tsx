"use client";
import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu as MenuIcon } from "lucide-react";
import Menu from "./Menu";
export default function Mobilenavbar() {
    const [handleSheet, setHandleSheet] = useState(false);
    return (
        <Sheet
            open={handleSheet}
            onOpenChange={()=>setHandleSheet(prev=>!prev)}
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
                    setHandleSheet={setHandleSheet}
                />
            </SheetContent>
        </Sheet>

    )
}
