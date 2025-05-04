<!-- src/lib/components/Contact.svelte -->
<section id="contact" class="py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
		<form class="space-y-6">
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
						>Name</label
					>
					<input
						type="text"
						id="name"
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
					/>
				</div>
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
						>Email</label
					>
					<input
						type="email"
						id="email"
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
					/>
				</div>
			</div>
			<div>
				<label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>Message</label
				>
				<textarea
					id="message"
					rows="4"
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
				></textarea>
			</div>
			<button
				type="submit"
				class="w-full rounded-md bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700 md:w-auto"
			>
				Send Message
			</button>
		</form>
	</div>
</section>
