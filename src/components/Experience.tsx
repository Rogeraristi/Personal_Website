interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Entity Operations Analyst",
        company: "Middesk",
        location: "Manhattan, NY",
        period: "Nov. 2025 - Dec. 2025",
        description: [
            "Built and optimized JavaScript and SQL-driven internal tools to resolve edge cases in automated entity-verification pipelines, improving data accuracy and reducing manual review workload",
            "Partnered with Product and Engineering to debug data inconsistencies and refine verification logic in production workflows",
            "Queried and reconciled multi-state entity data across internal databases and third-party systems to support business onboarding at scale",
        ],
    },
    {
        title: "Quality Assurance / Data Collector",
        company: "Applause",
        location: "Manhattan, NY",
        period: "Sep. 2025 - Oct. 2025",
        description: [
            "Collected and validated data from 50+ smart devices daily for confidential MAANG-level technology clients, maintaining 100% data accuracy and integrity",
            "Trained and mentored 5+ new team members, standardizing data validation procedures and QA workflows that improved team productivity by 25%",
        ],
    },
    {
        title: "Risk Modeling Services: Life Associate",
        company: "PricewaterhouseCoopers",
        location: "Manhattan, NY",
        period: "Sep. 2024 - Oct. 2024",
        description: [
            "Performed data-driven recalculations for a major audit client using SQL and Excel, leveraging QuickSight dashboards to validate accuracy and ensure the integrity of complex financial data",
            "Built and maintained a VBA-based group reinsurance product model supporting financial projections for a $250M line of business",
        ],
    },
    {
        title: "Web Developer",
        company: "The Juilliard School",
        location: "Manhattan, NY",
        period: "June 2024 - Aug. 2024",
        description: [
            "Designed Excel VBA dashboards to track FY24 grants and donations, improving reporting efficiency and leveraging data analytics to guide strategic fund allocation decisions",
            "Assisted in the development and maintenance of the school's official website using HTML, CSS, and JavaScript",
            "Built SQL queries and Python-based data pipelines to extract, clean, and integrate multi-source data into dynamic web dashboards, reducing manual data handling by 30%",
        ],
    },
    {
        title: "Risk Modeling Services: Life Intern",
        company: "PricewaterhouseCoopers",
        location: "Manhattan, NY",
        period: "June 2023 - Aug. 2023",
        description: [
            "Leveraged AWS QuickSight to effectively visualize and present dashboards to a prominent large-scale client",
            "Automated Variable Annuity UMA testing with Excel VBA, applying Martingale and Black-Scholes models to improve accuracy and reduce processing time by 20%",
            "Led a SQL-based dashboard project for a life insurer, cutting manual reporting time by 35% and presenting findings in client meetings",
            "Created interactive Tableau and Power BI dashboards, transforming complex data into clear visual decks for client presentations",
        ],
    },
    {
        title: "Marketing & Development Intern",
        company: "Bloomberg Philanthropies & Studio Institute",
        location: "Manhattan, NY",
        period: "June 2019 - Aug. 2019",
        description: [
            "Collaborated on a grant proposal that secured $150,000 in funding from M&T Bank to support research and development for a nonprofit organization specializing in experimental theater",
            "Supported budgeting and timeline development for 5+ active grant proposals under the Director of Development",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Professional <span className="gradient-text">Experience</span>
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 hover-glow relative overflow-hidden"
                        >
                            {/* Accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500" />

                            <div className="ml-4">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {exp.title}
                                        </h3>
                                        <p className="text-primary-400 font-medium">{exp.company}</p>
                                        <p className="text-gray-500 text-sm">{exp.location}</p>
                                    </div>
                                    <span className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-300 flex items-start">
                                            <span className="text-accent-400 mr-2 mt-1.5">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
