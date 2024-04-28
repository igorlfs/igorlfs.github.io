<script>
    import { page } from "$app/stores";

    const pages = [
        {
            title: "About",
            href: "/about",
        },
    ];

    const url = $derived($page.url.href);
    const routeId = $derived($page.url.pathname);
</script>

<nav class="bg-crust p-2">
    <div class="flex xl:px-36 sm:px-16 items-center min-h-10">
        <a class="font-bold text-xl text-lavender hoverable-item" href="/">
            IgorLFS
        </a>
        <ul
            class="flex m-0 ml-auto uppercase *:font-bold *:mr-9 *:hoverable-item"
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
