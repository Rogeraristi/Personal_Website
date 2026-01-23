import Link from "next/link";
import Music from "@/components/Music";
import MusicGate from "@/components/MusicGate";

export const metadata = {
    title: "Music | Roger Aristizabal",
    description: "French horn, guitar, trumpet focus — classical, rock/metal, and Latin jazz.",
};

export default function MusicPage() {
    return (
        <MusicGate>
            <main className="min-h-screen pt-16 pb-20">
                <div className="max-w-5xl mx-auto px-6 mb-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-primary-400">Creative lane</p>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 text-white">Music</h1>
                    <p className="text-gray-400 mt-3 max-w-3xl">
                        A standalone space for horn, guitar, and trumpet work across classical, rock/metal, and Latin jazz. This keeps
                        the creative side separate from professional analytics content.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-3 text-sm text-accent-200">
                        <Link
                            href="/"
                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-white/25 hover:text-white transition-colors"
                        >
                            Back to professional site
                        </Link>
                    </div>
                </div>

                <Music />
            </main>
        </MusicGate>
    );
}
