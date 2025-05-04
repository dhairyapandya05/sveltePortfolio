<!-- src/lib/components/Footer.svelte -->
<script>
	import { socials } from '$lib/data/socials';
</script>

<footer class="bg-gray-100 py-8 dark:bg-gray-800">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<p class="mb-4 text-gray-600 md:mb-0 dark:text-gray-300">
				© 2025 Dhairya Pandya. All rights reserved.
			</p>
			<div class="flex space-x-6">
				{#each socials as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
					>
						<span class="sr-only">{social.name}</span>
						{@html social.icon}
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
