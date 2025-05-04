<!-- src/lib/components/Experience.svelte -->
<script>
	import { education } from '$lib/data/education';

	// Variables to track mouse position for the glowing effect
	let educationCards = [];

	function handleMouseMove(event, index) {
		const card = educationCards[index];
		if (!card) return;

		const rect = card.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		card.style.setProperty('--mouse-x', `${x}px`);
		card.style.setProperty('--mouse-y', `${y}px`);
	}
</script>

<section id="experience" class=" py-20 dark:bg-white">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-12 text-center text-3xl font-bold text-gray-900 ">Education</h2>
		<div class="space-y-8">
			{#each education as exp, i}
			<div 
			class="card rounded-lg bg-white p-6 shadow dark:bg-gray-200"
			bind:this={educationCards[i]}
			on:mousemove={(e) => handleMouseMove(e, i)}
		>
			<div class="card-content flex items-center">
				<!-- Company Logo on the left -->
				<div class="mr-6 flex-shrink-0">
					{#if exp.logo}
						<img src={exp.logo} alt="{exp.company} logo" class="h-16 w-16 object-contain" />
					{:else}
						<!-- Fallback logo placeholder -->
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-gray-500 dark:bg-gray-600 dark:text-gray-300">
							{exp.company.charAt(0)}
						</div>
					{/if}
				</div>
				
				<!-- Text content on the right -->
				<div class="flex-1">
					<h3 class="text-xl font-semibold text-gray-900">{exp.title}</h3>
					<div class="mb-2 flex items-center">
						<span class="text-gray-700  font-medium">{exp.company}</span>
						<span class="mx-2 text-gray-500 ">•</span>
						<span class="text-gray-500 ">{exp.period}</span>
					</div>
					<p class="text-gray-500  leading-relaxed">{exp.description}</p>
				</div>
				
			</div>
		</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.card {
		position: relative;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
		overflow: hidden;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
	}

	.card::before,
	.card::after {
		border-radius: inherit;
		content: '';
		height: 100%;
		left: 0px;
		opacity: 0;
		position: absolute;
		top: 0px;
		transition: opacity 500ms;
		width: 100%;
		pointer-events: none;
	}

	.card::before {
		background: radial-gradient(
			500px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.15),
			transparent 20%
		);
		z-index: 3;
	}

	.card::after {
		background: radial-gradient(
			200px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.5),
			transparent 20%
		);
		z-index: 1;
	}

	.card:hover::before,
	.card:hover::after {
		opacity: 1;
	}

	.card-content {
		position: relative;
		z-index: 2;
	}

	/* Dark mode adjustments */
	:global(.dark) .card::before {
		background: radial-gradient(
			500px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.15),
			transparent 20%
		);
	}

	:global(.dark) .card::after {
		background: radial-gradient(
			200px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.2),
			transparent 20%
		);
	}
</style>
