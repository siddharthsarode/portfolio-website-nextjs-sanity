export default function Timeline() {
	const events = [
		{
			year: "2019",
			title: "Started Learning Web Development",
			description:
				"Began my journey into web development with HTML, CSS, and JavaScript.",
		},
		{
			year: "2020",
			title: "First Professional Role",
			description:
				"Joined a startup as a junior developer, working with React and Node.js.",
		},
		{
			year: "2021",
			title: "Full-Stack Development",
			description:
				"Transitioned to full-stack development, mastering both frontend and backend technologies.",
		},
		{
			year: "2022",
			title: "Lead Developer",
			description:
				"Promoted to lead developer role, mentoring junior developers and architecting solutions.",
		},
		{
			year: "2023",
			title: "Freelance & Mentoring",
			description:
				"Started freelancing and mentoring others in the developer community.",
		},
		{
			year: "2024",
			title: "Today",
			description:
				"Continuously growing, learning, and building amazing digital experiences.",
		},
	];

	return (
		<div className="relative">
			{/* Timeline line */}
			<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20"></div>

			<div className="space-y-12">
				{events.map((event, index) => (
					<div key={index} className="relative pl-24">
						{/* Timeline dot */}
						<div className="absolute left-0 top-2 w-16 h-16 rounded-full bg-accent/10 border-4 border-accent flex items-center justify-center">
							<div className="w-4 h-4 rounded-full bg-accent"></div>
						</div>

						<div>
							<h3 className="text-sm font-bold text-accent mb-1">
								{event.year}
							</h3>
							<h4 className="text-xl font-bold text-foreground mb-2">
								{event.title}
							</h4>
							<p className="text-foreground/70">
								{event.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
