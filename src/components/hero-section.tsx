'use client';

export function HeroSection() {
  return (
    <section
      className="relative py-32 rounded-xl shadow-lg overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1605236420544-31ff570a4409?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-md"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Welcome to Tech Inventory
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Crafting Innovative Digital Experiences
        </p>
        <a
          href="#projects"
          className="bg-accent text-primary-foreground py-3 px-8 rounded-full font-semibold hover:bg-accent-foreground hover:text-primary transition-colors"
        >
          Explore Our Projects
        </a>
      </div>
    </section>
  );
}
