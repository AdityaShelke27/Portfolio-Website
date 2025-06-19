// Starter Portfolio Template - Next.js + Tailwind + Framer Motion + Unity WebGL Embed

// File: app/page.tsx (for Next.js 13+ with App Router)
'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "./App.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 md:px-12 py-10">
      <section className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Aditya Shelke</h1>
          <p className="text-lg mt-4 text-gray-300">
            Game Developer
          </p>
        </motion.div>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>

          {/* Unity WebGL Embed */}
          <div className="w-full max-w-5xl aspect-video relative rounded-xl overflow-hidden shadow-lg border border-gray-700 build">
            <iframe
              src="/Build/index.html"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Unity WebGL Game"
            ></iframe>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            This is an embedded Unity WebGL game. Click inside to play!
          </p>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a Unity developer with a focus on AI-driven gameplay mechanics. I enjoy solving complex problems using neural networks, machine learning, and game design. This portfolio is a showcase of the projects and experiments I've built independently and professionally.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-300 mb-2">Email: shelkeaditya325@gmail.com</p>
          <p className="text-gray-300 mb-2">LinkedIn: <Link href="https://linkedin.com/in/adityashelke" className="underline text-blue-400">adityashelke</Link></p>
        </section>
      </section>
    </main>
  );
}
