"use client";

import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

import {
  Code2,
  Database,
  Cpu,
  Wrench,
} from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-32 bg-neutral-50"
    >
      <div className="container">

        <div className="text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
    Technical Skills
  </p>

  <SectionTitle title="Technologies I use to build modern web applications and IoT solutions." />

  <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600">
    I enjoy developing full-stack web applications, integrating hardware with
    software, and creating responsive, user-focused digital experiences.
  </p>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">

          <SkillCard
            icon={Code2}
            title="Frontend Development"
            description="Creating responsive, modern, and user-friendly interfaces."
            skills={[
              "Next.js",
              "React.js",
              "TypeScript",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind CSS",
            ]}
          />

          <SkillCard
            icon={Database}
            title="Backend & Database"
            description="Building scalable backend services and managing application data."
            skills={[
              "Node.js",
              "MongoDB",
              "Firebase",
            ]}
          />

          <SkillCard
            icon={Cpu}
            title="Embedded Systems & IoT"
            description="Developing hardware-integrated solutions for real-world applications."
            skills={[
              "Arduino",
              "Hardware Interfacing",
              "IoT Development",
              "C & C# Programming",
            ]}
          />

          <SkillCard
            icon={Wrench}
            title="Tools & Technologies"
            description="Tools and platforms I use throughout the development process."
            skills={[             
              "GitHub",
              "Visual Studio Code",
              "Arduino IDE",
              "WordPress",
            ]}
          />

        </div>

      </div>
    </section>
  );
}