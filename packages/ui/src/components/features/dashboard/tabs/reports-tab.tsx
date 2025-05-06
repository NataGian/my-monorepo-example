import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components";

export const ReportsTab = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Αναφορές</CardTitle>
                <CardDescription>Πρόσβαση σε όλες τις αναφορές και εξαγωγές σας</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center">
                <p className="text-gray-500">Το περιεχόμενο των αναφορών θα εμφανίζεται εδώ</p>
            </CardContent>
        </Card>

    )
}