"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import { PortfolioProvider } from "context/context";
import { prefix } from "config/config";

import { Footer, Header } from "src/components/layout";
import { DarkmodeButton } from "src/components/button";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const animate = {
    initial: {
      transform: `translateY(50px)`,
      opacity: 0,
      transition: `transform 0.33s ease`,
    },
    animate: {
      transform: `translateY(0px)`,
      opacity: 1,
      transition: `transform 0.33s ease`,
    },
    exit: {
      transform: `translateY(50px)`,
      opacity: 0,
      transition: `transform 0.33s ease`,
    },
  };

  return (
    <ThemeProvider attribute="class">
      <PortfolioProvider value={prefix}>
        <Header />
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mx-auto max-w-3xl py-8 px-5"
        >
          {children}
        </motion.main>
        <DarkmodeButton />
        <Footer />
      </PortfolioProvider>
    </ThemeProvider>
  );
}
