<script>
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
</script>

<div class="socials">
	<a
		href="https://www.github.com/igorlfs"
		target="_blank"
		rel="noopener noreferrer"
		title="GitHub Profile"
	>
		<GitHubIcon />
	</a>
	<a href="mailto:igorlafarsi@gmail.com" target="_blank" rel="noopener noreferrer" title="Mail">
		<EmailIcon />
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
