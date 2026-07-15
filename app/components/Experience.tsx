"use client";

import {
  GraduationCap,
  Briefcase,
  Cpu,
  Code2,
} from "lucide-react";

import SectionTitle from "./SectionTitle";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-neutral-50 py-20 sm:py-24 lg:py-32"
    >
      <div className="container">

       <div className="text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
    Professional Journey
  </p>

  <SectionTitle title="My education, internship, and continuous learning." />

  <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600">
    Each milestone has strengthened my skills in software development,
    embedded systems, and problem-solving while preparing me for
    real-world engineering challenges.
  </p>
</div>

        <div className="mt-20">

          <TimelineItem
            year="2024"
            icon={Briefcase}
            title="IT Monitoring Intern"
            company="Knowles Training Institute"
            description="Performed quality assurance on AI-generated outputs, assisted in onboarding and mentoring interns, participated in project coordination meetings, and developed a responsive WordPress website featuring a landing page and booking functionality."
          />

          <TimelineItem
            year="2025"
            icon={Cpu}
            title="Capstone Project"
            company="Automated Corn Shredder"
            description="Designed and developed an IoT-enabled automated corn shredder that integrates hardware and software for real-time monitoring. The project utilized Arduino-based hardware, sensors, and a mobile application to improve operational efficiency and monitoring."
          />

          <TimelineItem
            year="2026"
            icon={GraduationCap}
            title="Bachelor of Science in Computer Engineering"
            company="Cebu Institute of Technology – University"
            description="Graduated with a strong foundation in software engineering, embedded systems, networking, computer architecture, and IoT while completing multiple academic and personal software development projects."
          />

          <TimelineItem
            year="Present"
            icon={Code2}
            title="Open to Opportunities"
            company="Entry-Level Software Engineer • Full Stack Developer • IoT Developer"
            description="Currently building modern web applications using Next.js, React, Node.js, MongoDB, and Firebase while continuously expanding my knowledge in embedded systems, IoT, and responsive UI/UX design. Actively seeking opportunities to contribute, grow, and create impactful software solutions."
          />

        </div>

      </div>
    </section>
  );
}