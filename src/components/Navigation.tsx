"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navigation() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);

            // Determine active section
            const sections = navItems.map((item) => item.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Hide navigation on music page (must be after all hooks)
    if (pathname === "/music") {
        return null;
    }

    return (
        <>
            {/* Full Navigation - visible when not scrolled */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "opacity-0 pointer-events-none -translate-y-full"
                        : "opacity-100 pointer-events-auto translate-y-0"
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                    {/* Logo/Name */}
                    <Link
                        href="/"
                        className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
                    >
                        RA
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    activeSection === item.href.slice(1)
                                        ? "text-primary-400 bg-primary-500/10"
                                        : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/40"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="/Resume_Aristizabal.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-medium hover:from-primary-500 hover:to-accent-500 transition-all duration-300 shadow-lg shadow-primary-500/20"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Resume
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-neutral-400 hover:text-neutral-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-neutral-950/90 backdrop-blur-xl border-t border-neutral-800/30 mt-2">
                        <div className="px-6 py-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                        activeSection === item.href.slice(1)
                                            ? "text-primary-400 bg-primary-500/10"
                                            : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/40"
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="/Resume_Aristizabal.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-3 mt-4 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                View Resume
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Collapsed Floating Pill - visible when scrolled */}
            <div
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
                    scrolled
                        ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
                        : "opacity-0 pointer-events-none -translate-y-4 scale-95"
                }`}
            >
                <div className="flex items-center gap-2 px-2 py-2 rounded-full bg-neutral-950/80 backdrop-blur-xl border border-neutral-800/50 shadow-2xl shadow-black/30">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="px-3 py-1.5 text-base font-bold gradient-text hover:opacity-80 transition-opacity"
                    >
                        RA
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-6 bg-neutral-700/50" />

                    {/* Collapsed Nav Links */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {navItems.slice(0, 4).map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                    activeSection === item.href.slice(1)
                                        ? "text-primary-400 bg-primary-500/15"
                                        : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-6 bg-neutral-700/50" />

                    {/* Resume Button */}
                    <a
                        href="/Resume_Aristizabal.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-medium hover:from-primary-500 hover:to-accent-500 transition-all duration-300"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="hidden sm:inline">Resume</span>
                    </a>
                </div>
            </div>
        </>
    );
}
