export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                {/* Profile Image Placeholder */}
                <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-orange-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        <span className="text-5xl">RA</span>
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
