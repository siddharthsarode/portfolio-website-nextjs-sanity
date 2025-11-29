import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-primary text-primary-foreground">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div>
						<h3 className="font-bold text-lg mb-4">Portfolio</h3>
						<p className="text-sm opacity-80">
							Building modern, responsive web experiences.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Navigation</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/"
									className="hover:opacity-80 transition"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:opacity-80 transition"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="hover:opacity-80 transition"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:opacity-80 transition"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Follow</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#"
									className="hover:opacity-80 transition"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:opacity-80 transition"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:opacity-80 transition"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:opacity-80 transition"
								>
									Twitter
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Contact</h4>
						<ul className="space-y-2 text-sm">
							<li>Email: hello@example.com</li>
							<li>Phone: +1 (555) 000-0000</li>
							<li>Location: San Francisco, CA</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
					<p>&copy; 2025 Siddharth. All rights reserved.</p>
					<div className="flex gap-6 mt-4 md:mt-0">
						<Link href="#" className="hover:opacity-80 transition">
							Privacy Policy
						</Link>
						<Link href="#" className="hover:opacity-80 transition">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
