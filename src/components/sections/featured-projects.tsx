"use client"
import { projects } from "../constants/constants";
import Section from "../layout/section-layout";
import ProjectCard from "../ui/project-card";
import SectionTitle from "../ui/section-title";

export default function FeaturedProjectsSection() {
  return (
    <Section id="projects">
      <div className="w-full p-6 space-y-5">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="flex flex-col items-center p-0  gap-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
