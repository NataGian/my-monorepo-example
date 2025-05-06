import {SidebarItem} from "../lib/types";
import {defaultSidebarItems} from "@workspace/ui/lib";

export const useCurrentSidebarItem = (pathname: string, sidebarItems?: SidebarItem[]) => {
    return (sidebarItems ?? defaultSidebarItems).find(item => pathname.startsWith(item.href))?.title;
}