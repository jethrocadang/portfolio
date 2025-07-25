"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import { technologies } from "../constants/constants";
import { ColoredBorder } from "../ui/colored-border";
import SectionTitle from "../ui/section-title";
import Section from "../layout/section-layout";

export default function TechnologiesSection() {
  const [isContainerHovered, setIsContainerHovered] = useState(false);


  const [currentTech, setCurrentTech] = useState<{
    name: string;
    icon: IconType;
    color: string;
  } | null>(null);

  return (
    <Section id="technologies">
      <div className="relative grid w-full gap- p-6">
        <div className="mb-5">
          <SectionTitle>Technologies</SectionTitle>
          <span className="text-textMuted text-xl font-normal">
            I&apos;ve worked with
          </span>
        </div>

        <div
          className="flex flex-wrap items-center gap-2"
          onMouseEnter={() => setIsContainerHovered(true)}
          onMouseLeave={() => {
            setIsContainerHovered(false);
            setCurrentTech(null);
          }}
        >
          {technologies.map((technology, index) => (
            <ColoredBorder
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: 0.2 + index * 0.04 }}
              key={index}
              className="bg-foreground/2 flex flex-col items-center justify-center gap-2 rounded-xl border p-4"
              onMouseEnter={() => {
                if (isContainerHovered) {
                  setCurrentTech(technology);
                }
              }}
            >
              <technology.icon
                className="size-[35px] transition-all duration-300"
                style={{
                  color:
                    currentTech === technology && isContainerHovered
                      ? technology.color
                      : "rgba(255, 255, 255, 0.8)",
                  opacity: !currentTech
                    ? 1
                    : currentTech === technology
                      ? 1
                      : 0.5,
                }}
              />
            </ColoredBorder>
          ))}
        </div>

        {currentTech && (
          <div className="absolute -top-[3rem] right-0 -z-10 grid gap-4 md:bottom-0">
            <p className="text-center text-2xl font-semibold text-white/10">
              {currentTech.name}
            </p>
            <currentTech.icon className="size-[200px] text-white/10 md:size-[300px]" />
          </div>
        )}
      </div>
    </Section>
  );
}
