"use client";

import Link from "next/link";

const blogData = {
	1: {
		id: "1",
		title: "Getting Started with Next.js 15",
		author: "Siddharth",
		date: "Dec 15, 2024",
		category: "Tutorial",
		image: "/nextjs-15-features-hero.jpg",
		content: `
# Getting Started with Next.js 15

Next.js 15 brings a host of exciting new features and improvements to the framework. In this comprehensive guide, we'll explore what's new and how to leverage these enhancements in your projects.

## What's New in Next.js 15

### 1. Enhanced App Router
The App Router continues to evolve with better performance metrics and improved developer experience. The new features make it even easier to build complex applications.

### 2. Improved Performance
- Faster build times
- Optimized bundle sizes
- Better caching strategies

### 3. New Middlewares
The new middleware system provides more flexibility and control over request handling.

## Getting Started

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Project Structure

The new recommended structure focuses on modularity and scalability:

- \`app/\` - Your application routes
- \`components/\` - Reusable components
- \`lib/\` - Utility functions
- \`public/\` - Static assets

## Best Practices

1. Use Server Components by default
2. Optimize images with next/image
3. Implement proper error handling
4. Use dynamic imports for code splitting

## Conclusion

Next.js 15 is a powerful framework that makes building modern web applications more enjoyable and efficient. With its intuitive structure and powerful features, you can build scalable applications with ease.

Happy coding!
    `,
	},
	2: {
		id: "2",
		title: "React Performance Optimization Tips",
		author: "Siddharth",
		date: "Dec 10, 2024",
		category: "Guide",
		image: "/react-optimization-performance.jpg",
		content: `
# React Performance Optimization Tips

Performance is crucial for creating a great user experience. Let's explore practical techniques to optimize your React components.

## 1. Code Splitting with Dynamic Imports

Dynamic imports help reduce your initial bundle size by loading components only when needed.

\`\`\`jsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
\`\`\`

## 2. Memoization

Use React.memo to prevent unnecessary re-renders of components that haven't changed.

\`\`\`jsx
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
\`\`\`

## 3. useCallback Hook

Cache functions to prevent child components from re-rendering unnecessarily.

\`\`\`jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## 4. Virtual Lists

For long lists, implement virtualization to render only visible items.

## 5. Image Optimization

Always use Next.js Image component for automatic optimization.

\`\`\`jsx
import Image from 'next/image';

<Image
  src="/image.png"
  alt="Description"
  width={500}
  height={300}
  priority
/>
\`\`\`

## Monitoring Performance

Use React DevTools Profiler and Core Web Vitals to measure improvements.

Remember: Premature optimization is the root of all evil. Always measure first!
    `,
	},
	3: {
		id: "3",
		title: "Building Accessible Web Applications",
		author: "Siddharth",
		date: "Dec 5, 2024",
		category: "Best Practice",
		image: "/web-accessibility-inclusive-design.jpg",
		content: `
# Building Accessible Web Applications

Web accessibility ensures that your applications are usable by everyone, including people with disabilities.

## Key Principles (WCAG 2.1)

### 1. Perceivable
Information and user interface components must be presentable to users in ways they can perceive.

- Provide text alternatives for images
- Use color contrast ratios of at least 4.5:1
- Don't rely on color alone to convey information

### 2. Operable
User interface components and navigation must be operable.

- All functionality available from keyboard
- Users have enough time to read and use content
- Avoid content that causes seizures

### 3. Understandable
Information and the operation of user interface must be understandable.

- Use clear language
- Make pages appear and operate in predictable ways
- Help users avoid and correct mistakes

### 4. Robust
Content must be robust enough to be interpreted reliably by assistive technologies.

- Use proper semantic HTML
- Validate your code
- Test with screen readers

## Implementation Tips

\`\`\`jsx
// Good semantic HTML
<main>
  <section>
    <h1>Main Heading</h1>
    <p>Content here</p>
  </section>
</main>

// ARIA labels when needed
<button aria-label="Close menu">✕</button>

// Proper form labels
<label htmlFor="email">Email</label>
<input id="email" type="email" />
\`\`\`

## Testing Tools

- axe DevTools
- WAVE
- Screen readers (NVDA, JAWS)
- Keyboard-only navigation

Accessibility isn't an afterthought - it's a core part of good design!
    `,
	},
	4: {
		id: "4",
		title: "Mastering CSS Grid Layout",
		author: "Siddharth",
		date: "Nov 28, 2024",
		category: "Tutorial",
		image: "/css-grid-layout-design.jpg",
		content: `
# Mastering CSS Grid Layout

CSS Grid is a powerful tool for creating complex layouts. Let's dive into practical examples and best practices.

## Grid Basics

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## Common Patterns

### Holy Grail Layout

\`\`\`css
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 200px;
  height: 100vh;
}

header { grid-column: 1 / -1; }
footer { grid-column: 1 / -1; }
\`\`\`

### Card Grid with Responsive

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\`

## Advanced Techniques

### Named Grid Lines
\`\`\`css
.container {
  grid-template-columns: [start] 1fr [middle] 1fr [end];
}

.item {
  grid-column: start / middle;
}
\`\`\`

### Grid Auto Flow
\`\`\`css
.container {
  grid-auto-flow: dense; /* Fills gaps automatically */
}
\`\`\`

## Best Practices

1. Use auto-fit and auto-fill for responsive layouts
2. Combine Grid with Flexbox
3. Test in all browsers
4. Use Chrome DevTools Grid Inspector

Grid is a game-changer for layout design!
    `,
	},
	5: {
		id: "5",
		title: "TypeScript Advanced Patterns",
		author: "Siddharth",
		date: "Nov 20, 2024",
		category: "Advanced",
		image: "/typescript-advanced-programming.jpg",
		content: `
# TypeScript Advanced Patterns

Master advanced TypeScript patterns to write more maintainable and type-safe code.

## Generics

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const output = identity<string>("hello");
\`\`\`

## Union and Intersection Types

\`\`\`typescript
type Admin = { role: 'admin'; permissions: string[] };
type User = { name: string };

type AdminUser = Admin & User;

type Result = string | number;
\`\`\`

## Conditional Types

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<42>; // false
\`\`\`

## Mapped Types

\`\`\`typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadonlyUser = Readonly<User>;
\`\`\`

## Utility Types

- Partial<T>
- Required<T>
- Readonly<T>
- Record<K, T>
- Pick<T, K>
- Omit<T, K>

## Type Guards

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
\`\`\`

## Conclusion

These patterns empower you to create robust, type-safe applications with TypeScript!
    `,
	},
	6: {
		id: "6",
		title: "Web Performance Metrics You Should Know",
		author: "Siddharth",
		date: "Nov 15, 2024",
		category: "Performance",
		image: "/placeholder.svg?height=500&width=1000",
		content: `
# Web Performance Metrics You Should Know

Understanding performance metrics is crucial for optimizing user experience and SEO.

## Core Web Vitals

### 1. Largest Contentful Paint (LCP)
The time it takes for the largest content element to render.

- Good: < 2.5 seconds
- Needs Improvement: 2.5 - 4 seconds
- Poor: > 4 seconds

### 2. First Input Delay (FID)
The time from user input to browser response.

- Good: < 100 milliseconds
- Needs Improvement: 100 - 300 milliseconds
- Poor: > 300 milliseconds

### 3. Cumulative Layout Shift (CLS)
Measures visual stability during page load.

- Good: < 0.1
- Needs Improvement: 0.1 - 0.25
- Poor: > 0.25

## Other Important Metrics

### First Contentful Paint (FCP)
When the first content appears on screen.

### Time to Interactive (TTI)
When the page becomes interactive.

### Total Blocking Time (TBT)
Sum of blocking time during page load.

## Tools for Measuring

- Google PageSpeed Insights
- WebPageTest
- Lighthouse
- Chrome DevTools Performance tab

## Optimization Tips

1. Optimize images (use modern formats like WebP)
2. Minimize JavaScript
3. Use CSS efficiently
4. Implement lazy loading
5. Use a Content Delivery Network (CDN)
6. Enable compression

## Monitoring Continuous

Use tools like Google Analytics to monitor real-world performance data.

Remember: Performance is a feature, not an afterthought!
    `,
	},
};

