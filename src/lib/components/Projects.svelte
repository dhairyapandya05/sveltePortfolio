<script>
    import ProjectCard from './ProjectCard.svelte';
    
    // Project data from resume
    const projects = [
        {
            title: 'Zeep Service (Commuting Application)',
            description: 'A comprehensive commuting application with voice interaction, efficient request handling, and WhatsApp integration.',
            points: [
                'Delivered a hands-free user experience by enabling voice interaction through Google Assistant, including creating an internal release on Google Play Store and implementing fulfillment intents to process voice commands.',
                'Managed up to 1,000 concurrent requests per function instance by deploying HTTP, Firestore, and Pub/Sub-triggered cron jobs. Reengineered the student-driver matching logic, optimizing server-side processing.',
                'Optimized image storage by 80% using Firebase Resize Images and reduced Firestore storage by 52% through Bitly URL shortening, improving cost efficiency.',
                'Developed a large-scale distributed WhatsApp chatbot using Gupshup and Quickwork, efficiently handling 4 out of 5 HTTP and WhatsApp quick button replies.'
            ],
            techStack: ['Java', 'Kotlin', 'Firebase', 'GCP', 'NodeJS', 'Quick-Work'],
            projectLink: 'https://github.com/dhairyapandya05/Van-Service',
            demoLink: 'https://youtu.be/m9zD_PR5E1Q',
            extraLinks: [
                { name: 'LLD', url: 'https://dev.to/dhairyapandya/zeep-service-your-travel-partnerlow-level-design-61' }
            ],
            duration: 'January 2019',
            imageSrc: 'zeepserviceproject.png' // Replace with actual image path
        },
        {
            title: 'Anato AR (Immersive Human Anatomy in Augmented Reality)',
            description: 'An augmented reality application for interactive human anatomy learning with high performance and intuitive controls.',
            points: [
                'Enhanced AR immersion with real-time light adaptation and 60 FPS dynamic shadows using OpenGL ES, supporting API 24+ and 97.4% device compatibility.',
                'Features 360° rotation, 200% zoom scaling, and real-time object repositioning for an intuitive learning experience.'
            ],
            techStack: ['Unity 3D', 'C#', 'Google ARCore'],
            projectLink: 'https://github.com/dhairyapandya05/HumanAnatomyUsingAR',
            demoLink: 'https://youtu.be/BYauAB3e5jw',
            duration: 'January 2019',
            imageSrc: '/path/to/anatoly-image.jpg' // Replace with actual image path
        }
    ];
</script>

<section class="py-16 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <h2 class="uppercase text-sm font-medium tracking-wider text-gray-700 mb-2">PORTFOLIO</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">Projects</h3>
            <p class="text-gray-700 max-w-3xl mx-auto">
                A showcase of my key software development projects. Each demonstrates unique 
                technical skills, innovation, and problem-solving capabilities.
            </p>
        </div>
        
        <!-- Projects List -->
        <div class="space-y-16">
            {#each projects as project, index}
                <ProjectCard 
                    title={project.title}
                    description={project.description}
                    points={project.points}
                    techStack={project.techStack}
                    projectLink={project.projectLink}
                    demoLink={project.demoLink}
                    duration={project.duration}
                    imageSrc={project.imageSrc}
                    isReversed={index % 2 !== 0}
                />
            {/each}
        </div>
        
        <!-- Call to Action -->
        <div class="text-center mt-16">
            <a href="https://github.com/dhairyapandya05" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View More Projects On GitHub</span>
            </a>
        </div>
    </div>
</section>