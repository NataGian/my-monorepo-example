import * as React from "react";

interface DashboardPageProps {
    tabs?: React.ReactNode;
}

export const DashboardPage = ({

                                  tabs = []
                              }: DashboardPageProps) => {
    return (
        <div className="pl-0 pr-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Πίνακας Ελέγχου</h1>
                    <p className="text-gray-500">Καλώς ήρθατε στον πίνακα ελέγχου σας</p>
                </div>
            </div>
            {tabs}
        </div>
    );
}