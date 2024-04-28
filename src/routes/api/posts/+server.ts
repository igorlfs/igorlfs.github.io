export const prerender = true;
import type { Post } from "$lib/types";
import { json } from "@sveltejs/kit";

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob("/src/posts/*.md", { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split("/").at(-1)?.replace(".md", "");

		if (file && typeof file === "object" && "metadata" in file && slug) {
			const metadata = file.metadata as Omit<Post, "slug">;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(lhs, rhs) =>
			(rhs.date &&
				lhs.date &&
				new Date(rhs.date).getTime() - new Date(lhs.date).getTime()) ||
			0,
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}