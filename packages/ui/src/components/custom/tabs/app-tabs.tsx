import {appointmentsTabItems, Tabs, TabsTrigger} from "@workspace/ui/components";
import * as React from "react";
import {TabItem} from "@workspace/ui/lib";
import {TabsContent, TabsList} from "@radix-ui/react-tabs";

interface AppTabsProps {
    tabItems?: TabItem[];
    defaultValue?: string;
}

export const AppTabs = ({
                            tabItems = [],
                            defaultValue
                        }: AppTabsProps) => {
    if (tabItems.length === 0) {
        tabItems = appointmentsTabItems;
    }

    const activeTab = defaultValue || tabItems[0]?.id;
    return (
        <Tabs defaultValue={activeTab} className="w-full">
            <TabsList className="mb-4">
                {tabItems.map((tab) => (
                    <TabsTrigger key={tab.id} value={tab.id}>
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabItems.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="space-y-4">
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    )
}