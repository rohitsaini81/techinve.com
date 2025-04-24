"use client";

import { ContactForm } from "@/components/contact-form";
import { EmployeeSpotlight } from "@/components/employee-spotlight";
import { HeroSection } from "@/components/hero-section";
import { ProjectShowcase } from "@/components/project-showcase";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Disc,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className="container">
        <div className="grid gap-12">
          {/* Updated projects section with background image */}
          <section
            id="projects"
            className="w-screen bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://www.crystaldynamics.com/content/uploads/2023/09/projects-projecthighlights-bg.png')",
            }}
          >
            {/* Added overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            {/* Added relative positioning and higher z-index to content */}
            <div className="w-full relative z-10">
              <h2 className="text-3xl font-semibold mt-8 mb-6 text-center text-white">
                Our Projects
              </h2>
              <ProjectShowcase />
            </div>
          </section>

          {/* Updated team section with background image */}
          <section
            id="team"
            className="py-12 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://www.crystaldynamics.com/content/uploads/2023/10/homepage-featuredgames-bg.png')",
            }}
          >
            {/* Added overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            {/* Added relative positioning and higher z-index to content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mt-8 mb-6 text-center text-white">
                Meet Our Team
              </h2>
              <EmployeeSpotlight />
            </div>
          </section>

          {/* News and Blog Section */}
          <section
            id="news"
            className="w-screen h-screen bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://www.crystaldynamics.com/content/uploads/2023/09/elementDesktopBackground-gray-reupload.png')",
            }}
          >
            {/* Overlay for text readability (optional) */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="w-full relative z-10">
              <h2 className="text-3xl font-semibold mt-8 mb-6 text-center text-white">
                News and Blog
              </h2>
              {/* Add your news and blog content here */}
              <div className="container mx-auto px-4 py-8">
                {/* News Item 1 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Exciting New Partnership Announced!
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We are thrilled to announce our new partnership with
                    Innovatech Solutions. This collaboration will...
                  </p>
                  <Link
                    href="#"
                    className="text-accent hover:text-accent-foreground"
                  >
                    Read More
                  </Link>
                </div>

                {/* News Item 2 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Tech Inventory Wins Industry Award
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Tech Inventory is proud to announce that we have been
                    awarded the "Innovation in Tech" award...
                  </p>
                  <Link
                    href="#"
                    className="text-accent hover:text-accent-foreground"
                  >
                    Read More
                  </Link>
                </div>

                {/* Blog Post 1 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    The Future of AI in Business
                  </h3>
                  <p className="text-gray-300 mb-4">
                    In our latest blog post, we explore the transformative
                    potential of AI in various business sectors...
                  </p>
                  <Link
                    href="#"
                    className="text-accent hover:text-accent-foreground"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Updated Contact Section */}
          <section id="contact" className="py-12 relative h-screen">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Contact Us
            </h2>

            <div className="h-full md:flex md:items-stretch">
              {/* Left Side Image */}
              <div className="md:w-1/2 h-full flex items-center justify-center overflow-hidden">
                <img
                  src="https://www.crystaldynamics.com/content/uploads/2023/09/29802390366_73ec226624_k-1.jpg"
                  alt="Contact Us"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right Side with Background Image and Overlay */}
              <div
                className="md:w-1/2 h-full bg-cover bg-center relative flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('https://www.crystaldynamics.com/content/uploads/2023/08/connectwithus-text-bg.jpg')",
                }}
              >
                <div className="bg-black bg-opacity-70 text-white rounded-xl p-6 shadow-lg w-11/12 max-w-xl">
                  <div className="flex flex-wrap gap-4 justify-center text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center hover:text-blue-400 transition-colors"
                    >
                      <Facebook className="mr-2 h-5 w-5" /> Facebook
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center hover:text-pink-400 transition-colors"
                    >
                      <Instagram className="mr-2 h-5 w-5" /> Instagram
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center hover:text-sky-400 transition-colors"
                    >
                      <Twitter className="mr-2 h-5 w-5" /> X-Tweeter
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center hover:text-red-400 transition-colors"
                    >
                      <Youtube className="mr-2 h-5 w-5" /> YouTube
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center hover:text-gray-400 transition-colors"
                    >
                      <Disc className="mr-2 h-5 w-5" /> Discord
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Redesigned footer section */}
      <footer
        id="about"
        className="bg-cover bg-center text-white py-12"
        style={{
          backgroundImage:
            "url('https://www.crystaldynamics.com/wp-content/themes/unlikely-hero/assets/dist/ob-crystald-footer-bg.jpg')",
        }}
      >
        <div className="container mx-auto">
          <div className="md:flex md:justify-between md:items-start">
            {/* Studio Section */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Studio</h3>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="hover:text-gray-300">
                  Projects
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  News & Community
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  Careers
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  Support
                </Link>
              </div>
            </div>

            {/* Legal Section */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="hover:text-gray-300">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  Privacy Notice
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  Cookie Notice
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  Fan Content Policy
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  Unsolicited Submission Policy
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="hover:text-gray-300">
                  Contact Us
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  Avoiding Job Scams
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright Information - modified to be on one line */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2025 Tech Inventory. Tech Inve™ is owned and operated by Rohit
            Saini. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
