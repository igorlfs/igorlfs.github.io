<script>
    import { page } from "$app/stores";
</script>

<div class="h-full my-10 grid place-content-center">
    <h1 class="text-lavender text-3xl font-bold">{$page.status}</h1>
    <p class="text-text">{$page.error?.message}</p>
</div>
