import { projects } from "../constants/constants";
import ProjectCard from "../ui/project-card";

export default function FeaturedProjectsSection() {
  return (
    <section className="mx-auto flex h-full flex-col items-center ">
      <div className="w-full max-w-6xl ">
        <h1 className="text-3xl font-bold">Featured Projects</h1>
        <div className="flex flex-col gap-2.5  px-2.5">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
