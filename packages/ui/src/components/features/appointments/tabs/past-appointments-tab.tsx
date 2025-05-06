import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../../ui/card";
import {TabsContent} from "../../../ui/tabs";

export const PastAppointmentsTab = () => {
    return (
        <TabsContent value="past">
            <Card>
                <CardHeader>
                    <CardTitle>Παρελθόντα Ραντεβού</CardTitle>
                    <CardDescription>Ιστορικό προηγούμενων ραντεβού</CardDescription>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center">
                    <p className="text-gray-500">Το ιστορικό ραντεβού θα εμφανίζεται εδώ</p>
                </CardContent>
            </Card>
        </TabsContent>
    )
}