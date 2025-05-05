<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	export let src: string = '';
	export let title: string = 'LeetCode Batch';
	export let gitimage: string = '';
	export let description: string = '';
	let showTooltip = false;
	let cardElement: HTMLDivElement;

	function handleMouseMove(event: MouseEvent) {
		if (!cardElement) return;
		const rect = cardElement.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		cardElement.style.setProperty('--mouse-x', `${x}px`);
		cardElement.style.setProperty('--mouse-y', `${y}px`);
	}
</script>

<div
	bind:this={cardElement}
	class="card"
	role="button"
	on:mouseenter={() => (showTooltip = true)}
	on:mouseleave={() => (showTooltip = false)}
	on:mousemove={handleMouseMove}
>
	<div class="card-content">
		{#if src}
			<img {src} alt={title} class="card-image" />
		{:else}
			<div class="card-image placeholder">
				<span class="emoji">🏅</span>
			</div>
		{/if}
		<h3 class="card-title">{title}</h3>
	</div>

	{#if showTooltip && gitimage}
		<div class="tooltip">
			<img src={gitimage} alt={`${title} animation`} class="tooltip-image" />
		</div>
	{/if}
</div>

<style>
	:global(:root) {
		--bg-color: rgb(20, 20, 20);
		--card-color: rgb(23, 23, 23);
		--accent-color: rgb(254, 160, 22);
		--text-color: rgb(240, 240, 240);
		--border-color: rgba(255, 255, 255, 0.1);
	}

	.card {
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		cursor: pointer;
		display: flex;
		height: 180px;
		width: 160px;
		position: relative;
		border: 1px solid var(--border-color);
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
		overflow: hidden;
		animation: fadeInUp forwards;
		animation-timeline: view();
		animation-timing-function: ease-in-out;
		animation-range: entry 0% cover 30%;
	}

	.card:hover {
		transform: translateY(-4px) scale(1.02);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.card:hover::before,
	.card:hover::after {
		opacity: 1;
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
			100px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.5),
			transparent 20%
		);
		z-index: 1;
	}

	.card-content {
		background-color: var(--card-color);
		border-radius: inherit;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		inset: 1px;
		padding: 16px 10px;
		position: absolute;
		z-index: 2;
		height: calc(100% - 2px);
		text-align: center;
		gap: 12px;
	}

	.card-image {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		object-fit: cover;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	.placeholder {
		background: linear-gradient(135deg, rgba(30, 30, 30, 1), rgba(50, 50, 50, 1));
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.emoji {
		font-size: 2.5rem;
	}

	.card-title {
		font-size: 1rem;
		font-weight: 500;
		color: var(--text-color);
		margin: 0;
		max-width: 100%;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.3;
		height: 2.6em;
	}

	.tooltip {
		position: absolute;
		top: -120px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 50;
		background-color: #2a2f3a;
		padding: 6px;
		border-radius: 8px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		opacity: 0;
		animation: fadeIn 0.2s forwards;
	}

	.tooltip-image {
		width: 100px;
		height: 100px;
		object-fit: contain;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translate(-50%, 10px);
		}
		to {
			opacity: 1;
			transform: translate(-50%, 0);
		}
	}

	@media (max-width: 400px) {
		.card {
			height: 160px;
			width: 140px;
		}

		.card-image {
			width: 70px;
			height: 70px;
		}

		.card-title {
			font-size: 0.9rem;
		}
	}
	@keyframes fadeInUp {
		from {
			opacity: 0.25;
			transform: translateX(-100px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}
</style>
