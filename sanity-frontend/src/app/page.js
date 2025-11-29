import About from "@/components/home/About";
import BlogPreview from "@/components/home/BlogPreview";
import Stats from "@/components/home/Stats";
import Works from "@/components/home/Work";
import Hero from "@/pages/Hero";
import React from "react";

const page = () => {
	return (
		<main className="min-h-screen">
			<Hero />
			<About />
			<Works />
			<Stats />
			<BlogPreview />
		</main>
	);
};

export default page;
