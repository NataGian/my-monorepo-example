import {Button} from "@workspace/ui/components/ui/button";
import * as React from "react";
import {Plus} from "lucide-react";
import {appointmentsTabItems, AppTabs} from "@workspace/ui/components";
import {TabItem} from "@workspace/ui/lib";

interface AppointmentsPageProps {
    tabItems?: TabItem[];
}

export const AppointmentsPage = ({
                                     tabItems
                                 }: AppointmentsPageProps) => {
    return (
        <div className="pl-0 pr-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Ραντεβού</h1>
                    <p className="text-gray-500">Διαχείριση των ραντεβού σας</p>
                </div>
                <Button><Plus></Plus> Νέο Ραντεβού</Button>
            </div>
            <AppTabs tabItems={tabItems ?? appointmentsTabItems}/>
        </div>
    );
}