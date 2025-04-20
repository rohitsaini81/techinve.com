'use client';
 
export function HeroSection() {
  return (
    <section
      // Added h-screen for full viewport height and flex properties for centering
      className="relative flex items-center justify-center overflow-hidden h-screen"
      style={{
        margin: '0',
        padding: '0', 
        width: '100vw',
      }}
    >
      <video
        src="https://www.crystaldynamics.com/content/uploads/2023/08/CD_Website_Header_Final_720p_1.4mbps-1-1.mp4"
        autoPlay
        loop
        muted
        // Ensure video covers the entire section
        className="absolute inset-0 object-cover w-full h-full"
        onError={(e) => {
          console.error("Video failed to load", e);
        }}
      />
      {/* Optional: Added a subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-1"></div> 
      {/* Removed container class to allow full width centering, adjusted text alignment */}
      <div className="text-center relative z-10 p-4"> 
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Welcome to Tech Inventory
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
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

