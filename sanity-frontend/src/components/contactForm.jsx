"use client";

import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setSubmitted(true);
		setTimeout(() => {
			setFormData({ name: "", email: "", message: "" });
			setSubmitted(false);
		}, 3000);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-card border border-border rounded-xl p-8 space-y-6"
		>
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-semibold text-foreground mb-2"
				>
					Full Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
					placeholder="Your name"
				/>
			</div>

			<div>
				<label
					htmlFor="email"
					className="block text-sm font-semibold text-foreground mb-2"
				>
					Email Address
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
					placeholder="your@email.com"
				/>
			</div>

			<div>
				<label
					htmlFor="message"
					className="block text-sm font-semibold text-foreground mb-2"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					rows={6}
					className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
					placeholder="Tell me about your project..."
				></textarea>
			</div>

			<button type="submit" className="w-full btn-primary">
				{submitted ? "Message Sent! 🎉" : "Send Message"}
			</button>

			{submitted && (
				<p className="text-center text-accent text-sm font-medium">
					Thank you for reaching out! I'll get back to you soon.
				</p>
			)}
		</form>
	);
}
