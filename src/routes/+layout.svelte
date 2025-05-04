<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		// Check for saved theme preference or use system preference
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		
		const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
		document.documentElement.classList.toggle('dark', isDarkMode);
	});
</script>

{@render children()}
