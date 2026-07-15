"use client";

import SectionTitle from "./SectionTitle";
import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-36"
    >
      <div className="container">

        <SectionTitle
          eyebrow="Featured Work"
          title="Projects I'm proud of."
          description="A selection of projects that showcase my experience in full-stack development, embedded systems, and user-focused design."
        />

        <ProjectShowcase
          title="Lab Borrowing System"
          subtitle="Featured Project"
          image="/projects/borrowing-system.png"
          description="A role-based inventory management platform with authentication, request approval workflows, borrower slips, and inventory tracking for educational laboratories."
          technologies={[
            "Next.js",
            "MongoDB",
            "JWT",
            "Tailwind",
            "TypeScript",
          ]}
          github="https://github.com/jusiemlee143"
        />

        <ProjectShowcase
          reverse
          title="Automated Corn Shredder"
          subtitle="Capstone Project"
          image="/projects/corn-shredder.png"
          description="An IoT-powered machine using ESP32, Firebase Realtime Database, load cell monitoring, and a mobile application to monitor shredding operations in real time."
          technologies={[
            "ESP32",
            "Firebase",
            "Arduino",
            "IoT",
            "Sensors",
          ]}
        />

        <ProjectShowcase
          title="Coffee Ally"
          subtitle="Business Website"
          image="/projects/coffee-ally.png"
          description="A modern landing page built for a local coffee business featuring responsive design, elegant UI, and smooth animations using Next.js."
          technologies={[
            "Next.js",
            "React",
            "Tailwind CSS",
          ]}
        />

        <ProjectShowcase
          reverse
          title="Safari Birthday Invitation"
          subtitle="Creative Project"
          image="/projects/safari-invitation.png"
          description="An interactive invitation website with playful animations, RSVP functionality, and a safari-inspired design created for a birthday celebration."
          technologies={[
            "Next.js",
            "Framer Motion",
            "Tailwind CSS",
          ]}
        />

      </div>
    </section>
  );
}