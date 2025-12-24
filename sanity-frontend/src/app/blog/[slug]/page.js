import BlogContent from "@/components/blog/BlogContent";
import RelatedPosts from "@/components/blog/RelatedPosts";
import client from "@/sanity/client";

export default async function BlogPostPage({ params }) {
	const { slug } = await params;

	console.log("slug = ", slug);

	const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    category,
    date,
	_createdAt,
	_type,
    content,
    blogImage,
    author->{
      name,
      bio,
      authorImage
    }
  }`;

	const blogPost = await client.fetch(query, { slug });
	return (
		<div className="min-h-screen pt-32">
			<BlogContent blogPost={blogPost} />
			{/* <RelatedPosts currentSlug={slug} /> */}
		</div>
	);
}
