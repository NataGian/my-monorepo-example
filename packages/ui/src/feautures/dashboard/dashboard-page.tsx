import {Tabs, TabsList, TabsTrigger} from "@workspace/ui/components/tabs";
import {OverviewTab} from "@workspace/ui/feautures/dashboard/tabs/overview-tab";

export const DashboardPage = () => {
    return (
        <div className="pl-0 pr-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Πίνακας Ελέγχου</h1>
                    <p className="text-gray-500">Καλώς ήρθατε στον πίνακα ελέγχου σας</p>
                </div>
            </div>
            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="overview">Επισκόπηση</TabsTrigger>
                </TabsList>
                <OverviewTab/>
            </Tabs>
        </div>
    );
}