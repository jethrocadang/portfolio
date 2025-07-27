"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { AuroraText } from "../ui/aurora-text";
import { motion } from "motion/react";

export function ContactInfoSection() {
  return (
    <section
      id="contact-info"
      className="relative flex min-h-screen items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex max-w-xl flex-col items-center justify-center space-y-6 p-6 text-center"
      >
        <h1 className="text-4xl font-bold tracking-wide md:text-5xl">
          Say <AuroraText>Hello!</AuroraText>
        </h1>

        <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
          I&apos;m open to exciting projects and new roles. Drop me a message
          anytime, or explore my experience and skills through my credentials.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="mailto:jethrocadang@gmail.com"
            className={buttonVariants({ variant: "default" })}
          >
            Send Email
          </Link>
          <Link
            href="/jethrocadang.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            View Credentials
          </Link>
        </div>

        <p className="text-muted-foreground pt-4 text-sm">
          Prefer to connect directly?{" "}
          <a
            href="mailto:jethrocadang@gmail.com"
            className="text-primary font-medium underline underline-offset-2"
          >
            jethrocadang@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
