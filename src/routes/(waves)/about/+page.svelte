<script>
	import Socials from '$lib/components/molecules/Socials.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Header from '$lib/components/organisms/Header.svelte';
</script>

<Header showBackground={true} />

<div class="container">
	<ContentSection title="About Me">
		<p>
			Hi! I'm a Computer Science student at <a href="https://ufmg.br/">UFMG</a>. I'm also an intern
			at <a href="https://whitewall.dev/">WhiteWall</a>.
		</p>
	</ContentSection>
	<ContentSection title="Credits">
		<p>Thanks to <a href="https://fantinel.dev/">Fantinel</a> for the Blog Template!</p>
	</ContentSection>
	<div class="socials">
		<Socials />
	</div>
</div>

<style lang="scss">
	.socials {
		display: flex;
		widows: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;
		font-weight: 700;
		text-align: center;
	}
</style>
