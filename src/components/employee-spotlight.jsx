'use client';

import {useEffect, useState} from 'react';
import {User, Mail, Phone} from 'lucide-react';
import {summarizeEmployeeBio} from '@/ai/flows/summarize-employee-bio';

export function EmployeeSpotlight() {
  const pubUrl= "https://pub-99e7d5ea040a44eeba75ec64a368f73b.r2.dev/"
  const [employees, setEmployees] = useState([
    {
      name: 'Rohit Saini',
      title: 'CEO',
      bio: 'Rohit Saini is the CEO of Tech Inventory. He has over 20 years of experience in the tech industry.',
      imageUrl: `${pubUrl}scientist.tech-20250313-0001.jpg`,
      email: 'rohit1322saini@gmail.com',
      phone: '+91-8199889776',
      summary: '', // Placeholder for the summary
    },
    {
      name: 'Abhishek and Vinay',
      title: 'Lead Developer',
      bio: 'Abhishek and Vinay are the Lead Developer at Tech Inventory. they has been with the company for 10 years.',
      imageUrl: `${pubUrl}abhishek0001.jpg`,
      email: 'rohit1322saini@gmail.com',
      phone: '555-987-6543',
      summary: '', // Placeholder for the summary
    },
    {
      name: 'Nikhil Dhiman',
      title: 'Designer',
      bio: 'Nikhil is a Designer and Video Editor at Tech Inventory. He has been with the company for 5 years.',
      imageUrl: `${pubUrl}nikhil0001.jpg`,
      email: 'rohit1322saini@gmail.com',
      phone: '555-246-8012',
      summary: '', // Placeholder for the summary
    },
  ]);

  useEffect(() => {
    // Fetch summaries for each employee
    async function fetchSummaries() {
      const updatedEmployees = await Promise.all(
        employees.map(async employee => {
          const summaryResult = await summarizeEmployeeBio({bio: employee.bio});
          return {...employee, summary: summaryResult?.summary || 'Summary not available.'};
        })
      );
      setEmployees(updatedEmployees);
    }

    fetchSummaries();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {employees.map((employee, index) => (
        <div
          key={index}
          className="card p-6 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105"
        >
          <img
            src={employee.imageUrl}
            alt={employee.name}
            className="rounded-full w-32 h-32 mb-4 object-cover shadow-md"
          />
          <h3 className="text-xl font-semibold text-center">{employee.name}</h3>
          <p className="text-muted-foreground text-center mb-2">{employee.title}</p>
          <p className="text-gray-700 mt-2 text-center">
            {employee.summary || 'Loading summary...'}
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href={`mailto:${employee.email}`}
              className="text-accent hover:text-accent-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={`tel:${employee.phone}`}
              className="text-accent hover:text-accent-foreground transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            {/* You can add more contact methods as needed */}
          </div>
        </div>
      ))}
    </div>
  );
}

    