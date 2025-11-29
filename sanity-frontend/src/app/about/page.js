import Timeline from "@/components/about/Timeline";
import Skills from "@/components/about/Skills";

export default function AboutPage() {
	return (
		<div className="min-h-screen pt-32">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section">
				<div className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
						About Me
					</h1>
					<p className="text-xl text-foreground/70 max-w-3xl mx-auto">
						Full-stack developer passionate about creating
						beautiful, performant web experiences with modern
						technologies.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
					<div className="relative h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden">
						<img
							src="/professional-headshot-portrait.jpg"
							alt="Professional portrait"
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="space-y-6">
						<div>
							<h2 className="text-3xl font-bold text-foreground mb-4">
								Who Am I?
							</h2>
							<p className="text-foreground/70 leading-relaxed mb-4">
								I'm a full-stack web developer with expertise in
								modern JavaScript frameworks and a passion for
								creating intuitive user interfaces. With over 5
								years of experience in the industry, I've worked
								with diverse teams and clients to deliver
								exceptional digital solutions.
							</p>
							<p className="text-foreground/70 leading-relaxed">
								My approach combines technical excellence with
								thoughtful design, ensuring that every project I
								work on is both beautiful and highly functional.
								I'm constantly learning and staying updated with
								the latest web development trends.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-bold text-foreground mb-3">
								Quick Facts
							</h3>
							<ul className="space-y-2 text-foreground/70">
								<li>• Based in San Francisco, CA</li>
								<li>• 5+ years in web development</li>
								<li>• Specialized in React & Next.js</li>
								<li>• Open source contributor</li>
								<li>• Tech speaker & mentor</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="mb-20">
					<h2 className="text-3xl font-bold text-foreground mb-12 text-center">
						My Journey
					</h2>
					<Timeline />
				</div>

				<div>
					<Skills />
				</div>
			</div>
		</div>
	);
}
