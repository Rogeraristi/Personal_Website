"use client";

import Image from "next/image";
import GlassSurface from "@/components/ui/GlassSurface";
import GradualBlur from "@/components/ui/GradualBlur";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
            {/* Gradual Blur effect at bottom of hero */}
            <GradualBlur
                position="bottom"
                strength={2}
                height="8rem"
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={0.8}
                target="parent"
            />

            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                {/* Profile Image with Glass Surface */}
                <div className="w-48 h-48 mx-auto mb-8 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-md opacity-60 group-hover:opacity-90 transition duration-700"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neutral-800/50">
                        <Image
                            src="/profile.jpg"
                            alt="Roger Aristizabal"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                {/* Name in GlassSurface container */}
                <GlassSurface
                    width="100%"
                    height="auto"
                    borderRadius={16}
                    blur={0}
                    opacity={0.3}
                    backgroundOpacity={0.08}
                    className="mb-4 py-4 px-6 mx-auto max-w-fit"
                >
                    <h1 className="text-5xl md:text-7xl font-bold">
                        <span className="gradient-text">Roger Aristizabal</span>
                    </h1>
                </GlassSurface>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-neutral-400 mb-4">
                    Data Analyst & Risk Modeling Professional
                </p>

                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 text-sm font-medium">Open to new opportunities</span>
                </div>

                {/* Brief intro in GlassSurface */}
                <GlassSurface
                    width="100%"
                    height="auto"
                    borderRadius={12}
                    blur={0}
                    opacity={0.25}
                    backgroundOpacity={0.06}
                    className="mb-12 py-6 px-6 mx-auto max-w-2xl"
                >
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        Mathematics graduate specializing in data analytics, financial modeling, and business intelligence.
                        Experienced in building data-driven solutions for enterprise clients including PwC and The Juilliard School.
                    </p>
                </GlassSurface>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#contact"
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 
                       text-white font-medium hover:from-primary-500 hover:to-accent-500 
                       transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="#experience"
                        className="px-8 py-3.5 rounded-xl border border-neutral-600 bg-neutral-900/80 text-neutral-200 
                       font-medium hover:border-primary-500/60 hover:bg-neutral-800/90 hover:text-primary-300 
                       transition-all duration-300"
                    >
                        View Experience
                    </a>
                    <a
                        href="/Resume_Aristizabal.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 rounded-xl border border-neutral-600 bg-neutral-900/80 text-neutral-200 
                       font-medium hover:border-accent-500/60 hover:bg-neutral-800/90 hover:text-accent-300 
                       transition-all duration-300 flex items-center gap-2 justify-center"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Resume
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                    <svg
                        className="w-6 h-6 text-neutral-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
