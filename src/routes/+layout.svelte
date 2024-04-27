<script lang="ts">
    import "../app.scss";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    // @ts-ignore
    // npm i blip-ds
    // import { defineCustomElements } from "blip-ds/loader/index.cjs";
    // import { onMount } from "svelte";

    // onMount(() => {
    // defineCustomElements(window);
    // });
</script>

<Header />

<main>
    <slot />
</main>

<Footer />
