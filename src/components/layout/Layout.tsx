import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';

export function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-void-950 text-cream-100 flex flex-col relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 -left-16 w-[460px] h-[460px] rounded-full bg-accent/20 blur-[110px]" />
        <div className="absolute top-1/4 -right-16 w-[420px] h-[420px] rounded-full bg-secondary/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-secondary-light/25 blur-[110px]" />
      </div>
      <Navbar />
      <motion.main
        className="flex-grow relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
