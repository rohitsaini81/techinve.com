'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-transparent text-secondary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Tech Inventory
        </Link>
        <div className="space-x-4">
          <Link href="#projects">Projects</Link>
          <Link href="#team">Team</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

