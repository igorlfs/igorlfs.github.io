<script>
	import Socials from '$lib/components/molecules/Socials.svelte';
</script>

<footer>
	<div class="content">
		<div class="socials">
			<Socials />
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		height: 80px;
		width: 100%;
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		display: grid;
		grid-template-rows: 80px 1fr;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
			font-weight: 700;
			text-align: center;

			.socials {
				display: flex;
				align-items: center;
				gap: 20px;
			}
		}
	}
</style>
