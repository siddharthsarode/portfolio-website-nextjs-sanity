import Image from "next/image";

export default function About() {
    const skills = [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
    ];

    return (
        <section className="section bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 bg-linear-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden">
                        <div className="relative size-full">
                            <Image
                                src="/projectAbout.png"
                                alt="About us image"
                                fill
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-4">
                                About Me
                            </h2>
                            <p className="text-foreground/70 text-lg leading-relaxed mb-4">
                                I'm a passionate full-stack developer with 5+
                                years of experience creating beautiful,
                                performant web applications. I believe in clean
                                code, great design, and seamless user
                                experiences.
                            </p>
                            <p className="text-foreground/70 text-lg leading-relaxed">
                                When I'm not coding, you'll find me exploring
                                new technologies, contributing to open source,
                                or sharing knowledge with the developer
                                community.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-semibold text-foreground text-lg">
                                Key Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-lg"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
