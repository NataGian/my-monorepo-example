'use client'

import {Breadcrumb, SidebarTrigger} from "@workspace/ui/components";

interface AppLayoutTopProps {
    title?: string;
}

export const AppLayoutTop = ({title}: AppLayoutTopProps) => {
    return (
        <div className="flex items-center gap-2 px-4 py-2">
            <SidebarTrigger/>
            <div className="pl-2 border-l">
                {title && <Breadcrumb>
                    {title}
                </Breadcrumb>}
            </div>
        </div>
    )
}
