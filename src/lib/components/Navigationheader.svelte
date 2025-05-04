<!-- src/lib/components/Navbar.svelte -->
<script>
	let darkMode = false;

	const toggleDarkMode = () => {
		darkMode = !darkMode;
		document.documentElement.classList.toggle('dark', darkMode);
	};
</script>

<nav class="fixed z-50 w-full bg-white shadow-sm transition-colors duration-300 dark:bg-gray-900">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex items-center">
				<span class="text-xl font-semibold text-gray-900 dark:text-white">Portfolio</span>
			</div>
			<div class="hidden items-center space-x-8 md:flex">
				<a
					href="/about"
					class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
					>About</a
				>
				<a
					href="/experience"
					class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
					>Experience</a
				>
				<a
					href="/projects"
					class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
					>Projects</a
				>
				<a
					href="/contact"
					class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
					>Contact</a
				>
				<button on:click={toggleDarkMode} class="rounded-full p-2 focus:outline-none">
					{#if darkMode}
						<svg
							class="h-5 w-5 text-yellow-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"><!-- Sun icon --></svg
						>
					{:else}
						<svg class="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><!-- Moon icon --></svg
						>
					{/if}
				</button>
			</div>
		</div>
	</div>
</nav>
