"use client";

import { motion, useMotionTemplate, useMotionValue, MotionProps } from "motion/react";
import React, { useCallback, useEffect, useRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

interface ColoredBorderProps extends MotionProps, Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export const ColoredBorder = forwardRef<HTMLDivElement, ColoredBorderProps>(
  ({
    children,
    className,
    gradientSize = 200,
    gradientColor = "#32a852",
    gradientOpacity = 0.8,
    gradientFrom = "#32a852",
    gradientTo = "#32a852",
    ...motionProps
  }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(-gradientSize);
    const mouseY = useMotionValue(-gradientSize);

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        const currentRef = ref && 'current' in ref ? ref.current : cardRef.current;
        if (currentRef) {
          const { left, top } = currentRef.getBoundingClientRect();
          const clientX = e.clientX;
          const clientY = e.clientY;
          mouseX.set(clientX - left);
          mouseY.set(clientY - top);
        }
      },
      [mouseX, mouseY, ref],
    );

    const handleMouseOut = useCallback(
      (e: MouseEvent) => {
        if (!e.relatedTarget) {
          document.removeEventListener("mousemove", handleMouseMove);
          mouseX.set(-gradientSize);
          mouseY.set(-gradientSize);
        }
      },
      [handleMouseMove, mouseX, gradientSize, mouseY],
    );

    const handleMouseEnter = useCallback(() => {
      document.addEventListener("mousemove", handleMouseMove);
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }, [handleMouseMove, mouseX, gradientSize, mouseY]);

    useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseout", handleMouseOut);
      document.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseout", handleMouseOut);
        document.removeEventListener("mouseenter", handleMouseEnter);
      };
    }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

    useEffect(() => {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }, [gradientSize, mouseX, mouseY]);

    const gradientBackground = useMotionTemplate`
      radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom}, 
      ${gradientTo}, 
      var(--border) 100%
      )
    `;

    const hoverBackground = useMotionTemplate`
      radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
    `;

    const content = (
      <>
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-border duration-300 group-hover:opacity-100"
          style={{ background: gradientBackground }}
        />
        <div className="absolute inset-px rounded-[inherit] bg-background" />
        <motion.div
          className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: hoverBackground,
            opacity: gradientOpacity,
          }}
        />
        <div className="relative">{children}</div>
      </>
    );

    const commonProps = {
      ref: ref || cardRef,
      className: cn("group relative rounded-[inherit]", className),
      ...motionProps,
    };

    return (
      <motion.div {...commonProps}>
        {content}
      </motion.div>
    );
  }
);

ColoredBorder.displayName = "ColoredBorder";