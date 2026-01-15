interface LeadershipItem {
    role: string;
    organization: string;
    period: string;
    description: string;
}

const leadership: LeadershipItem[] = [
    {
        role: "Alumni Chair",
        organization: "Bottom Line National Alumni Advisory Committee",
        period: "Oct. 2023 - May 2025",
        description:
            "Advised on organizational initiatives, student engagement policies, and strategic growth, ensuring student and alumni perspectives shape key programmatic decisions",
    },
    {
        role: "Judge",
        organization: "The Actuarial Foundation - Modeling the Future Challenge",
        period: "Nov. 2023 - May 2024",
        description:
            "Evaluated project proposals based on a ski resort scenario, assessing risk factors, financial modeling, and decision-making across three ski resorts over 20 years with varying snowfall conditions",
    },
];

export default function Leadership() {
    return (
        <section id="leadership" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Leadership <span className="gradient-text">Experience</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {leadership.map((item, index) => (
                        <div key={index} className="glass-card p-6 hover-glow">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-white">{item.role}</h4>
                                    <p className="text-primary-400 text-sm">{item.organization}</p>
                                    <p className="text-gray-500 text-sm mb-2">{item.period}</p>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
