"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MusicGate({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const unlocked = sessionStorage.getItem("musicUnlocked") === "1";
        if (unlocked) {
            setAllowed(true);
        } else {
            router.replace("/");
        }
    }, [router]);

    if (!allowed) return null;
    return <>{children}</>;
}
