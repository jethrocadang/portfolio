"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import { technologies } from "../constants/constants";

export default function TechnologiesSection() {
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [currentTech, setCurrentTech] = useState<{
    name: string;
    icon: IconType;
  } | null>(null);

  return (
    <section className="h-full bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Technologies & Tools
          </h2>
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              I&apos;ve explored and experimented with during my learning
              journey—each one a stepping stone toward deeper expertise.
            </p>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="flex flex-wrap gap-2.5">
          {technologies?.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="group h-16 min-w-16 cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
                onMouseEnter={() => {
                  setCurrentTech(tech);
                  setIsContainerHovered(true);
                }}
                onMouseLeave={() => {
                  setCurrentTech(null);
                  setIsContainerHovered(false);
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 text-xl text-gray-700 transition-colors duration-300 group-hover:text-blue-600">
                    <IconComponent />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Tech Display */}
        {currentTech && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-6 py-3">
              <div className="mr-3 text-2xl text-blue-600">
                <currentTech.icon />
              </div>
              <span className="text-lg font-medium text-blue-900">
                {currentTech.name}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
