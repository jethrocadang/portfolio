import { projects } from "../constants/constants";
import ProjectCard from "../ui/project-card";

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="mx-auto flex h-full flex-col items-center w-full px-2 sm:px-4 py-8">
      <div className="w-full max-w-6xl ">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Featured Projects</h1>
        <div className="flex flex-col gap-4 px-0 sm:px-2.5">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
