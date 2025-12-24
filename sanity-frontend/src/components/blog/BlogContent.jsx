import client from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const builder = createImageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

/* ---------------- Portable Text Components ---------------- */

const portableTextComponents = {
    types: {
        image: ({ value }) => (
            <img
                src={urlFor(value).width(800).url()}
                alt={value.alt || "Blog image"}
                className="rounded-xl my-6"
            />
        ),
        code: ({ value }) => (
            <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto my-6">
                <code>{value.code}</code>
            </pre>
        ),
    },

    block: {
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-10 mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-3">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-2">{children}</h3>
        ),
        normal: ({ children }) => (
            <p className="text-lg leading-relaxed mb-4 text-foreground/80">
                {children}
            </p>
        ),
    },

    list: {
        bullet: ({ children }) => (
            <ul className="list-disc ml-6 space-y-2 my-4">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal ml-6 space-y-2 my-4">{children}</ol>
        ),
    },

    marks: {
        strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
        ),
        link: ({ value, children }) => (
            <a
                href={value.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
            >
                {children}
            </a>
        ),
    },
};

/* ---------------- Page Component ---------------- */

export default async function BlogContent({ blogPost }) {
    console.log("blog post", blogPost);

    if (!blogPost) {
        return (
            <div className="max-w-4xl mx-auto py-12 text-center">
                <h1 className="text-3xl font-bold mb-4">Post not found</h1>
                <Link href="/blog" className="text-accent hover:underline">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-12">
            <Link href="/blog" className="text-accent hover:underline">
                ← Back to Blog
            </Link>

            <h1 className="text-5xl font-bold mt-6 mb-4">{blogPost.title}</h1>

            <div className="flex flex-wrap gap-3 text-sm text-foreground/60 mb-8">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded">
                    {blogPost._type}
                </span>
                <span>By {blogPost.author.name}</span>
                <span>•</span>
                <span>{blogPost._createdAt.split("T")[0]}</span>
            </div>

            {blogPost.blogImage && (
                <img
                    src={urlFor(blogPost.blogImage).width(1200).url()}
                    alt={blogPost.title}
                    className="w-full h-[420px] object-contain rounded-xl mb-12"
                />
            )}

            <div className="prose max-w-none">
                <PortableText
                    value={blogPost.content}
                    components={portableTextComponents}
                />
            </div>

            <div className="mt-16 pt-8 border-t">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/20">
                        {blogPost.author.authorImage && (
                            <img
                                src={urlFor(blogPost.author.authorImage)
                                    .width(100)
                                    .url()}
                                alt={blogPost.author.name}
                                className="w-full h-full object-cover rounded-full"
                            />
                        )}
                    </div>
                    <div>
                        <h3 className="font-semibold">
                            {blogPost.author.name}
                        </h3>
                        <p className="text-sm text-foreground/60">
                            Full-stack developer sharing real-world coding
                            experience.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}
