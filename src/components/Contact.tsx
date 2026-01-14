import React from "react";

interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
    {
        name: "Email",
        url: "mailto:rogeraristi2@gmail.com",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/roger-aristizabal/",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "Phone",
        url: "tel:+16468996656",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Get In <span className="gradient-text">Touch</span>
                </h2>

                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    I&apos;m currently open to new opportunities in data analytics, risk modeling,
                    and financial technology. Whether you have a question or just want to say hi,
                    feel free to reach out!
                </p>

                {/* Location badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300">New York, NY</span>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-12">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target={social.name === "Phone" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="p-4 rounded-full glass-card hover-glow text-gray-400 
                         hover:text-primary-400 transition-colors"
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Direct email button */}
                <a
                    href="mailto:rogeraristi2@gmail.com"
                    className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 
                     text-white font-semibold hover:opacity-90 transition-opacity"
                >
                    Say Hello 👋
                </a>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-gray-800">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Roger Aristizabal. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </section>
    );
}
