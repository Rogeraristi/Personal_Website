export default function About() {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="glass-card p-8 hover-glow">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I&apos;m a Mathematics graduate from Hofstra University with a focus on Actuarial Science,
                        passionate about transforming complex data into actionable insights. My background combines
                        rigorous quantitative training with hands-on experience in data analytics, risk modeling,
                        and business intelligence.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I&apos;ve had the privilege of working with industry leaders like PricewaterhouseCoopers,
                        where I developed financial models supporting $250M+ lines of business, and The Juilliard School,
                        where I built data pipelines and web dashboards that improved operational efficiency.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Beyond my technical work, I&apos;m committed to giving back—serving as Alumni Chair for
                        Bottom Line&apos;s National Alumni Advisory Committee and as a Judge for The Actuarial
                        Foundation&apos;s Modeling the Future Challenge.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I&apos;m fluent in Spanish, conversational in French, and have basic Russian skills.
                        Based in New York City, I&apos;m always open to new opportunities in data analytics,
                        financial technology, and risk management.
                    </p>
                </div>
            </div>
        </section>
    );
}
