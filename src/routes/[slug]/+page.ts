import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import type { Component } from 'svelte';

export const load: Load = async ({ params }) => {
    try {
        const post: { default: Component; metadata: Post } = await import(
            `../../posts/${params.slug}.md`
        );

        return {
            content: post.default,
            meta: post.metadata
        };
    } catch {
        error(404, `Could not find ${params.slug}`);
    }
};
