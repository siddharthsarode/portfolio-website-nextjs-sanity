import { createClient } from "next-sanity";

const client = createClient({
	projectId: "lk29of3n",
	dataset: "production",
	apiVersion: "2025-01-01",
	useCdn: false,
});

export default client;
