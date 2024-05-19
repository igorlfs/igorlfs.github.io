<script lang="ts">
    import { formatDate } from "$lib/utils";

    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="text-text pb-8 my-10 flex justify-center">
    <article class="xl:w-[60%] w-[90%]">
        <hgroup>
            <h1 class="capitalize sm:text-5xl text-3xl font-bold text-lavender">
                {data.meta.title}
            </h1>
            {#if data.meta.date}
                <p class="mt-2 text-subtext">{formatDate(data.meta.date)}</p>
            {/if}
        </hgroup>

        <div class="flex gap-4 mt-3">
            {#each data.meta.categories as category}
                <span class="rounded-3xl bg-crust px-3 py-2"
                    >&num;{category}</span
                >
            {/each}
        </div>

        <div class="prose lg:prose-xl max-w-none">
            <svelte:component this={data.content} />
        </div>
    </article>
</div>
