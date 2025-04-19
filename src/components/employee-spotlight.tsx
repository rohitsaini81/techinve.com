
export function EmployeeSpotlight() {
  const employees = [
    {
      name: 'John Doe',
      title: 'CEO',
      bio: 'John is the CEO of Tech Inventory.',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      name: 'Jane Smith',
      title: 'Lead Developer',
      bio: 'Jane is the Lead Developer at Tech Inventory.',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      name: 'Alice Johnson',
      title: 'Designer',
      bio: 'Alice is a Designer at Tech Inventory.',
      imageUrl: 'https://picsum.photos/200/300',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {employees.map((employee, index) => (
        <div
          key={index}
          className="card p-4 rounded-lg shadow-md flex flex-col items-center"
        >
          <img
            src={employee.imageUrl}
            alt={employee.name}
            className="rounded-full w-32 h-32 mb-4"
          />
          <h3 className="text-xl font-semibold">{employee.name}</h3>
          <p className="text-gray-600">{employee.title}</p>
          <p className="text-gray-700 mt-2 text-center">{employee.bio}</p>
        </div>
      ))}
    </div>
  );
}
