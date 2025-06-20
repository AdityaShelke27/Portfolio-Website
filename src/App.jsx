// Starter Portfolio Template - Next.js + Tailwind + Framer Motion + Unity WebGL Embed

// File: app/page.tsx (for Next.js 13+ with App Router)
'use client';
import { motion } from "framer-motion";
import "./App.css";

function UnityBuild({buildPath}) {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "960px", // optional: control iframe width
        margin: "0 auto 80px", // center on page
      }}
    >
      {/* Aspect-ratio wrapper */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%", // 16:9 aspect ratio
          height: 0,
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          border: "2px solid rgb(187, 187, 187)",
        }}
      >
        <iframe
          src={buildPath} /*"/Build/index.html"*/
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen
          title="Unity WebGL Game"
        ></iframe>
      </div>

      {/* Fullscreen Button – anchored outside bottom right of iframe */}
      <button
        onClick={() => {
          const iframe = document.querySelector("iframe");
          if (iframe?.contentWindow?.unityInstance?.SetFullscreen) {
            iframe.contentWindow.unityInstance.SetFullscreen(1);
          } else {
            alert("Unity not loaded yet.");
          }
        }}
        style={{
          position: "absolute",
          bottom: "-44px", // adjust spacing below iframe
          right: "0",
          backgroundColor: "#1F2937",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "6px 12px",
          cursor: "pointer",
          fontSize: "0.9rem",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
        }}
      >
        Fullscreen
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-12 py-10">
      <section className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold">{/*Aditya Shelke*/}</h1>
          <p className="text-lg mt-4 text-gray-300">
            {/*Game Developer*/}
          </p>
        </motion.div>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">{/*Featured Projects*/}</h2>

          {/* Unity WebGL Embed */}
          <UnityBuild buildPath="/Build/index.html"/>
          A space in between
          <UnityBuild buildPath="/Build/index.html"/>
          <p className="mt-4 text-sm text-gray-400">
            {/*This is an embedded Unity WebGL game. Click inside to play!*/}
          </p>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">{/*About Me*/}</h2>
          <p className="text-gray-300 leading-relaxed">
            {/*I'm a Unity developer with a focus on AI-driven gameplay mechanics. I enjoy solving complex problems using neural networks, machine learning, and game design. This portfolio is a showcase of the projects and experiments I've built independently and professionally.*/}
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">{/*Contact*/}</h2>
          <p className="text-gray-300 mb-2">{/*Email: shelkeaditya325@gmail.com*/}</p>
          <p className="text-gray-300 mb-2">
            <a
              href="https://linkedin.com/in/adityashelke"
              className="underline text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              adityashelke
            </a>
          </p>
        </section>
      </section>
    </main>
  );
}
