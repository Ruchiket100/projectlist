import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Projectlist",
    description: "share projects"
};



export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html>
            <head>
                <link rel="icon" href="/projectlist-p.png" type="image/x-icon" />
            </head>
            <body className={inter.className}>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}