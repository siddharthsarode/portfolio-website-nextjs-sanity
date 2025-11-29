import Link from "next/link";

export default function BlogCard({ blog }) {
	return (
		<article className="rounded-xl overflow-hidden bg-background border border-border hover:border-accent transition-all hover:shadow-lg group h-full flex flex-col">
			<div className="relative h-48 overflow-hidden bg-muted">
				<img
					src={blog.image || "/placeholder.svg"}
					alt={blog.title}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
				/>
			</div>
			<div className="p-6 flex flex-col grow">
				<div className="flex items-center gap-2 mb-3">
					<span className="text-xs font-semibold px-2 py-1 bg-accent/10 text-accent rounded">
						{blog.category}
					</span>
					<span className="text-xs text-foreground/50">
						{blog.date}
					</span>
				</div>
				<h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 grow">
					{blog.title}
				</h3>
				<p className="text-foreground/60 text-sm line-clamp-2 mb-4">
					{blog.excerpt}
				</p>
				<Link
					href={`/blog/${blog.slug}`}
					className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all gap-1"
				>
					Read More →
				</Link>
			</div>
		</article>
	);
}
