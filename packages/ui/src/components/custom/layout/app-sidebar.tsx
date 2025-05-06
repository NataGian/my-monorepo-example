'use client'
import {clsx} from "clsx";
import {defaultSidebarItems, SidebarItem} from "@workspace/ui/lib";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@workspace/ui/components";

interface AppSidebarProps {
    pathname: string;
    sidebarItems?: SidebarItem[];
}

export const AppSidebar = ({pathname, sidebarItems}: AppSidebarProps) => {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="mt-2">
                        <SidebarMenu>
                            {(sidebarItems ?? defaultSidebarItems).map((item) => {
                                    const isActive = pathname.startsWith(item.href);
                                    return (
                                        <SidebarMenuItem key={item.title} className="mb-2">
                                            <SidebarMenuButton asChild>
                                                <a
                                                    href={item.href}
                                                    className={clsx(
                                                        "flex items-center gap-2 px-3 py-2 rounded-md",
                                                        {
                                                            "bg-muted text-primary font-medium": isActive,
                                                            "text-primary-foreground hover:bg-accent": !isActive,
                                                        }
                                                    )}
                                                >
                                                    <item.icon/>
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                }
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
