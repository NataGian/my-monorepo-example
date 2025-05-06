import {TabItem} from "@workspace/ui/lib";
import {CanceledAppointmentsTab} from "@workspace/ui/components/features/appointments/tabs/canceled-appointments-tab";
import {PastAppointmentsTab} from "@workspace/ui/components/features/appointments/tabs/past-appointments-tab";
import {UpcomingAppointmentsTab} from "@workspace/ui/components/features/appointments/tabs/upcoming-appointments-tab";

export const appointmentsTabItems: TabItem[] = [
    {
        id: "upcoming-tab",
        label: "Επερχόμενα",
        content: <UpcomingAppointmentsTab/>
    },
    {
        id: "canceled-tab",
        label: "Ακυρωμένα",
        content: <CanceledAppointmentsTab/>
    },
    {
        id: "past-tab",
        label: "Περασμένα",
        content: <PastAppointmentsTab/>
    }
];