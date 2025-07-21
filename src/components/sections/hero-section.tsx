"use client";

import { motion } from "motion/react";
import { BgGridPattern } from "../ui/bg-grid-pattern";
import { cn } from "@/lib/utils";

// Animation variants for better maintainability
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

export const staggerItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
} as const;

// Scroll-triggered animation variants
export const scrollReveal = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
} as const;

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-between px-6 pt-20 lg:px-8">
      <BgGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-50 inset-y-[-45%] h-[200%] skew-y-6",
        )}
      />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="flex flex-col justify-center lg:max-w-2xl"
      >
        <motion.p
          variants={staggerItem}
          className="text-primary text-sm font-semibold tracking-[0.2em] uppercase"
        >
          Hello! I am,
        </motion.p>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollReveal}
          className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
        >
          Jethro R. Cadang.
        </motion.h1>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollReveal}
          transition={{ delay: 0.2 }}
          className="from-primary mb-2.5 bg-gradient-to-b to-green-500 bg-clip-text text-4xl lg:5xl font-bold text-transparent"
        >
          Fullstack Developer
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollReveal}
          transition={{ delay: 0.4 }}
          className="text-accent-foreground/80 max-w-xl text-sm leading-tight mb-5"
        >
          Aspiring Software Engineer dedicated to mastering the art of web
          development. I&apos;m actively building applications that challenge me
          to grow while preparing for my next career milestone.
        </motion.p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollReveal}
          transition={{ delay: 0.6 }}
          className="pt-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group mt-8 w-max rounded border border-white/10 bg-gradient-to-b from-[#27272741_0.9%] to-[#171717] hover:border-white/20 hover:shadow-[inset_0_0_10px_#ffffff1a] p-2.5"
            aria-label="View Jethro's portfolio work"
          >
            <span className="relative z-10">Get in touch</span> 
            <motion.div
              className="bg-primary-dark absolute inset-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}