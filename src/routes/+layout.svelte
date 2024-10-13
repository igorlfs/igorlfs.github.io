<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
</script>

<div class="flex flex-col min-h-screen justify-between">
    <div>
        <Header />

        <main>
            <slot />
        </main>
    </div>
    <!-- See https://stackoverflow.com/a/67846892 -->
    <Footer />
</div>
