import {Geist, Geist_Mono} from "next/font/google"
import * as React from "react"
import "@workspace/ui/globals.css"
import {ClientLayout} from "@/components/client-layout";
import {Metadata} from "next";

const fontSans = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
})

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export const metadata: Metadata = {
    title: "Monorepo",
    description: "Monorepo example",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
        >
        <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    )
}
