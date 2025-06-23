import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./App.css"
import SketchyBackground from './SketchyBackground';

export default function Portfolio() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sketch overflow-x-hidden">
      <SketchyBackground />
      <div className="relative w-full min-h-screen bg-black text-white font-sketch overflow-x-hidden cursor-none">
        {/* Custom Cursor */}
        <div
          className="fixed w-6 h-6 border-2 border-white border-dashed rounded-full pointer-events-none z-50"
          style={{ left: cursorPosition.x, top: cursorPosition.y, transform: 'translate(-50%, -50%)' }}
        />

        {/* Background Sketchy Texture */}
        <div className="absolute inset-0 bg-[url('/sketch-bg.svg')] opacity-10 z-0"></div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center text-center py-32"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-red-400 mb-4">Aditya Shelke</h1>
          <p className="text-lg text-yellow-200 max-w-xl">Unity Developer | AI-Driven Game Mechanics | Puzzle & Detective Games</p>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 px-6 py-16 max-w-4xl mx-auto border-l-4 border-yellow-500 border-dashed"
        >
          <h2 className="text-3xl text-green-300 mb-4">About Me</h2>
          <p className="text-white leading-relaxed">
            I'm a Unity developer with a focus on AI-driven gameplay, especially in puzzle and detective genres. Skilled in neural networks, shaders, and performance optimization. I enjoy making games that challenge how players think.
          </p>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative z-10 px-6 py-16 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl text-pink-400 mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-blue-500 border-dashed p-6 rounded-xl bg-black bg-opacity-30">
              <h3 className="text-xl text-cyan-300 mb-2">Self-Driving Car</h3>
              <p className="text-white">Car learns to drive using Neural Networks and Genetic Algorithms in Unity.</p>
            </div>
            <div className="border-2 border-red-500 border-dashed p-6 rounded-xl bg-black bg-opacity-30">
              <h3 className="text-xl text-red-300 mb-2">NavCmd Game</h3>
              <p className="text-white">Command-based bot navigation game overcoming obstacles intelligently.</p>
            </div>
            <div className="border-2 border-green-500 border-dashed p-6 rounded-xl bg-black bg-opacity-30">
              <h3 className="text-xl text-green-300 mb-2">Aim Cannon Game</h3>
              <p className="text-white">A shooter game focused on targeting moving objects to improve aim.</p>
            </div>
            <div className="border-2 border-yellow-400 border-dashed p-6 rounded-xl bg-black bg-opacity-30">
              <h3 className="text-xl text-yellow-200 mb-2">Escape Game</h3>
              <p className="text-white">Puzzle-based third-person game created in Unreal Engine 4 with 5 unique levels.</p>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="relative z-10 text-center py-12 border-t border-dashed border-white">
          <p className="text-sm text-white">© 2025 Aditya Shelke | Made with Unity, Tailwind CSS & Love</p>
        </footer>
      </div>
    </div>
  );
}
