import * as React from "react";
import {TabItem} from "@workspace/ui/lib";
import {AppTabs, dashboardTabItems} from "@workspace/ui/components";

interface DashboardPageProps {
    tabItems?: TabItem[];
}

export const DashboardPage = ({
                                  tabItems
                              }: DashboardPageProps) => {
    return (
        <div className="pl-0 pr-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Πίνακας Ελέγχου</h1>
                    <p className="text-gray-500">Καλώς ήρθατε στον πίνακα ελέγχου σας</p>
                </div>
            </div>
            <AppTabs tabItems={tabItems ?? dashboardTabItems}/>
        </div>
    );
}