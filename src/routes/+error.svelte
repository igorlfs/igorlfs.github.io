<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="flex flex-col my-10 items-center text-text">
    <h1 class="text-primary text-3xl font-bold">{$page.status}</h1>
    <p>{$page.error?.message}</p>
</div>
