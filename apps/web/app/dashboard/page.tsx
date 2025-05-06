import {AppTabs, DashboardPage, tabItems} from "@workspace/ui/components";

export default function Page() {
    return (
        <DashboardPage tabs={
            <AppTabs tabItems={tabItems}/>
        }/>
    )
}