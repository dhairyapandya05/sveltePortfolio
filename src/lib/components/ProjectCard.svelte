<script>
    export let title = '';
    export let description = '';
    export let points = [];
    export let techStack = [];
    export let projectLink = '';
    export let demoLink = '';
    export let extraLinks = [];
    export let duration = '';
    export let imageSrc = '';
    export let isReversed = false;
</script>

<div class="project-card w-full my-10 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
    <div class="items-center flex flex-col md:flex-row {isReversed ? 'md:flex-row-reverse' : ''}">

        <!-- Image Section -->
        <div class="md:w-1/3 w-full p-4 round-3xl">
            <div class="h-fit w-full overflow-hidden round-3xl">
                {#if imageSrc}
                    <img src={imageSrc} alt={title}
                        class="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500" />
                {:else}
                    <div class="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center">
                        <span class="text-white text-xl font-bold text-center px-4">{title}</span>
                    </div>
                {/if}
            </div>
        </div>

        <!-- Content Section -->
        <div class="md:w-2/3 w-full p-6 md:p-8 flex flex-col justify-between">
            <div>
                <!-- Title & Duration -->
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <h3 class="text-2xl font-semibold text-gray-800">{title}</h3>
                    {#if duration}
                        <span class="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{duration}</span>
                    {/if}
                </div>

                <!-- Description -->
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

                <!-- Bullet Points -->
                {#if points.length > 0}
                    <ul class="mb-6 space-y-2 text-sm">
                        {#each points as point}
                            <li class="flex items-start">
                                <span class="text-green-500 mr-2 mt-1">✓</span>
                                <span class="text-gray-700">{point}</span>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>

            <!-- Tech Stack & Links -->
            <div>
                {#if techStack.length > 0}
                    <div class="mb-4">
                        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Tech Stack</h4>
                        <div class="flex flex-wrap gap-2">
                            {#each techStack as tech}
                                <span class="text-xs px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full border border-indigo-200 hover:bg-indigo-200 transition-colors">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>
                {/if}

                <!-- Action Links -->
                <div class="flex flex-wrap gap-3 mt-2">
                    {#if projectLink}
                        <a href={projectLink} target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                            GitHub
                        </a>
                    {/if}

                    {#if demoLink}
                        <a href={demoLink} target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Demo
                        </a>
                    {/if}

                    {#if extraLinks && extraLinks.length > 0}
                        {#each extraLinks as link}
                            <a href={link.url} target="_blank" rel="noopener noreferrer"
                                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                {link.name}
                            </a>
                        {/each}
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
