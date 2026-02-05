import type { Metadata } from "next";
import "./globals.css";
import EasterEggNav from "@/components/EasterEggNav";
import Navigation from "@/components/Navigation";
import IridescenceBackground from "@/components/IridescenceBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
            <body suppressHydrationWarning>
                {/* Iridescence animated background */}
                <IridescenceBackground />

                {/* Background gradient orbs - now overlaid on iridescence */}
                <div className="bg-gradient-orb orb-1" />
                <div className="bg-gradient-orb orb-2" />
                <div className="bg-gradient-orb orb-3" />

                <Navigation />
                <EasterEggNav />

                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
