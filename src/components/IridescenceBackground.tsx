"use client";

import dynamic from "next/dynamic";

const Iridescence = dynamic(() => import("@/components/ui/Iridescence"), {
    ssr: false,
    loading: () => (
        <div 
            className="w-full h-full"
            style={{
                background: 'linear-gradient(135deg, rgba(25, 25, 153, 0.3) 0%, rgba(17, 113, 232, 0.3) 100%)'
            }}
        />
    )
});

export default function IridescenceBackground() {
    return (
        <div className="fixed inset-0 z-[-2] opacity-30">
            <Iridescence
                color={[0.1, 0.1, 0.6]}
                speed={1.0}
                amplitude={0.1}
                mouseReact={false}
            />
        </div>
    );
}
