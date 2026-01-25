import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                {/* Profile Image */}
                <div className="w-48 h-48 mx-auto mb-8 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 via-accent-500 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800">
                        <Image
                            src="/profile.jpg"
                            alt="Roger Aristizabal"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    <span className="gradient-text">Roger Aristizabal</span>
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 mb-8">
                    Data Analyst & Risk Modeling Professional
                </p>

                {/* Brief intro */}
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
                    Mathematics graduate specializing in data analytics, financial modeling, and business intelligence.
                    Experienced in building data-driven solutions for enterprise clients including PwC and The Juilliard School.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 
                       text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="#experience"
                        className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 
                       font-semibold hover:border-primary-500 hover:text-primary-400 transition-all"
                    >
                        View Experience
                    </a>
                    <a
                        href="/Roger_Aristizabal_Resume.pdf"
                        download
                        className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 
                       font-semibold hover:border-accent-500 hover:text-accent-400 transition-all
                       flex items-center gap-2 justify-center"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Resume
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-gray-500"
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
