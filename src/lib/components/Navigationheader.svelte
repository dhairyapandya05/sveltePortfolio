<script>
	let darkMode = false;
	let isOpen = false;

	const toggleDarkMode = () => {
		darkMode = !darkMode;
		document.documentElement.classList.toggle('dark', darkMode);
	};

	const toggleMenu = () => {
		isOpen = !isOpen;
	};
</script>

<nav class="fixed z-50 w-full bg-white shadow-sm transition-colors duration-300 dark:bg-gray-900">
	<div class="mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Branding -->
			<div class="flex items-center space-x-4">
				<button class="md:hidden" on:click={toggleMenu}>
					<svg
						class="h-6 w-6 text-gray-700 dark:text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<span class="text-xl font-bold text-gray-900 dark:text-white">Portfolio</span>
			</div>

			<!-- Desktop Nav -->
			<div class="hidden items-center space-x-6 md:flex">
				{#each [{ href: '#about', label: 'About' }, { href: '#education', label: 'Education' }, { href: '#experience', label: 'Experience' }, { href: '#projects', label: 'Projects' }, { href: '#coding', label: 'Competitive Coding' }, { href: '#testimonials', label: 'Testimonials' }, { href: '#contact', label: 'Contact' }] as navItem}
					<a
						href={navItem.href}
						class="text-lg font-medium text-gray-900 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
						>{navItem.label}</a
					>
				{/each}
				<button on:click={toggleDarkMode} class="rounded-full p-2 focus:outline-none">
					{#if darkMode}
						<svg
							class="h-5 w-5 text-yellow-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 4.05l.71.71M21 12h-1M4 12H3m15.66 4.95l-.71-.71M4.76 19.24l.71-.71M12 5a7 7 0 000 14a7 7 0 000-14z"
							/>
						</svg>
					{:else}
						<svg
							class="h-5 w-5 text-gray-700 dark:text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Sidebar Drawer -->
	<div
		class={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white dark:bg-gray-800 ${
			isOpen ? 'translate-x-0' : '-translate-x-full'
		} transition-transform duration-300 ease-in-out md:hidden`}
	>
		<div class="flex items-center justify-between px-4 py-4">
			<span class="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
			<button on:click={toggleMenu}>
				<svg
					class="h-6 w-6 text-gray-700 dark:text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
		<nav class="flex flex-col space-y-4 px-6 py-4">
			{#each [{ href: '#about', label: 'About' }, { href: '#education', label: 'Education' }, { href: '#experience', label: 'Experience' }, { href: '#projects', label: 'Projects' }, { href: '#coding', label: 'Coding' }, { href: '#testimonials', label: 'Testimonials' }, { href: '#contact', label: 'Contact' }] as navItem}
				<a
					href={navItem.href}
					class="text-base font-medium text-gray-800 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
					on:click={() => (isOpen = false)}>{navItem.label}</a
				>
			{/each}
		</nav>
	</div>
</nav>
