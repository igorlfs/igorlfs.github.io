<script lang="ts">
    import { base } from "$app/paths";

    const pages = [
        {
            title: "About",
            href: "/about",
        },
    ];
</script>

<nav class="bg-crust p-2">
    <div class="flex xl:px-36 sm:px-16 px-4 items-center min-h-10">
        <a class="text-xl text-accent" href="{base}/"> IgorLFS </a>
        <ul class="flex m-0 ml-auto uppercase">
            {#each pages as { title, href }}
                <li class="[&:not(:last-child)]:mr-5">
                    <a href="{base}{href}" {title}>{title}</a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
