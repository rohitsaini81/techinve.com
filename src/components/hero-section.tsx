'use client';

export function HeroSection() {
  return (
    <section
      className="relative py-32 rounded-xl shadow-lg overflow-hidden"
    >
      <video
        src="https://www.crystaldynamics.com/content/uploads/2023/08/CD_Website_Header_Final_720p_1.4mbps-1-1.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
        onError={(e) => {
          console.error("Video failed to load", e);
        }}
      />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-md z-1"></div>
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

