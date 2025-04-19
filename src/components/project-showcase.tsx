'use client';

export function ProjectShowcase() {
  const projects = [
    {
      title: 'Awesome Game',
      description:
        'A thrilling adventure game with stunning graphics and immersive gameplay.',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      title: 'Cool Software',
      description:
        'An innovative software solution designed to streamline workflows and enhance productivity.',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      title: 'Amazing Website',
      description:
        'A beautifully designed website that offers a seamless user experience and engaging content.',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      title: 'Cutting Edge App',
      description:
        'The application incorporates advanced AI for a personalized user experience, adapting dynamically to user preferences and behaviors.',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      title: 'Revolutionary Platform',
      description:
        'This platform is set to disrupt the industry with its novel approach to data management, providing unparalleled insights and efficiency.',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      title: 'Innovative Solution',
      description:
        'A groundbreaking solution that addresses key challenges in renewable energy, promoting sustainability and reducing carbon footprint.',
      imageUrl: 'https://picsum.photos/400/300',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="card p-6 rounded-lg shadow-md flex flex-col overflow-hidden transition-transform hover:scale-105"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="rounded-t-lg mb-4 object-cover h-48 w-full"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm flex-grow">
              {project.description}
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center text-accent hover:text-accent-foreground font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

    