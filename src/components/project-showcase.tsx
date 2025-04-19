
export function ProjectShowcase() {
  const projects = [
    {
      title: 'Awesome Game',
      description: 'A very awesome game.',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      title: 'Cool Software',
      description: 'A very cool software.',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      title: 'Amazing Website',
      description: 'A very amazing website.',
      imageUrl: 'https://picsum.photos/400/300',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="card p-4 rounded-lg shadow-md flex flex-col"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-700 mt-2">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
