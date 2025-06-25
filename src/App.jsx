import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import ParticlesBackground from './SketchyBackground';

function ScribbleAnimation({ interval = 250, className = '' }) {
  const [index, setIndex] = useState(0);
  const scribbleFrames = [
    '/Scrible_Underline.png',
    '/Scrible_Underline2.png',
    '/Scrible_Underline3.png',
  ];
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % scribbleFrames.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className={`w-130 h-10 relative ${className}`}>
      {/*<AnimatePresence mode="wait">*/}
      <motion.img
        key={scribbleFrames[index]}
        src={scribbleFrames[index]}
        alt="scribble"
        className="absolute inset-0 w-full h-full object-contain -top-3"
      />
      {/*</AnimatePresence>*/}
    </div>
  );
}
function PointerAnimation({ interval = 220, className = '' }) {
  const [index, setIndex] = useState(0);
  const scribbleFrames = [
    '/Pointer.png',
    '/Pointer2.png',
    '/Pointer3.png',
  ];
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % scribbleFrames.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <>
      {/*<AnimatePresence mode="wait">*/}
      <motion.img
        key={scribbleFrames[index]}
        src={scribbleFrames[index]}
        alt="scribble"
        className="w-full h-full"
      />
      {/*</AnimatePresence>*/}
    </>
  );
}

export default function Portfolio() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(true)
  useEffect(() => {
    const updatePosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    document.addEventListener('pointermove', updatePosition);
    document.addEventListener('pointerenter', handleMouseEnter);
    document.addEventListener('pointerleave', handleMouseLeave);

    return () => {
      document.removeEventListener('pointermove', updatePosition);
      document.removeEventListener('pointerenter', handleMouseEnter);
      document.removeEventListener('pointerleave', handleMouseLeave);
    }
  }, []);
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      <ParticlesBackground />
      {/* Custom Cursor */}
      <div
        className={`fixed w-7 h-7 pointer-events-none z-50 transition-opacity duration-200 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}

      >
        {/*<img src="/Pointer.png" className='w-full h-full' />*/}
        <PointerAnimation />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-4"
      >
        <motion.h1
          animate={{
            rotate: [0, -1.5, 1.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="text-5xl md:text-8xl text-orange-300 mb-4"
        >
          <motion.img src="/Crown.png" className="absolute -rotate-45 -left-15 -top-15"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          ></motion.img>
          Aditya Shelke
        </motion.h1>
        <ScribbleAnimation />
        <p className="text-5xl text-yellow-200 max-w-xl">
          Game Developer
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 px-6 py-16 max-w-4xl mx-auto border-l-4 border-yellow-500 border-dashed"
      >
        <h2 className="text-4xl text-green-300 mb-4">About Me</h2>
        <p className="text-white text-xl leading-relaxed">
          I'm a Unity developer focused on AI-driven gameplay, especially in puzzle and detective genres. Skilled in neural networks, shaders, and performance optimization. I love making games that challenge how players think.
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
          {[
            {
              title: 'Self-Driving Car',
              desc: 'Car learns to drive using Neural Networks and Genetic Algorithms in Unity.',
              color: 'blue',
              text: 'cyan-300',
            },
            {
              title: 'NavCmd Game',
              desc: 'Command-based bot navigation game overcoming obstacles intelligently.',
              color: 'red',
              text: 'red-300',
            },
            {
              title: 'Aim Cannon Game',
              desc: 'A shooter game focused on targeting moving objects to improve aim.',
              color: 'green',
              text: 'green-300',
            },
            {
              title: 'Escape Game',
              desc: 'Puzzle-based third-person game created in Unreal Engine 4 with 5 unique levels.',
              color: 'yellow',
              text: 'yellow-200',
            },
          ].map((proj, idx) => (
            <div
              key={idx}
              className={`border-4 border-${proj.color}-400 border-dashed p-6 rounded-xl bg-black bg-opacity-30 relative bg-[url('/scribble-border.svg')] bg-no-repeat bg-contain`}
            >
              <h3 className={`text-xl text-${proj.text} mb-2 font-sketch`}>{proj.title}</h3>
              <p className="text-white">{proj.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 border-t border-dashed border-white">
        <p className="text-sm text-white">© 2025 Aditya Shelke</p>
      </footer>
    </div>
  );
}
