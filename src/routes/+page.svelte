<script lang="ts">
    import { formatDate } from "$lib/utils";
    export let data;
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>


<section class="text-text pb-8 my-10 flex justify-center">
    <ul class="grid grid-cols-1 divide-y-2 divide-crust xl:w-[60%] sm:w-[90%]">
        {#each data.posts as post}
            <li class="[&:not(:first-child)]:pt-3 pb-3">
                <a
                    href={post.slug}
                    class="text-lavender font-bold capitalize text-5xl hoverable-item"
                    >{post.title}</a
                >
                {#if post.date}
                    <p class="text-subtext">{formatDate(post.date)}</p>
                {/if}
                <p class="mt-2">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>
