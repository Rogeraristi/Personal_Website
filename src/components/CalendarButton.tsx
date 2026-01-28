"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
    interface Window {
        calendar?: {
            schedulingButton: {
                load: (config: {
                    url: string;
                    color: string;
                    label: string;
                    target: HTMLElement;
                }) => void;
            };
        };
    }
}

export default function CalendarButton() {
    const buttonRef = useRef<HTMLDivElement>(null);
    const initialized = useRef(false);

    useEffect(() => {
        const initButton = () => {
            if (buttonRef.current && window.calendar && !initialized.current) {
                initialized.current = true;
                window.calendar.schedulingButton.load({
                    url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3BXvR0DJp9Qr00YMpIP2K-_4nNRitpv__dhJ2oTwOYaRGw-IQuU-PkensEGtmaekY2dkg9EpSl?gv=true",
                    color: "#9E69AF",
                    label: "Book an appointment",
                    target: buttonRef.current,
                });
            }
        };

        // Try to init immediately if script already loaded
        initButton();

        // Also listen for custom event when script loads
        window.addEventListener("calendarScriptLoaded", initButton);
        return () => window.removeEventListener("calendarScriptLoaded", initButton);
    }, []);

    return (
        <>
            <Script
                src="https://calendar.google.com/calendar/scheduling-button-script.js"
                strategy="afterInteractive"
                onLoad={() => {
                    window.dispatchEvent(new Event("calendarScriptLoaded"));
                }}
            />
            <link
                href="https://calendar.google.com/calendar/scheduling-button-script.css"
                rel="stylesheet"
            />
            <div ref={buttonRef} className="inline-block" />
        </>
    );
}
