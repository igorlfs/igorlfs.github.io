<script lang="ts">
    import { formatDate } from '$lib/utils';
    import { base } from '$app/paths';
    let { data } = $props();
</script>

<svelte:head>
    <title>IgorLFS</title>
</svelte:head>

<section class="text-text my-10 flex justify-center">
    <ul class="flex flex-col divide-y-2 divide-crust xl:w-[60%] w-[90%]">
        {#each data.posts as post}
            <li class="not-first:pt-3 pb-3">
                <a href="{base}/{post.slug}" class="capitalize sm:text-5xl text-3xl">{post.title}</a
                >
                <p class="mt-2 text-subtext">{formatDate(post.date)}</p>
                <p class="mt-2">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>
