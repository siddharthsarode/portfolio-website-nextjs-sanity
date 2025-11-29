"use client";

import { useEffect, useState } from "react";

export default function Stats() {
	const [stats, setStats] = useState([
		{ label: "Projects Completed", value: 0, final: 50 },
		{ label: "Happy Clients", value: 0, final: 30 },
		{ label: "Years Experience", value: 0, final: 5 },
	]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setStats((prev) =>
				prev.map((stat) => ({
					...stat,
					value: stat.final,
				}))
			);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<section className="section bg-primary text-primary-foreground">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-3 gap-8">
					{stats.map((stat, index) => (
						<div key={index} className="text-center">
							<div className="text-5xl md:text-6xl font-bold mb-2 transition-all duration-1000">
								{stat.value}+
							</div>
							<p className="text-lg opacity-90">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
