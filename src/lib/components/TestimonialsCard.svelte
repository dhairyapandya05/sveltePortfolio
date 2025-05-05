<script>
	export let name = '';
	export let role = '';
	export let quote = '';
	export let imageSrc = '';
</script>

<!-- Testimonial Card -->
<div class="card h-92 flex flex-col items-center rounded-lg bg-gray-100 p-8 shadow-lg">
	<!-- Profile Image -->
	<div class="mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow">
		{#if imageSrc}
			<img src={imageSrc} alt={name} class="h-full w-full object-cover" />
		{:else}
			<!-- Default placeholder if no image provided -->
			<div class="flex h-full w-full items-center justify-center bg-gray-300">
				<span class="text-2xl text-gray-500">{name.charAt(0)}</span>
			</div>
		{/if}
	</div>

	<!-- Quote -->
	<div class="mb-6 text-center">
		<div class="relative italic text-gray-600">
			<span class="absolute -left-4 -top-2 font-serif text-4xl text-gray-400">"</span>
			<p class="text-gray-700">{quote}</p>
			<span class="inline-block font-serif text-4xl text-gray-400">"</span>
		</div>
	</div>

	<!-- Name and Role -->
	<div class="text-center">
		<h3 class="mb-1 text-xl font-medium text-indigo-600">{name}</h3>
		<p class="text-gray-600">{role}</p>
	</div>
</div>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0.25;
			transform: translateY(20px) scale(0.5);
		}
		to {
			opacity: 1;
			transform: translateY(0px) scale(1);
		}
	}

	.card {
		animation: fadeInUp forwards;
		animation-timeline: view();
		animation-timing-function: ease-in-out;
		animation-range: entry 0% cover 30%;
	}
</style>
