import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components";

export const PastAppointmentsTab = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Περασμένα Ραντεβού</CardTitle>
                <CardDescription>Ιστορικό προηγούμενων ραντεβού</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center">
                <p className="text-gray-500">Το ιστορικό ραντεβού θα εμφανίζεται εδώ</p>
            </CardContent>
        </Card>
    )
}