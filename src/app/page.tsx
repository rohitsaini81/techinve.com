
import {ContactForm} from '@/components/contact-form';
import {EmployeeSpotlight} from '@/components/employee-spotlight';
import {HeroSection} from '@/components/hero-section';
import {ProjectShowcase} from '@/components/project-showcase';

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid gap-12">
        <HeroSection />

        <section id="projects" className="py-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Projects
          </h2>
          <ProjectShowcase />
        </section>

        <section id="team" className="py-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Meet Our Team
          </h2>
          <EmployeeSpotlight />
        </section>

        <section id="about" className="py-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
          <div className="prose mx-auto">
            <p>
              Tech Inventory is a leading innovator in game, software, and
              website development. Our mission is to create cutting-edge digital
              experiences that inspire and engage users worldwide.
            </p>
            <p>
              Founded in 2024, we have a rich history of delivering high-quality
              solutions to our clients, ranging from indie game studios to
              large-scale enterprises.
            </p>
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Us
          </h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
