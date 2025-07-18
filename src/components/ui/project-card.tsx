

import Image from "next/image";
import { AvatarGroup } from "../ui/avatar-group";
import { Badge } from "../ui/badge";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { LuLink } from "react-icons/lu";

export default function ProjectCard() {
  return (
    <div className="mx-auto flex w-2/3 border">
      <div className="">
        <Image
          src={"./placeholder.svg"}
          alt="placeholder"
          width={300}
          height={100}
        />
        <div className="mb-10 flex w-full flex-row items-center justify-center">
          {/* <AvatarGroup items={""} /> */}
        </div>
      </div>
      <div>
        <h1>Title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          veritatis ea commodi excepturi enim facere accusantium tempora
          inventore ipsum corporis! Nemo, quia officia.
        </p>
        <div>
          <Badge variant={"outline"}>React JS</Badge>
        </div>
        <div className="flex">
          <Link href={"#"}>
            <SiGithub />
          </Link>
          <Link href={"#"}>
            <LuLink />
          </Link>
        </div>
      </div>
    </div>
  );
}
