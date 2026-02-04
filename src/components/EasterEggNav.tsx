"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const unlockSequence = ["m", "u", "s", "i", "c"];
const audioSrc = "/audio/ps3-orchestra.mp3"; // place PS3-style startup/tuning audio in public/audio/

export default function EasterEggNav() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize audio only on client side after mount
    useEffect(() => {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.volume = 0.35;
    }, []);

    const handleNavigateToMusic = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {});
        }
        sessionStorage.setItem("musicUnlocked", "1");
        router.push("/music");
    }, [router]);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            const expected = unlockSequence[progress];

            if (key === expected) {
                const next = progress + 1;
                if (next === unlockSequence.length) {
                    handleNavigateToMusic();
                    setProgress(0);
                } else {
                    setProgress(next);
                }
            } else if (key === unlockSequence[0]) {
                setProgress(1);
            } else {
                setProgress(0);
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [progress, handleNavigateToMusic]);

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none">
            <button
                type="button"
                onClick={handleNavigateToMusic}
                className="pointer-events-auto h-8 w-8 rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors"
                aria-label="Reveal hidden music navigation"
            >
                <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-4 w-4 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18V7l8-2v11" />
                    <circle cx="7" cy="18" r="2" />
                    <circle cx="17" cy="16" r="2" />
                </svg>
            </button>
        </div>
    );
}
