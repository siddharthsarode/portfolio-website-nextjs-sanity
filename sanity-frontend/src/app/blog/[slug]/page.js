const blogSlugPage = async ({ params }) => {
	const { slug } = await params;
	return <div>page for blog {slug}</div>;
};

export default blogSlugPage;
