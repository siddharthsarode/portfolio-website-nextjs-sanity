import BlogCard from "@/components/blog/BlogCard";

export default function BlogPage() {
	const blogs = [
		{
			id: 1,
			title: "Getting Started with Next.js 15",
			excerpt:
				"Learn the latest features and improvements in Next.js 15 and how to leverage them in your projects.",
			category: "Tutorial",
			date: "Dec 15, 2024",
			slug: "1",
			image: "/nextjs-tutorial-blog-cover.jpg",
		},
		{
			id: 2,
			title: "React Performance Optimization Tips",
			excerpt:
				"Discover practical techniques to optimize React component performance and improve user experience.",
			category: "Guide",
			date: "Dec 10, 2024",
			slug: "2",
			image: "/react-performance-optimization.jpg",
		},
		{
			id: 3,
			title: "Building Accessible Web Applications",
			excerpt:
				"Create inclusive web experiences with a comprehensive guide to web accessibility standards.",
			category: "Best Practice",
			date: "Dec 5, 2024",
			slug: "3",
			image: "/web-accessibility-guide.jpg",
		},
		{
			id: 4,
			title: "Mastering CSS Grid Layout",
			excerpt:
				"Deep dive into CSS Grid with practical examples and best practices for modern layouts.",
			category: "Tutorial",
			date: "Nov 28, 2024",
			slug: "4",
			image: "/css-grid-layout-tutorial.jpg",
		},
		{
			id: 5,
			title: "TypeScript Advanced Patterns",
			excerpt:
				"Explore advanced TypeScript patterns to write more maintainable and type-safe code.",
			category: "Advanced",
			date: "Nov 20, 2024",
			slug: "5",
			image: "/typescript-advanced-patterns.jpg",
		},
		{
			id: 6,
			title: "Web Performance Metrics You Should Know",
			excerpt:
				"Understand Core Web Vitals and other performance metrics that matter for SEO and UX.",
			category: "Performance",
			date: "Nov 15, 2024",
			slug: "6",
			image: "/web-performance-metrics.jpg",
		},
	];

	return (
		<div className="min-h-screen pt-32">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section">
				<div className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
						Blog
					</h1>
					<p className="text-xl text-foreground/70 max-w-2xl mx-auto">
						Articles on web development, design, and modern best
						practices.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogs.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</div>
	);
}
