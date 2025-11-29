import Link from "next/link";

const blogPostsData = [
	{
		id: "1",
		title: "Getting Started with Next.js 15",
		slug: "1",
		category: "Tutorial",
		image: "/placeholder.svg?height=250&width=400",
	},
	{
		id: "2",
		title: "React Performance Optimization Tips",
		slug: "2",
		category: "Guide",
		image: "/placeholder.svg?height=250&width=400",
	},
	{
		id: "3",
		title: "Building Accessible Web Applications",
		slug: "3",
		category: "Best Practice",
		image: "/placeholder.svg?height=250&width=400",
	},
	{
		id: "4",
		title: "Mastering CSS Grid Layout",
		slug: "4",
		category: "Tutorial",
		image: "/placeholder.svg?height=250&width=400",
	},
	{
		id: "5",
		title: "TypeScript Advanced Patterns",
		slug: "5",
		category: "Advanced",
		image: "/placeholder.svg?height=250&width=400",
	},
	{
		id: "6",
		title: "Web Performance Metrics",
		slug: "6",
		category: "Performance",
		image: "/placeholder.svg?height=250&width=400",
	},
];

export default function RelatedPosts({ currentSlug }) {
	const related = blogPostsData
		.filter((post) => post.slug !== currentSlug)
		.slice(0, 3);

	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 section bg-card">
			<h2 className="text-3xl font-bold text-foreground mb-12">
				Related Posts
			</h2>

			<div className="grid md:grid-cols-3 gap-8">
				{related.map((post) => (
					<article
						key={post.id}
						className="rounded-xl overflow-hidden bg-background border border-border hover:border-accent transition-all hover:shadow-lg group"
					>
						<div className="relative h-40 overflow-hidden bg-muted">
							<img
								src={post.image || "/placeholder.svg"}
								alt={post.title}
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
							/>
						</div>
						<div className="p-6">
							<span className="text-xs font-semibold px-2 py-1 bg-accent/10 text-accent rounded inline-block mb-3">
								{post.category}
							</span>
							<h3 className="text-lg font-bold text-foreground mb-3">
								{post.title}
							</h3>
							<Link
								href={`/blog/${post.slug}`}
								className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all gap-1"
							>
								Read More →
							</Link>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