export default function BlogContent({ slug }) {
	const post = blogData[slug];

	if (!post) {
		return (
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-foreground mb-4">
						Post not found
					</h1>
					<Link href="/blog" className="text-accent hover:underline">
						Back to Blog
					</Link>
				</div>
			</div>
		);
	}

	return (
		<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-8">
				<Link
					href="/blog"
					className="text-accent hover:underline mb-6 inline-block"
				>
					← Back to Blog
				</Link>

				<h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
					{post.title}
				</h1>

				<div className="flex flex-wrap items-center gap-4 text-foreground/60 mb-8">
					<span className="text-sm font-semibold px-3 py-1 bg-accent/10 text-accent rounded">
						{post.category}
					</span>
					<span>By {post.author}</span>
					<span>•</span>
					<span>{post.date}</span>
				</div>

				<div className="relative h-96 md:h-[500px] bg-muted rounded-xl overflow-hidden mb-12">
					<img
						src={post.image || "/placeholder.svg"}
						alt={post.title}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>

			<div className="prose max-w-none">
				<div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
					{post.content.split("\n\n").map((paragraph, index) => {
						if (paragraph.startsWith("#")) {
							const level = paragraph.match(/^#+/)[0].length;
							const text = paragraph.replace(/^#+\s/, "");
							if (level === 1)
								return (
									<h1
										key={index}
										className="text-4xl font-bold text-foreground mt-8 mb-4"
									>
										{text}
									</h1>
								);
							if (level === 2)
								return (
									<h2
										key={index}
										className="text-2xl font-bold text-foreground mt-6 mb-4"
									>
										{text}
									</h2>
								);
							if (level === 3)
								return (
									<h3
										key={index}
										className="text-xl font-bold text-foreground mt-4 mb-2"
									>
										{text}
									</h3>
								);
						}

						if (paragraph.startsWith("```")) {
							const code = paragraph.replace(/```\w*\n?/g, "");
							return (
								<pre
									key={index}
									className="bg-primary text-primary-foreground p-4 rounded-lg overflow-x-auto"
								>
									<code>{code}</code>
								</pre>
							);
						}

						if (
							paragraph.startsWith("-") ||
							paragraph.startsWith("•")
						) {
							return (
								<ul
									key={index}
									className="list-disc list-inside space-y-2"
								>
									{paragraph.split("\n").map((item, i) => (
										<li key={i} className="ml-4">
											{item.replace(/^[-•]\s/, "")}
										</li>
									))}
								</ul>
							);
						}

						return <p key={index}>{paragraph}</p>;
					})}
				</div>
			</div>

			<div className="mt-16 pt-8 border-t border-border">
				<div className="bg-card rounded-xl p-8">
					<div className="flex items-center gap-4 mb-4">
						<div className="w-16 h-16 rounded-full bg-accent/20"></div>
						<div>
							<h3 className="font-bold text-foreground">
								By Siddharth
							</h3>
							<p className="text-foreground/60 text-sm">
								Full-stack developer and tech writer passionate
								about sharing knowledge.
							</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
