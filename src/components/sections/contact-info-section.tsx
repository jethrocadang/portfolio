import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function ContactInfoSection() {
  return (
    <section id="contact-info" className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-2.5">
        <h1 className="text-4xl font-bold">Get in Touch.</h1>
        <p className="text-center">
          Currently I am open for job offer, feel free to contact me via email
          or you can view my{" "}
          <Link
            href={"/jethrocadang_cv.pdf"}
            className="text-primary font-bold underline underline-offset-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            credentials.
          </Link>
          <br />
          Looking forward for your message!
        </p>
        <div className="space-x-2.5">
          <Link
            href={"mailto:jethrocadang@gmail.com"}
            className={buttonVariants({ variant: "default" })}
          >
            Send Email
          </Link>
        </div>
      </div>
    </section>
  );
}
