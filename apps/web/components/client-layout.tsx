'use client'

import {usePathname} from "next/navigation";
import {AppLayoutTop, AppSidebar, SidebarProvider} from "@workspace/ui/components";
import {Providers} from "@/components/providers"
import {sidebarItems} from "@/lib/constants";
import {useCurrentSidebarItem} from "@workspace/ui/hooks/navigation";

export const ClientLayout = ({
                                 children,
                             }: Readonly<{
    children: React.ReactNode
}>) => {
    const pathname = usePathname();
    return (
        <Providers>
            <SidebarProvider>
                <AppSidebar pathname={pathname} sidebarItems={sidebarItems}/>
                <main className="flex-1 flex flex-col">
                    <AppLayoutTop title={useCurrentSidebarItem(sidebarItems, pathname)}/>
                    {children}
                </main>
            </SidebarProvider>
        </Providers>
    )
}