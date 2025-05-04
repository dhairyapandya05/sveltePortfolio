<script>
    export let name = '';
    export let role = '';
    export let quote = '';
    export let imageSrc = '';
</script>

<div class="bg-gray-100 p-8 rounded-lg flex flex-col items-center h-92">
    <!-- Profile Image -->
    <div class="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow">
        {#if imageSrc}
            <img src={imageSrc} alt={name} class="w-full h-full object-cover" />
        {:else}
            <!-- Default placeholder if no image provided -->
            <div class="w-full h-full bg-gray-300 flex items-center justify-center">
                <span class="text-gray-500 text-2xl">{name.charAt(0)}</span>
            </div>
        {/if}
    </div>
    
    <!-- Quote -->
    <div class="text-center mb-6">
        <div class="text-gray-600 italic relative">
            <span class="text-4xl font-serif text-gray-400 absolute -left-4 -top-2">"</span>
            <p class="text-gray-700">{quote}</p>
            <span class="text-4xl font-serif text-gray-400 inline-block">"</span>
        </div>
    </div>
    
    <!-- Name and Role -->
    <div class="text-center">
        <h3 class="text-green-600 font-medium text-xl mb-1">{name}</h3>
        <p class="text-gray-600">{role}</p>
    </div>
</div>