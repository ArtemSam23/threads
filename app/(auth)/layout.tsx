import '../globals.css'

import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
    title: 'Threads',
    description: 'A Next.js Meta Threads Application'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayot({ 
    children 
}: { 
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html>
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
