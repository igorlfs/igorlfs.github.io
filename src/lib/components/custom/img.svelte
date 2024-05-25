<script lang="ts">
    import { base } from "$app/paths";

    export let src: string;
    export let alt: string;
</script>

<img src={base + src} {alt} loading="lazy" />
