"use client";

import { useEffect, useMemo, useState } from "react";
import GlassSurface from "./ui/GlassSurface";

const audioSrc = "/audio/ps3-orchestra.mp3";

interface Instrument {
    name: string;
    voice: string;
    genres: string[];
    repertoire: string[];
    vibe: string;
    funFact: string;
}

const instruments: Instrument[] = [
    {
        name: "French Horn",
        voice: "Warm, cinematic brass",
        genres: ["Classical", "Film scoring", "Chamber"],
        repertoire: [
            "Mahler & Holst symphonic horn lines",
            "Romantic solo études",
            "Modern brass quintet arrangements",
        ],
        vibe: "Layered harmonies, lyrical solos, supporting swells",
        funFact: "Earned the Joseph G. Shapiro Music Scholarship while studying math.",
    },
    {
        name: "Guitar",
        voice: "Crunch + shimmer",
        genres: ["Rock / Metal", "Latin Jazz", "Acoustic"],
        repertoire: [
            "Riffs inspired by Alter Bridge & Periphery",
            "Bossa nova chord-melody sketches",
            "Ambient delay-driven interludes",
        ],
        vibe: "Tight rhythm work with melodic hooks and odd-meter grooves",
        funFact: "Builds backing tracks to practice polyrhythms and modal solos.",
    },
    {
        name: "Trumpet",
        voice: "Bright lead + brass choir",
        genres: ["Latin Jazz", "Orchestral", "Funk"],
        repertoire: [
            "Lead lines in salsa & mambo charts",
            "Orchestral fanfares and chorales",
            "Call-and-response horn stacks",
        ],
        vibe: "Cuts through mixes with crisp articulations and lyrical phrasing",
        funFact: "Loves layering trumpet + horn for wide stereo brass moments.",
    },
];

const unlockSequence = ["m", "u", "s", "i", "c"];

