<script lang="ts">
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    const pages = [
        {
            title: "About",
            href: "/about",
        },
    ];

    $: url = $page.url.href;
    $: routeId = $page.url.pathname;
</script>

<nav class="bg-crust p-2">
    <div class="flex xl:px-36 sm:px-16 px-4 items-center min-h-10">
        <a class="text-xl text-lavender" href="{base}/"> IgorLFS </a>
        <ul class="flex m-0 ml-auto uppercase">
            {#each pages as { title, href }}
                <li class="[&:not(:last-child)]:mr-5">
                    <a
                        href="{base}{href}"
                        class={(href === "/" && routeId === "/") ||
                        url.includes(href)
                            ? "text-lavender"
                            : "text-subtext"}
                        {title}>{title}</a
                    >
                </li>
            {/each}
        </ul>
    </div>
</nav>
