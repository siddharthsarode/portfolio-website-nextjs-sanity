import Link from "next/link";
import client from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// const blogPosts = [
// 	{
// 		id: 1,
// 		title: "Getting Started with Next.js 15",
// 		excerpt:
// 			"Learn the latest features and improvements in Next.js 15 and how to leverage them in your projects.",
// 		category: "Tutorial",
// 		date: "Dec 15, 2024",
// 		image: "/nextjs-tutorial-blog-cover.jpg",
// 	},
// 	{
// 		id: 2,
// 		title: "React Performance Optimization Tips",
// 		excerpt:
// 			"Discover practical techniques to optimize React component performance and improve user experience.",
// 		category: "Guide",
// 		date: "Dec 10, 2024",
// 		image: "/react-performance-optimization.jpg",
// 	},
// 	{
// 		id: 3,
// 		title: "Building Accessible Web Applications",
// 		excerpt:
// 			"Create inclusive web experiences with a comprehensive guide to web accessibility standards.",
// 		category: "Best Practice",
// 		date: "Dec 5, 2024",
// 		image: "/web-accessibility-guide.jpg",
// 	},
// ];

export default async function BlogPreview() {
	// get blog posts from Sanity CMS
	const getAllBlogs = async () => {
		const query = `*[_type == 'blog']`;
		const data = await client.fetch(query);
		return data;
	};

	const blogs = await getAllBlogs();

	const builder = createImageUrlBuilder(client);

	const urlFor = (source) => builder.image(source);

	console.log("blogs", blogs);
	console.log(
		"url",
		builder.image(blogs[0].blogImage).width(600).height(400).url()
	);

	return (
		<section className="section bg-card">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-4">
						Latest Blog Posts
					</h2>
					<p className="text-foreground/60 text-lg max-w-2xl mx-auto">
						Insights on web development, design, and best practices.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{blogs.map((post) => (
						<article
							key={post._id}
							className="rounded-xl overflow-hidden bg-background border border-border hover:border-accent transition-all hover:shadow-lg group"
						>
							<div className="relative h-40 overflow-hidden bg-muted">
								<img
									src={urlFor(post.blogImage)
										.width(600)
										.height(400)
										.url()}
									alt={post.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center gap-2 mb-3">
									<span className="text-xs font-semibold px-2 py-1 bg-accent/10 text-accent rounded">
										{post._type}
									</span>
									<span className="text-xs text-foreground/50">
										{post._createdAt.split("T")[0]}
									</span>
								</div>
								<h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
									{post.title}
								</h3>
								<p className="text-foreground/60 text-sm line-clamp-2 mb-4">
									{post.metaDescription}
								</p>
								<Link
									href={`/blog/${post.slug.current}`}
									className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all gap-1"
								>
									Read More →
								</Link>
							</div>
						</article>
					))}
				</div>

				<div className="text-center">
					<Link href="/blog" className="btn-primary">
						View All Articles
					</Link>
				</div>
			</div>
		</section>
	);
}