export default function Music() {
    const [secretUnlocked, setSecretUnlocked] = useState(false);
    const [progress, setProgress] = useState(0);
    const [audio] = useState(() => {
        if (typeof window === "undefined") return null;
        const el = new Audio(audioSrc);
        el.volume = 0.35;
        return el;
    });

    const handleEncoreClick = () => {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
        }
        setSecretUnlocked(true);
    };

    // Easter egg: typing M-U-S-I-C unlocks the encore panel. A click on the note badge does the same.
    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            const expected = unlockSequence[progress];
            if (key === expected) {
                const next = progress + 1;
                if (next === unlockSequence.length) {
                    setSecretUnlocked(true);
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

    const genrePalette = useMemo(
        () => [
            { label: "Classical", color: "from-primary-500/20 to-blue-500/20" },
            { label: "Rock / Metal", color: "from-orange-500/25 to-red-500/25" },
            { label: "Latin Jazz", color: "from-accent-500/20 to-emerald-500/25" },
        ],
        []
    );

    return (
        <section id="music" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-primary-400">Soundtrack to the journey</p>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Music <span className="gradient-text">Focus</span>
                        </h2>
                        <p className="text-gray-400 mt-3 max-w-2xl">
                            Horn, guitar, and trumpet across classical, rock/metal, and Latin jazz. Writing arrangements, layering
                            brass, and building backing tracks keeps me as curious as my analytics work.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleEncoreClick}
                        className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/40 bg-primary-500/10 text-primary-200 text-sm hover:border-accent-400 hover:text-accent-200 transition-colors"
                        aria-label="Unlock hidden encore"
                    >
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 text-white">
                            <svg
                                aria-hidden
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
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
                        </span>
                        <span>Tap note for an encore</span>
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {genrePalette.map((genre) => (
                        <span
                            key={genre.label}
                            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${genre.color} border border-white/10 text-gray-200`}
                        >
                            {genre.label}
                        </span>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {instruments.map((instrument) => (
                        <GlassSurface key={instrument.name} className="p-6 hover-glow" borderRadius={16}>
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{instrument.voice}</p>
                                    <h3 className="text-xl font-semibold text-white mt-1">{instrument.name}</h3>
                                </div>
                                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center text-white">
                                    <svg
                                        aria-hidden
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
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
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {instrument.genres.map((genre) => (
                                    <span key={genre} className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-200">
                                        {genre}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-300 text-sm mb-3">{instrument.vibe}</p>
                            <ul className="text-gray-400 text-sm space-y-2 mb-3">
                                {instrument.repertoire.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-accent-400 mt-0.5">*</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-primary-300">{instrument.funFact}</p>
                        </GlassSurface>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                    <GlassSurface className="p-6 hover-glow h-full" borderRadius={16}>
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-white">Practice log, in three lanes</h4>
                            <span className="text-xs px-3 py-1 rounded-full bg-accent-500/15 text-accent-200 border border-accent-500/30">Daily reps</span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                            <div>
                                <p className="text-white font-medium mb-1">Classical brass</p>
                                <p>Long tones, lip slurs, orchestral excerpts for horn & trumpet.</p>
                            </div>
                            <div>
                                <p className="text-white font-medium mb-1">Rock / metal guitar</p>
                                <p>Riff writing in drop tunings, palm-muted chugs, timing drills with a click.</p>
                            </div>
                            <div>
                                <p className="text-white font-medium mb-1">Latin jazz</p>
                                <p>Clave-focused phrasing, montuno comping, call-and-response horn lines.</p>
                            </div>
                        </div>
                    </GlassSurface>

                    <GlassSurface className="p-6 hover-glow h-full" borderRadius={16}>
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Listening rotation</p>
                                <h4 className="text-lg font-semibold text-white">Current inspirations</h4>
                            </div>
                            <svg
                                aria-hidden
                                className="h-6 w-6 text-green-400"
                                viewBox="0 0 168 168"
                                fill="currentColor"
                            >
                                <path d="M84 0C37.8 0 0 37.8 0 84s37.8 84 84 84 84-37.8 84-84S130.2 0 84 0zm38.5 121.1c-1.5 2.5-4.7 3.3-7.2 1.7-19.8-12.1-44.6-14.8-73.8-8.1-2.8.6-5.6-1.1-6.2-3.9-.6-2.8 1.1-5.6 3.9-6.2 32-7.3 59.4-4.2 81.6 9.3 2.5 1.5 3.2 4.7 1.7 7.2zm10.3-22.9c-1.9 3.1-5.9 4-9 2.1-22.7-13.9-57.3-18-84.1-9.8-3.4 1-7-0.9-8-4.3-1-3.4.9-7 4.3-8 30.6-9.3 68.6-4.8 94.7 11.2 3 1.8 4 5.9 2.1 8.8zm.9-23.8c-27.2-16.2-72.1-17.7-98.1-9.8-4.2 1.3-8.6-1.1-9.8-5.2-1.3-4.2 1.1-8.6 5.2-9.8 29.8-9.1 79.5-7.3 110.8 11.3 3.8 2.2 5 7.1 2.8 10.8-2.2 3.8-7.1 5-10.9 2.7z"/>
                            </svg>
                        </div>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li>Mahler & John Williams brass writing for tone and ensemble blend.</li>
                            <li>Dream Theater, Periphery, and Haken for rhythmic guitar ideas.</li>
                            <li>Arturo Sandoval, Snarky Puppy horn sections for punchy Latin jazz phrasing.</li>
                        </ul>
                        <a
                            href="https://open.spotify.com/user/rogeraristi2?si=3e0563e35e6f48d3"
                            className="inline-flex items-center gap-2 mt-4 px-3 py-2 rounded-full bg-green-500/20 text-green-300 text-sm hover:bg-green-500/30 hover:text-green-200 border border-green-500/30 transition-colors"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 168 168"
                            >
                                <path d="M84 0C37.8 0 0 37.8 0 84s37.8 84 84 84 84-37.8 84-84S130.2 0 84 0zm38.5 121.1c-1.5 2.5-4.7 3.3-7.2 1.7-19.8-12.1-44.6-14.8-73.8-8.1-2.8.6-5.6-1.1-6.2-3.9-.6-2.8 1.1-5.6 3.9-6.2 32-7.3 59.4-4.2 81.6 9.3 2.5 1.5 3.2 4.7 1.7 7.2zm10.3-22.9c-1.9 3.1-5.9 4-9 2.1-22.7-13.9-57.3-18-84.1-9.8-3.4 1-7-0.9-8-4.3-1-3.4.9-7 4.3-8 30.6-9.3 68.6-4.8 94.7 11.2 3 1.8 4 5.9 2.1 8.8zm.9-23.8c-27.2-16.2-72.1-17.7-98.1-9.8-4.2 1.3-8.6-1.1-9.8-5.2-1.3-4.2 1.1-8.6 5.2-9.8 29.8-9.1 79.5-7.3 110.8 11.3 3.8 2.2 5 7.1 2.8 10.8-2.2 3.8-7.1 5-10.9 2.7z"/>
                            </svg>
                            Follow on Spotify
                        </a>
                    </GlassSurface>
                </div>

                <GlassSurface className="p-6 hover-glow mt-6 mb-10 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20" borderRadius={16}>
                    <div className="flex items-center gap-3 mb-4">
                        <svg
                            className="h-7 w-7 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 168 168"
                        >
                            <path d="M84 0C37.8 0 0 37.8 0 84s37.8 84 84 84 84-37.8 84-84S130.2 0 84 0zm38.5 121.1c-1.5 2.5-4.7 3.3-7.2 1.7-19.8-12.1-44.6-14.8-73.8-8.1-2.8.6-5.6-1.1-6.2-3.9-.6-2.8 1.1-5.6 3.9-6.2 32-7.3 59.4-4.2 81.6 9.3 2.5 1.5 3.2 4.7 1.7 7.2zm10.3-22.9c-1.9 3.1-5.9 4-9 2.1-22.7-13.9-57.3-18-84.1-9.8-3.4 1-7-0.9-8-4.3-1-3.4.9-7 4.3-8 30.6-9.3 68.6-4.8 94.7 11.2 3 1.8 4 5.9 2.1 8.8zm.9-23.8c-27.2-16.2-72.1-17.7-98.1-9.8-4.2 1.3-8.6-1.1-9.8-5.2-1.3-4.2 1.1-8.6 5.2-9.8 29.8-9.1 79.5-7.3 110.8 11.3 3.8 2.2 5 7.1 2.8 10.8-2.2 3.8-7.1 5-10.9 2.7z"/>
                        </svg>
                        <h3 className="text-xl font-semibold text-white">Now Playing</h3>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <iframe
                            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-sm text-gray-400">Curated playlists spanning classical, rock, and Latin jazz</p>
                        <a
                            href="https://open.spotify.com/user/rogeraristi2?si=3e0563e35e6f48d3"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm hover:bg-green-500/30 hover:text-green-200 border border-green-500/30 transition-colors"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>View Profile</span>
                            <span aria-hidden>↗</span>
                        </a>
                    </div>
                </GlassSurface>

                {secretUnlocked && (
                    <GlassSurface className="p-6 hover-glow mt-8 border border-accent-500/40" borderRadius={16}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-accent-200">Encore unlocked</p>
                                <h4 className="text-xl font-semibold text-white mt-1">Hidden setlist</h4>
                            </div>
                            <span className="px-3 py-1 text-xs rounded-full bg-accent-500/20 text-accent-100 border border-accent-500/40">
                                M-U-S-I-C
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm mt-3">
                            A rotating list of pieces I am shedding this month. Ask me about stems or collabs.
                        </p>
                        <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm text-gray-200">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <p className="font-medium text-white">Brass</p>
                                <p className="text-gray-300">Star Wars horn choir reharmonization; Holst Planets solo cleanup.</p>
                            </div>
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <p className="font-medium text-white">Guitar</p>
                                <p className="text-gray-300">Drop-C riff suite in 7/8 with clean chorus bridge.</p>
                            </div>
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <p className="font-medium text-white">Trumpet</p>
                                <p className="text-gray-300">Latin jazz lead lines over ii-V montunos; upper register tone work.</p>
                            </div>
                        </div>
                    </GlassSurface>
                )}
            </div>
        </section>
    );
}
