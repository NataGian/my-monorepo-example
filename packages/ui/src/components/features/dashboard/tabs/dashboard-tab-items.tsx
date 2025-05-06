import {TabItem} from "@workspace/ui/lib";
import {AnalyticsTab, OverviewTab, ReportsTab} from "@workspace/ui/components/features/dashboard/tabs";

export const dashboardTabItems: TabItem[] = [
    {
        id: "overview-tab",
        label: "Επισκόπηση",
        content: <OverviewTab/>
    },
    {
        id: "analytics-tab",
        label: "Αναλυτικά",
        content: <AnalyticsTab/>
    },
    {
        id: "reports-tab",
        label: "Αναφορές",
        content: <ReportsTab/>
    }
];