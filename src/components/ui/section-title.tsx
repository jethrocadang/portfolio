"use client"
import { motion } from "motion/react";
import { ReactNode } from "react";
import { staggerItem } from "../sections/hero-section";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.h2 variants={staggerItem} className="text-3xl font-bold">
        {children}
      </motion.h2>
    </>
  );
}
