<!-- src/routes/+page.svelte -->
<script>
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navigationheader.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Heatmap from '$lib/components/Heatmap.svelte';
	import LineChart from '$lib/components/LineChart.svelte';
	import StatisticsCard from '$lib/components/StatisticsCard.svelte';
	import TrafficChart from '$lib/components/TrafficChart.svelte';
	import ProfitChart from '$lib/components/ProfitChart.svelte';
	import LeadsChart from '$lib/components/LeadsChart.svelte';
	import BatchStack from '$lib/components/BatchStack.svelte';
	import TestimonialsStack from '$lib/components/TestimonialsStack.svelte';
	import Education from '$lib/components/Education.svelte';

	let isDarkMode = true;

	onMount(() => {
		// Check for saved theme preference or use system preference
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
		document.documentElement.classList.toggle('dark', isDarkMode);
	});
</script>

<div class="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900">
	<Navbar />
	<main class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<Hero />
		<About />
		
	</main>
	<Education />
		<Experience />
		<Projects />
		<Heatmap />
		
			<LineChart />
			<TrafficChart />
		

		<Contact />
	<StatisticsCard />
	<BatchStack />
	<TestimonialsStack />
	<Footer />
</div>
