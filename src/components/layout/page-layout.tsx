import { ReactNode } from "react";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="">
      <div>{children}</div>

      <div className="bg-green-500">
        <div>
          <SiGithub />
          <SiLinkedin />
          <SiFacebook />
        </div>
      </div>
    </div>
  );
}
