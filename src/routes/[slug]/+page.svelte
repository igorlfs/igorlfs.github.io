<script lang="ts">
    import { formatDate } from "$lib/utils";

    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="text-text pb-8 pt-10 my-10 flex justify-center">
    <article class="ms-auto me-auto w-[60%]">
        <hgroup>
            <h1 class="capitalize text-5xl font-bold text-lavender">
                {data.meta.title}
            </h1>
            <p class="text-subtext">{formatDate(data.meta.date)}</p>
        </hgroup>

        <div class="flex gap-4 mt-3">
            {#each data.meta.categories as category}
                <span class="rounded-3xl bg-crust px-3 py-2"
                    >&num;{category}</span
                >
            {/each}
        </div>

        <div class="prose">
            <svelte:component this={data.content} />
        </div>
    </article>
</div>
