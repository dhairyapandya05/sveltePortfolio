<script>
	import TestimonialsCard from "./TestimonialsCard.svelte";

    
    
    // Sample testimonial data
    const testimonials = [
        {
            name: 'Ronak Patel',
            role: 'Assistant Professor',
            quote: 'Dhairya is known for his honesty, politeness, and dedication, consistently delivering his best in a team. I am confident that his technical expertise, coupled with his strong work ethic, will make him a valuable asset to any organization.',
            imageSrc: 'ronakmotorola.jpg' // Replace with actual image path
        },
        {
            name: 'Martin Parmar',
            role: 'Assistant Professor',
            quote: 'I had the pleasure of working with Dhairya Pandya, an exceptionally skilled software developer with expertise in Data Structures, Algorithms, and C++. Dhairya is proficient in designing efficient algorithms, optimizing code, and building scalable solutions.',
            imageSrc: 'martinparmar.jpg' // Replace with actual image path
        },
        {
            name: 'Ronak Patel',
            role: 'Assistant Professor',
            quote: 'I had the pleasure of teaching Dhairya Pandya Java and Database Management Systems (DBMS), and I can confidently say that he is an exceptional student with a strong passion for learning and applying knowledge practically.',
            imageSrc: 'ronakdbms.jpg' // Replace with actual image path
        }
    ];
</script>

<section class="py-16 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
            <h2 class="uppercase text-sm font-medium tracking-wider text-gray-700 mb-2">TESTIMONIALS</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-green-600 mb-6">What Clients Say</h3>
            <p class="text-gray-700 max-w-3xl mx-auto">
                We place huge value on strong relationships and have seen the benefit they bring to our business. 
                Customer feedback is vital in helping us to get it right.
            </p>
        </div>
        
        <!-- Testimonials Grid -->
        <div class="flex flex-col md:flex-row gap-6">
            {#each testimonials as testimonial}
                <div class="flex-1">
                    <TestimonialsCard 
                        name={testimonial.name}
                        role={testimonial.role}
                        quote={testimonial.quote}
                        imageSrc={testimonial.imageSrc}
                    />
                </div>
            {/each}
        </div>
    </div>
</section>