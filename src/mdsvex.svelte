<script lang="ts" module>
    import { img } from '$lib/components/custom';
    import type { Snippet } from 'svelte';
    export { img };
</script>

<script lang="ts">
    let { children }: { children: Snippet } = $props();
</script>

{@render children()}
