<script lang="ts">
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import type { BlogPost } from '$lib/utils/types';
	import Waves from '$lib/components/organisms/Waves.svelte';
	import Header from '$lib/components/organisms/Header.svelte';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;
</script>

<Waves />

<Header />
<div class="container">
	<About />
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
</div>
