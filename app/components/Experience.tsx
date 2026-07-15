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
      className="bg-neutral-50 py-36"
    >
      <div className="container">

        <SectionTitle
          eyebrow="Journey"
          title="My learning and professional journey."
          description="Every experience has helped me improve my technical skills, problem-solving ability, and passion for building software."
        />

        <div className="mt-24">

          <TimelineItem
            year="2026"
            icon={GraduationCap}
            title="Bachelor of Science in Computer Engineering"
            company="Cebu Institute of Technology - University"
            description="Graduated with a strong foundation in software engineering, embedded systems, networking, and computer architecture while completing several web and IoT projects."
          />

          <TimelineItem
            year="2026"
            icon={Briefcase}
            title="Web Development Intern"
            company="Knowles Training Institute"
            description="Assisted in website development using WordPress, supported project coordination, attended planning meetings, and helped review intern outputs."
          />

          <TimelineItem
            year="2026"
            icon={Cpu}
            title="Capstone Project"
            company="Automated Corn Shredder"
            description="Designed and developed an IoT-based corn shredding machine using ESP32, Firebase Realtime Database, load cell monitoring, and a mobile application."
          />

          <TimelineItem
            year="Present"
            icon={Code2}
            title="Personal Projects"
            company="Continuous Learning"
            description="Building modern full-stack applications using Next.js, MongoDB, Firebase, and Tailwind CSS while continuously improving UI/UX and software engineering skills."
          />

        </div>

      </div>
    </section>
  );
}