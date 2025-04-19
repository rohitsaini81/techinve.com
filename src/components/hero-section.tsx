
export function HeroSection() {
  return (
    <section className="hero bg-primary text-primary-foreground py-20 rounded-xl shadow-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Tech Inventory</h1>
        <p className="text-xl mb-8">
          Innovative Game, Software, and Website Development
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
