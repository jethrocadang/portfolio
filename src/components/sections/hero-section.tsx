"use client";

import { Hexagon } from "lucide-react";
import { motion } from "motion/react";

// Animation variants for better maintainability
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
} as const;

const staggerItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
} as const;

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6 pt-20 lg:px-8">

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center space-y-6 lg:max-w-2xl"
      >
        <motion.p
          variants={staggerItem}
          className="text-primary text-sm font-semibold tracking-[0.2em] uppercase"
        >
          Hello! I am,
        </motion.p>

        <motion.h1
          variants={staggerItem}
          className="text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
        >
          Jethro R. Cadang
        </motion.h1>

        <motion.h2
          variants={staggerItem}
          className="text-primary text-2xl font-semibold sm:text-3xl"
        >
          Passionate Developer & Problem Solver
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="max-w-xl text-lg leading-relaxed text-white"
        >
          Aspiring Software Engineer dedicated to mastering the art of web
          development. I&apos;m actively building applications that challenge me
          to grow while preparing for my next career milestone.
        </motion.p>

        <motion.div variants={staggerItem} className="pt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group mt-8 w-max rounded-md border border-white/10 bg-gradient-to-b from-[#27272741_0.9%] to-[#171717] px-8 py-2 hover:border-white/20 hover:shadow-[inset_0_0_10px_#ffffff1a] xl:px-10 xl:py-4"
            aria-label="View Jethro's portfolio work"
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="bg-primary-dark absolute inset-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative Hexagon */}
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 0.1 }}
        transition={{
          duration: 1.2,
          delay: 1.5,
        }}
        className="absolute top-1/2 right-0 -translate-y-1/2 transform opacity-10 lg:relative lg:opacity-20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Hexagon
            size={400}
            className="text-primary/20 lg:h-96 lg:w-96 xl:h-[500px] xl:w-[500px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
