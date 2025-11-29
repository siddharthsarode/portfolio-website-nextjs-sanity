export default function Skills() {
	const skillCategories = [
		{
			category: "Frontend",
			skills: [
				{ name: "React", level: 95 },
				{ name: "Next.js", level: 90 },
				{ name: "TypeScript", level: 88 },
				{ name: "Tailwind CSS", level: 92 },
			],
		},
		{
			category: "Backend",
			skills: [
				{ name: "Node.js", level: 85 },
				{ name: "Express", level: 82 },
				{ name: "PostgreSQL", level: 80 },
				{ name: "MongoDB", level: 78 },
			],
		},
		{
			category: "Tools & Others",
			skills: [
				{ name: "Git & GitHub", level: 90 },
				{ name: "Docker", level: 75 },
				{ name: "REST API", level: 88 },
				{ name: "UI/UX Design", level: 82 },
			],
		},
	];

	return (
		<section>
			<h2 className="text-3xl font-bold text-foreground mb-12 text-center">
				Skills & Expertise
			</h2>

			<div className="grid md:grid-cols-3 gap-12">
				{skillCategories.map((category) => (
					<div key={category.category}>
						<h3 className="text-xl font-bold text-foreground mb-6">
							{category.category}
						</h3>
						<div className="space-y-4">
							{category.skills.map((skill) => (
								<div key={skill.name}>
									<div className="flex justify-between items-center mb-2">
										<span className="text-foreground font-medium">
											{skill.name}
										</span>
										<span className="text-accent font-semibold">
											{skill.level}%
										</span>
									</div>
									<div className="w-full bg-muted rounded-full h-2">
										<div
											className="bg-accent h-2 rounded-full transition-all duration-500"
											style={{ width: `${skill.level}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
