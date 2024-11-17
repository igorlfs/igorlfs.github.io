<script lang="ts">
    import { base } from '$app/paths';

    let { src, alt }: { src: string; alt: string } = $props();
</script>

<img src={base + src} {alt} loading="lazy" />
