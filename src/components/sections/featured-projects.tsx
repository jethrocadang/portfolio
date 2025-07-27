"use client";

import { projects } from "../constants/constants";
import Section from "../layout/section-layout";
import ProjectCard from "../ui/project-card";
import SectionTitle from "../ui/section-title";
import { motion } from "motion/react";

export default function FeaturedProjectsSection() {
  return (
    <Section id="projects" className="bg-transparent py-0">
      <div className="w-full p-6 space-y-5">
        <SectionTitle>Featured Projects</SectionTitle>

        <div className="flex flex-col items-center gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
