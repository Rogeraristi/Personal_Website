interface Project {
    title: string;
    description: string;
    technologies: string[];
    highlight?: string;
}

const projects: Project[] = [
    {
        title: "Entity Verification Pipeline Tools",
        description:
            "Built and optimized JavaScript and SQL-driven internal tools at Middesk to resolve edge cases in automated entity-verification pipelines, improving data accuracy across multi-state databases.",
        technologies: ["JavaScript", "SQL", "REST APIs"],
        highlight: "Reduced manual review workload",
    },
    {
        title: "VBA Reinsurance Product Model",
        description:
            "Developed and maintained a VBA-based group reinsurance product model at PwC supporting financial projections for a $250M line of business.",
        technologies: ["Excel VBA", "Financial Modeling", "Risk Analysis"],
        highlight: "$250M line of business",
    },
    {
        title: "SQL Dashboard for Life Insurance",
        description:
            "Led a SQL-based dashboard project for a major life insurer at PwC, cutting manual reporting time by 35% and presenting findings in client meetings.",
        technologies: ["SQL", "AWS QuickSight", "Power BI", "Tableau"],
        highlight: "35% reduction in reporting time",
    },
    {
        title: "Juilliard Web Dashboards",
        description:
            "Built SQL queries and Python-based data pipelines to extract, clean, and integrate multi-source data into dynamic web dashboards, reducing manual data handling by 30%.",
        technologies: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
        highlight: "30% efficiency improvement",
    },
    {
        title: "FY24 Grants & Donations Tracker",
        description:
            "Designed Excel VBA dashboards at The Juilliard School to track FY24 grants and donations, improving reporting efficiency and guiding strategic fund allocation decisions.",
        technologies: ["Excel VBA", "Data Analytics", "Dashboard Design"],
        highlight: "Strategic decision support",
    },
    {
        title: "Variable Annuity UMA Testing Automation",
        description:
            "Automated Variable Annuity UMA testing with Excel VBA at PwC, applying Martingale and Black-Scholes models to improve accuracy and reduce processing time by 20%.",
        technologies: ["Excel VBA", "Black-Scholes", "Martingale Models"],
        highlight: "20% faster processing",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 hover-glow group flex flex-col"
                        >
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {/* Project icon */}
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0 ml-4">
                                        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                </div>

                                {project.highlight && (
                                    <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-accent-500/20 text-accent-400 border border-accent-500/30 mb-3">
                                        {project.highlight}
                                    </span>
                                )}

                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded text-xs font-medium
                               bg-gray-800 text-gray-300 border border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
