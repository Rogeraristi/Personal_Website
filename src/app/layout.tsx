import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Roger Aristizabal | Data Analyst & Risk Modeling Professional",
    description: "Personal portfolio of Roger Aristizabal - Mathematics graduate specializing in data analytics, financial modeling, and business intelligence based in New York City.",
    keywords: ["Roger Aristizabal", "Data Analyst", "Risk Modeling", "Financial Modeling", "SQL", "Python", "Tableau", "Power BI", "New York"],
    authors: [{ name: "Roger Aristizabal" }],
    openGraph: {
        title: "Roger Aristizabal | Data Analyst & Risk Modeling Professional",
        description: "Personal portfolio of Roger Aristizabal - Mathematics graduate specializing in data analytics and financial modeling.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {/* Background gradient orbs */}
                <div className="bg-gradient-orb orb-1" />
                <div className="bg-gradient-orb orb-2" />
                <div className="bg-gradient-orb orb-3" />

                {children}
            </body>
        </html>
    );
}
