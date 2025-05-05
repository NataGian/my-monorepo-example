import {SidebarItem} from "@workspace/ui/lib/types";
import {BookOpen, ClipboardPaste} from "lucide-react";

const APP_ROUTES = {
    DASHBOARD: {
        BASE_PAGE: '/dashboard',
    },
    APPOINTMENTS: {
        BASE_PAGE: '/appointments',
    },
};

export const sidebarItems: SidebarItem[] = [
    {
        title: "Πίνακας Ελέγχου",
        href: APP_ROUTES.DASHBOARD.BASE_PAGE,
        icon: ClipboardPaste,
    },
    {
        title: "Ραντεβού",
        href: APP_ROUTES.APPOINTMENTS.BASE_PAGE,
        icon: BookOpen,
    },
];