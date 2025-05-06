import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@workspace/ui/components/ui/card";

export const AnalyticsTab = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Πίνακας Αναλυτικών</CardTitle>
                <CardDescription>Προβολή αναλυτικών στοιχείων για τα έργα σας</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center">
                <p className="text-gray-500">Το περιεχόμενο των αναλυτικών θα εμφανίζεται εδώ</p>
            </CardContent>
        </Card>
    )
}