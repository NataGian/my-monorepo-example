import {SidebarItem} from "@workspace/ui/lib/types";

export const useCurrentSidebarItem = (sidebarItems: SidebarItem[], pathname: string) => {
    return sidebarItems.find(item => pathname.startsWith(item.href))?.title;
}