import ContactForm from "@/components/contactForm";

export default function ContactPage() {
	return (
		<div className="min-h-screen pt-32">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section">
				<div className="grid md:grid-cols-2 gap-12 items-start">
					<div>
						<h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
							Let's Work Together
						</h1>
						<p className="text-xl text-foreground/70 mb-8">
							Have a project in mind? I'd love to hear about it.
							Let's discuss how I can help bring your ideas to
							life.
						</p>

						<div className="space-y-6">
							<div>
								<h3 className="font-semibold text-foreground mb-2">
									Email
								</h3>
								<a
									href="mailto:hello@siddharth.com"
									className="text-accent hover:underline"
								>
									hello@siddharth.com
								</a>
							</div>

							<div>
								<h3 className="font-semibold text-foreground mb-2">
									Phone
								</h3>
								<a
									href="tel:+15550000000"
									className="text-accent hover:underline"
								>
									+1 (555) 000-0000
								</a>
							</div>

							<div>
								<h3 className="font-semibold text-foreground mb-2">
									Location
								</h3>
								<p className="text-foreground/70">
									San Francisco, CA, USA
								</p>
							</div>

							<div className="pt-8">
								<h3 className="font-semibold text-foreground mb-4">
									Follow Me
								</h3>
								<div className="flex gap-4">
									<a
										href="#"
										className="text-foreground/60 hover:text-accent transition"
									>
										GitHub
									</a>
									<a
										href="#"
										className="text-foreground/60 hover:text-accent transition"
									>
										LinkedIn
									</a>
									<a
										href="#"
										className="text-foreground/60 hover:text-accent transition"
									>
										Instagram
									</a>
									<a
										href="#"
										className="text-foreground/60 hover:text-accent transition"
									>
										Twitter
									</a>
								</div>
							</div>
						</div>
					</div>

					<ContactForm />
				</div>
			</div>
		</div>
	);
}
