"use client";

import { useEffect, useState } from "react";

const unlockSequence = ["m", "u", "s", "i", "c"];

export default function EasterEggNav() {
    const [unlocked, setUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            const expected = unlockSequence[progress];

            if (key === expected) {
                const next = progress + 1;
                if (next === unlockSequence.length) {
                    setUnlocked(true);
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
    }, [progress]);

    const showNav = unlocked;

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none">
            <button
                type="button"
                onClick={() => setUnlocked(true)}
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

            {showNav && (
                <a
                    href="#music"
                    className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/70 via-accent-500/70 to-orange-500/70 text-white text-sm shadow-lg shadow-primary-500/20 border border-white/15 hover:translate-y-[-1px] transition-transform"
                >
                    <span className="font-semibold">Music</span>
                    <span className="text-xs text-white/80">secret nav</span>
                </a>
            )}
        </div>
    );
}
