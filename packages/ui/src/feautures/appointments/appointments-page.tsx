import {Button} from "@workspace/ui/components/button";
import {Tabs, TabsList, TabsTrigger} from "@workspace/ui/components/tabs";
import {UpcomingAppointmentsTab} from "@workspace/ui/feautures/appointments/tabs/upcoming-appointments-tab";
import {PastAppointmentsTab} from "@workspace/ui/feautures/appointments/tabs/past-appointments-tab";
import {CanceledAppointmentsTab} from "@workspace/ui/feautures/appointments/tabs/canceled-appointments-tab";

export const AppointmentsPage = () => {
    return (
        <div className="pl-0 pr-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Ραντεβού</h1>
                    <p className="text-gray-500">Διαχείριση των ραντεβού σας</p>
                </div>
                <Button>+ Νέο Ραντεβού</Button>
            </div>
            <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="upcoming">Επερχόμενα</TabsTrigger>
                    <TabsTrigger value="past">Παρελθόντα</TabsTrigger>
                    <TabsTrigger value="canceled">Ακυρωμένα</TabsTrigger>
                </TabsList>
                <UpcomingAppointmentsTab/>
                <PastAppointmentsTab/>
                <CanceledAppointmentsTab/>
            </Tabs>
        </div>
    );
}