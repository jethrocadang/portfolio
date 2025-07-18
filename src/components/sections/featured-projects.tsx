import ProjectCard from "../ui/project-card";

export default function FeaturedProjectsSection() {
  return (
    <section className="mx-auto flex h-full flex-col items-center border">
      <h1 className="text-3xl font-bold">Featured Projects</h1>
      <div className="flex flex-col gap-2.5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
