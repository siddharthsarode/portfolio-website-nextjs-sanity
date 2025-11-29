"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isSticky
					? "bg-background/80 backdrop-blur-md border-b border-border"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link
						href="/"
						className="font-bold text-xl text-primary hover:text-accent transition-colors"
					>
						S.
					</Link>

					<div className="hidden md:flex items-center gap-8">
						<Link href="/" className="nav-link">
							Home
						</Link>
						<Link href="/about" className="nav-link">
							About
						</Link>
						<Link href="/blog" className="nav-link">
							Blog
						</Link>
						<Link href="/contact" className="nav-link">
							Contact
						</Link>
					</div>

					<Link href="/contact" className="btn-primary text-sm">
						Get in Touch
					</Link>
				</div>
			</div>
		</nav>
	);
}
