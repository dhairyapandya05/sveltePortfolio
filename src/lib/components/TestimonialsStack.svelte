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

<section id="testimonials" class="py-16 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
            <h2 class="uppercase text-sm font-medium tracking-wider text-gray-700 mb-2">RECOMMENDATIONS</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">What My Professors Say</h3>
            <p class="text-gray-700 max-w-3xl mx-auto">
                These testimonials from my esteemed professors reflect my dedication, technical skills, and commitment to excellence during my academic journey.
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