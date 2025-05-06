'use client'

import {usePathname} from "next/navigation";
import {AppLayout, AppLayoutTop, AppSidebar, SidebarProvider} from "@workspace/ui/components";
import {Providers} from "@/components/providers"
import {useCurrentSidebarItem} from "@workspace/ui/hooks/navigation";
import * as React from "react"

export const ClientLayout = ({
                                 children,
                             }: Readonly<{
    children: React.ReactNode
}>) => {
    const pathname = usePathname();
    return (
        <Providers>
            <SidebarProvider>
                <AppSidebar pathname={pathname}/>
                <main className="flex-1 flex flex-col">
                    <AppLayoutTop title={useCurrentSidebarItem(pathname)}/>
                    <AppLayout>
                        {children}
                    </AppLayout>
                </main>
            </SidebarProvider>
        </Providers>
    )
}