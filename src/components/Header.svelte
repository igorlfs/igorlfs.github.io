<script>
    import { page } from "$app/stores";

    const pages = [
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "About",
            href: "/about",
        },
    ];

    $: url = $page.url.href;
    $: routeId = $page.url.pathname;
</script>

<nav class="bg-crust fixed top-0 w-full p-2">
    <div class="flex xl:px-36 sm:px-16 items-center min-h-10">
        <a class="font-bold text-xl text-blue hover:underline" href="/">
            IgorLFS
        </a>
        <ul
            class="flex m-0 ml-auto uppercase *:font-bold *:mr-9 *:hoverable-list-item"
        >
            {#each pages as { title, href }}
                <a
                    {href}
                    class={(href === "/" && routeId === "/") ||
                    url.includes(href)
                        ? "text-lavender"
                        : "text-subtext"}
                    {title}>{title}</a
                >
            {/each}
        </ul>
    </div>
</nav>
