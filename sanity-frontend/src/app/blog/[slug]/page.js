import BlogContent from "@/components/blog/BlogContent";
import RelatedPosts from "@/components/blog/RelatedPosts";

export default async function BlogPostPage({ params }) {
	const { slug } = await params;
	return (
		<div className="min-h-screen pt-32">
			<BlogContent slug={slug} />
			<RelatedPosts currentSlug={slug} />
		</div>
	);
}
