import Link from "next/link";

export default function Works() {
	const projects = [
		{
			id: 1,
			title: "E-Commerce Platform",
			description:
				"A full-featured online store built with Next.js and Stripe integration.",
			image: "/projectEcom.png",
		},
		{
			id: 2,
			title: "Social Media Dashboard",
			description:
				"Real-time analytics dashboard for social media management.",
			image: "/projectSocial.png",
		},
		{
			id: 3,
			title: "Task Management App",
			description:
				"Collaborative task management with real-time updates.",
			image: "/projectTask.png",
		},
	];

	return (
		<section className="section bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-4">
						Recent Works
					</h2>
					<p className="text-foreground/60 text-lg max-w-2xl mx-auto">
						A selection of projects I've worked on, showcasing my
						skills and expertise.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent transition-all hover:shadow-lg"
						>
							<div className="relative h-48 overflow-hidden bg-muted">
								<img
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-foreground mb-2">
									{project.title}
								</h3>
								<p className="text-foreground/60 text-sm mb-4">
									{project.description}
								</p>
								<Link
									href="#"
									className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all gap-1"
								>
									View Project →
								</Link>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<Link href="#" className="btn-secondary">
						View All Projects
					</Link>
				</div>
			</div>
		</section>
	);
}
