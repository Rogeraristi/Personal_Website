"use client";

import dynamic from "next/dynamic";

const Iridescence = dynamic(() => import("@/components/ui/Iridescence"), {
    ssr: false,
    loading: () => (
        <div 
            className="w-full h-full"
            style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(17, 113, 232, 0.3) 100%)'
            }}
        />
    )
});

export default function IridescenceBackground() {
    return (
        <div className="fixed inset-0 z-[-2] opacity-30">
            <Iridescence
                color={[1, 0.5, 1]} // magenta/pink with cyan accents as per your request
                speed={0.8}
                amplitude={0.15}
                mouseReact={true}
            />
        </div>
    );
}
