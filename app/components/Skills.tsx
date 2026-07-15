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
      className="py-36 bg-neutral-50"
    >
      <div className="container">

        <SectionTitle
          eyebrow="Tech Stack"
          title="Technologies I use to build modern applications."
          description="I enjoy working across the full stack—from designing intuitive user interfaces to developing scalable backends and integrating IoT hardware."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          <SkillCard
            icon={Code2}
            title="Frontend"
            description="Building responsive, modern user interfaces."
            skills={[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "HTML",
              "CSS",
            ]}
          />

          <SkillCard
            icon={Database}
            title="Backend & Database"
            description="Developing APIs and managing data efficiently."
            skills={[
              "Node.js",
              "Firebase",
              "MongoDB",
              "Mongoose",
              "REST API",
              "JWT",
            ]}
          />

          <SkillCard
            icon={Cpu}
            title="Embedded Systems"
            description="Connecting hardware with software."
            skills={[
              "ESP32",
              "Arduino",
              "IoT",
              "Load Cell",
              "Sensors",
              "C",
            ]}
          />

          <SkillCard
            icon={Wrench}
            title="Tools"
            description="Software and platforms I use every day."
            skills={[
              "Git",
              "GitHub",
              "VS Code",
              "Arduino IDE",
              "Figma",
              "Postman",
            ]}
          />

        </div>

      </div>
    </section>
  );
}