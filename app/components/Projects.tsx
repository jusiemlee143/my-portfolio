"use client";

import SectionTitle from "./SectionTitle";
import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-24 lg:py-32"
    >
      <div className="container">

        <div className="text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
    Featured Projects
  </p>

  <SectionTitle title="Projects that showcase my skills and experience." />

  <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600">
    These projects highlight my experience in full-stack web development,
    embedded systems, IoT, and creating practical software solutions.
  </p>
</div>

        <div className="mt-20 space-y-28">

          <ProjectShowcase
            title="Laboratory Borrowing System"
            subtitle="Full Stack Web Application"
            image="/projects/sample.png"
            description="A role-based laboratory equipment borrowing system that streamlines inventory management, borrowing requests, approval workflows, and borrower tracking for students and instructors."
            technologies={[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Tailwind CSS",
            ]}
            github="https://github.com/jusiemlee143"
          />

          <ProjectShowcase
            reverse
            title="CrowdFunding System"
            subtitle="Web Application"
            image="/projects/sample.png"
            description="A crowdfunding platform that enables users to create fundraising campaigns, securely authenticate accounts, and monitor donations in real time to support various community initiatives."
            technologies={[
              "JavaScript",
              "Node.js",
              "MongoDB",
              "Firebase",
            ]}
            github="https://github.com/jusiemlee143"
          />

          <ProjectShowcase
            title="Automated Smart Bin"
            subtitle="IoT Project"
            image="/projects/sample.png"
            description="An IoT-enabled smart waste management system that monitors bin capacity using ultrasonic sensors and provides real-time monitoring to improve waste collection efficiency."
            technologies={[
              "Arduino",
              "IoT",
              "Ultrasonic Sensor",
              "C Programming",
            ]}
          />

          <ProjectShowcase
            reverse
            title="Lee's Café Hub"
            subtitle="WordPress Website"
            image="/projects/sample.png"
            description="A responsive coffee shop website developed during my internship, featuring an interactive menu, modern landing page, and an easy-to-use stall booking system."
            technologies={[
              "WordPress",
              "HTML",
              "CSS",
              "Responsive Design",
            ]}
          />

          <ProjectShowcase
            title="Pet Store Management System"
            subtitle="Point of Sale System"
            image="/projects/sample.png"
            description="A desktop-based point-of-sale and inventory management system that handles product inventory, sales transactions, receipt printing, and sales reporting."
            technologies={[
              "C#",
              ".NET",
              "SQL",
            ]}
          />

        </div>

      </div>
    </section>
  );
}