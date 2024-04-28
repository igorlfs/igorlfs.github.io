<script lang="ts">
    import { formatDate } from "$lib/utils";
    export let data;
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>


<section class="text-text pb-8 pt-10 m-6">
    <ul class="grid divide-y-2 divide-crust">
        {#each data.posts as post}
            <li class="py-3">
                <a
                    href={post.slug}
                    class="text-lavender font-bold capitalize text-3xl hoverable-item"
                    >{post.title}</a
                >
                <p class="text-subtext">{formatDate(post.date)}</p>
                <p class="mt-2">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>
