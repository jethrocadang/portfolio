import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { LuLink } from "react-icons/lu";
// import { AvatarGroup } from "../ui/avatar-group";
import { Badge } from "../ui/badge";
import { IProject } from "../constants/constants";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-md transition hover:shadow-xl md:flex-row">
      {/* Image + Contributor Overlay */}
      <div className="group relative md:w-1/2">
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          width={600}
          height={400}
          className="h-64 w-full rounded-lg object-cover md:h-full"
        />
        {/* <div className="absolute  inset-0 flex items-end justify-end bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <AvatarGroup items={project.contributors} />
        </div> */}
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col justify-between p-4 md:p-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="border-zinc-700 bg-zinc-800 text-xs text-zinc-300 hover:bg-zinc-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-5 text-zinc-400">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-white"
            >
              <SiGithub className="text-xl" />
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-white"
            >
              <LuLink className="text-xl" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
