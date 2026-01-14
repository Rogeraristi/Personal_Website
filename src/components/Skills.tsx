interface SkillCategory {
    name: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Data Visualization",
        skills: ["Tableau", "Power BI", "AWS QuickSight", "Excel (PivotTables, VBA)", "Matplotlib", "Figma", "Lucid"],
    },
    {
        name: "Data Analysis & Modeling",
        skills: ["SQL (Joins, CTEs, Stored Procedures)", "Python (Pandas, NumPy, Scikit-learn)", "Statistical Modeling", "Risk Analysis"],
    },
    {
        name: "Web & Data Tools",
        skills: ["HTML", "CSS", "JavaScript", "Salesforce", "Drupal", "JSON", "REST APIs", "Git"],
    },
    {
        name: "Languages",
        skills: ["Spanish (Native)", "French (Intermediate)", "Russian (Basic)", "English (Fluent)"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Skills & <span className="gradient-text">Technologies</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass-card p-6 hover-glow">
                            <h3 className="text-lg font-semibold text-white mb-4">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full text-sm font-medium
                               bg-gradient-to-r from-primary-500/20 to-accent-500/20
                               border border-primary-500/30 text-gray-300
                               hover:border-primary-400 transition-colors"
                                    >
                                        {skill}
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
