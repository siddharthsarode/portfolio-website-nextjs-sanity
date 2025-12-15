import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="section min-h-screen flex items-center bg-linear-to-br from-background via-background to-secondary/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="space-y-4">
							<h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
								Hi, I'm{" "}
								<span className="text-accent">Siddharth</span>.
							</h1>
							<p className="text-xl text-foreground/70 max-w-lg">
								I build modern, responsive websites that create
								engaging digital experiences. Specializing in
								React, Next.js, and creative web design.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Link href="/contact" className="btn-primary">
								Get Started
							</Link>
							<Link href="/about" className="btn-secondary">
								Learn More
							</Link>
						</div>

						<div className="flex gap-4 pt-4">
							<a
								href="https://github.com/siddharthsarode"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground/60 hover:text-accent transition"
							>
								GitHub
							</a>
							<a
								href="https://www.linkedin.com/in/siddharth-sarode-b7b6b724b"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground/60 hover:text-accent transition"
							>
								LinkedIn
							</a>
							<a
								href="https://www.instagram.com/siddharrth.sarode/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground/60 hover:text-accent transition"
							>
								Instagram
							</a>
						</div>
					</div>

					<div className="relative h-120 mt-10 bg-linear-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center overflow-hidden">
						<div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent"></div>
						<div className="relative size-full">
							<Image
								src={"/me_ghibli.png"}
								alt="Hero page image"
								fill
								className="object-fit object-top"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
