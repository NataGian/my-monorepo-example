import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components/ui/card"
import {Avatar, AvatarFallback} from "@workspace/ui/components/ui/avatar"

export const CanceledAppointmentsTab = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Ακυρωμένα Ραντεβού</CardTitle>
                <CardDescription>Ραντεβού που έχουν ακυρωθεί</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 pb-4 border-b">
                        <Avatar>
                            <AvatarFallback>ΓΠ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <p className="font-medium">Γιώργος Παπαδόπουλος</p>
                            </div>
                            <p className="text-sm text-gray-500">Εξέταση αίματος</p>
                            <p className="text-xs text-gray-400 mt-1">14/05/2024</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pb-4 border-b">
                        <Avatar>
                            <AvatarFallback>ΑΔ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <p className="font-medium">Αντώνης Δημητρίου</p>
                            </div>
                            <p className="text-sm text-gray-500">Καρδιολογική εξέταση</p>
                            <p className="text-xs text-gray-400 mt-1">20/01/2025</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}