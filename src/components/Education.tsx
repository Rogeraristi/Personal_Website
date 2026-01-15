interface EducationItem {
    degree: string;
    institution: string;
    location: string;
    period: string;
    details?: string[];
}

const education: EducationItem[] = [
    {
        degree: "Bachelor of Science in Mathematics",
        institution: "Hofstra University",
        location: "Hempstead, NY",
        period: "Sep. 2020 - May 2024",
        details: [
            "Actuarial Science Track",
            "Department of Mathematics",
            "New Opportunities At Hofstra [NOAH] Scholar",
            "Joseph G. Shapiro Music Scholarship",
        ],
    },
];

// Leadership section moved to separate component

export default function Education() {
    return (
        <section id="education" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="gradient-text">Education</span>
                </h2>

                {/* Education */}
                <div className="mb-12">
                    {education.map((edu, index) => (
                        <div key={index} className="glass-card p-6 hover-glow">
                            <div className="flex flex-col md:flex-row md:items-start gap-4">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-7 h-7 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l9-5-9-5-9 5 9 5z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        />
                                    </svg>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-primary-400 font-medium">{edu.institution}</p>
                                            <p className="text-gray-500 text-sm">{edu.location}</p>
                                        </div>
                                        <span className="text-gray-400 text-sm mt-2 md:mt-0">
                                            {edu.period}
                                        </span>
                                    </div>
                                    {edu.details && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {edu.details.map((detail, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 rounded-full text-sm
                                     bg-gradient-to-r from-primary-500/20 to-accent-500/20
                                     border border-primary-500/30 text-gray-300"
                                                >
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

