import {LucideIcon} from "lucide-react";
import * as React from "react";

export type SidebarItem = {
    title: string;
    icon: LucideIcon;
    href: string;
}

export type TabItem = {
    id: string;
    label: string;
    content: React.ReactNode;
}