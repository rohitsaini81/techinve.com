'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-transparent text-secondary-foreground py-4">
      {/* Added inline style for margin-left and increased font sizes */}
      <div 
        className="container mx-auto flex flex-wrap justify-between items-center" 
        style={{ marginLeft: '3em' }}
      >
        <Link href="/" className="text-3xl lg:text-4xl font-bold">
          Tech Inventory
        </Link>
        {/* Increased font size and added responsive padding for better spacing */}
        <div className="space-x-4 text-lg lg:text-xl mt-2 sm:mt-0">
          <Link href="#projects" className="relative group hover:text-accent transition-colors">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#team" className="relative group hover:text-accent transition-colors">
            Team
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="relative group hover:text-accent transition-colors">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="relative group hover:text-accent transition-colors">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
