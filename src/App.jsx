import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import ProjectCard from './ProjectCard';
import ParticlesBackground from './SketchyBackground';

function Header() {
  const navItems = [
    { label: "Home" },
    { label: "Skills" },
    { label: "Professional Projects" },
    { label: "Personal Projects" },
    { label: "Contact" },
  ];

  const [selected, setSelected] = useState("Home");

  // Frame loop for scribble animation
  const scribbleFrames = [
    "/Scrible_Highlight.png",
    "/Scrible_Highlight2.png",
    "/Scrible_Highlight3.png",
  ];
  const wideScribbleFrames = [
    "/Scrible_Highlight_Wide.png",
    "/Scrible_Highlight_Wide2.png",
    "/Scrible_Highlight_Wide3.png",
  ];
  const wideLabels = ['Professional Projects', 'Personal Projects'];
  const [frameIndex, setFrameIndex] = useState(0);
  var interval = 200;
  useEffect(() => {
    const id = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % scribbleFrames.length);
    }, interval);
    return () => clearInterval(id);
  }, [scribbleFrames.length, interval]);

  return (
    <header className="sticky top-0 z-50 bg-black/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Aditya Shelke
            </div>
          </a>
          <ul className="flex space-x-6">
            {navItems.map((item) => {
              const isWide = wideLabels.includes(item.label);
              const frames = isWide ? wideScribbleFrames : scribbleFrames;
              return (

                <li key={item.label} tabIndex="0" className="relative overflow-visible">
                  <button
                    onClick={() => setSelected(item.label)}
                    className="relative px-4 py-2 text-white"
                  >
                    <span className="relative text-xl z-10">{item.label}</span>

                    {/* Scribble Animation */}
                    {selected === item.label && (
                      frames.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`frame-${i}`}
                          className={`absolute top-1/2 left-1/2 w-[250px] h-auto pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-0 object-contain ${i === frameIndex ? "opacity-100" : "opacity-0"
                            }`}
                          draggable={false}
                        />
                      ))
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
function FrameAnimation({
  images = ["/Scrible_Underline.png", "/Scrible_Underline2.png", "/Scrible_Underline3.png"],
  interval = 200,
  className = "w-24 h-24",
}) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        {
          images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`frame-${i}`}
              className={`absolute inset-0 w-full h-full object-contain transition-none ${i === frameIndex ? "opacity-100" : "opacity-0"
                }`}
              draggable={false}
            />
          ))
        }
      </AnimatePresence>
    </div>
  );
}
function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative z-10 px-6 py-16 max-w-6xl mx-auto border-l-4 border-yellow-500 border-dashed"
    >
      <h2 className="text-4xl text-green-300 mb-4">About Me</h2>
      <p className="text-white text-xl leading-relaxed">
        I'm a Unity developer focused on AI-driven gameplay, especially in puzzle and detective genres. Skilled in neural networks, shaders, and performance optimization. I love making games that challenge how players think.
      </p>
    </motion.section>
  );
}
function SkillSection() {
  return (
    <section
      data-sr=""
      data-sr-id="2"
      className="relative z-10 px-6 py-16 max-w-6xl mx-auto"
    >
      <div className="text-3xl font-bold mb-6 text-white">Skills</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:space-x-8 text-white">
        {/* Languages */}
        <div className="mb-8 min-w-[200px]">
          <h3 className="text-xl font-semibold mb-2 text-yellow-300">Languages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>C#</li>
            <li>C / C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        {/* Engines / Frameworks */}
        <div className="mb-8 min-w-[200px]">
          <h3 className="text-xl font-semibold mb-2 text-green-300">Engines / Frameworks</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><a className="underline-link" href="https://unity3d.com/" target="_blank" rel="noopener noreferrer">Unity</a></li>
            <li><a className="underline-link" href="https://www.unrealengine.com" target="_blank" rel="noopener noreferrer">Unreal 5</a></li>
            <li><a className="underline-link" href="https://www.construct.net/en" target="_blank" rel="noopener noreferrer">Construct 3</a></li>
            <li><a className="underline-link" href="https://docs.unity3d.com/6000.1/Documentation/Manual/shader-graph.html" target="_blank" rel="noopener noreferrer">Shader Graphs</a></li>
            <li><a className="underline-link" href="https://threejs.org/" target="_blank" rel="noopener noreferrer">Three.js</a></li>
            <li><a className="underline-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a></li>
          </ul>
        </div>

        {/* Tools */}
        <div className="mb-8 min-w-[200px]">
          <h3 className="text-xl font-semibold mb-2 text-blue-300">Tools</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><a className="underline-link" href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">Blender</a></li>
            <li>
              <a className="underline-link" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a> &amp;{' '}
              <a className="underline-link" href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a> /{' '}
              <a className="underline-link" href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</a>
            </li>
          </ul>
        </div>

        {/* Concepts */}
        <div className="mb-8 min-w-[200px]">
          <h3 className="text-xl font-semibold mb-2 text-pink-300">Concepts</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Game Design</li>
            <li>Artificial Neural Networks (ANN)</li>
            <li>Machine Learning</li>
            <li>Image Processing</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="mb-8 min-w-[200px]">
          <h3 className="text-xl font-semibold mb-2 text-red-300">Soft Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Problem Solving</li>
            <li>Critical Thinking</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
function PersonalProjects() {
  const projects = [
    {
      title: "Perfect Timing",
      description: "A rhythm-based WebGL game developed for Brackey's Game Jam 2025.1 within a 7-day time limit. Players tap buttons in sync with visual cues to generate beats and score points. The game emphasizes timing, responsiveness, and musical feedback.",
      icon: "/Personal Project Images/Icons/Perfect_Timing_Icon.png",
      screenshots: ["/Personal Project Images/Screenshots/Perfect Timing/Perfect_Timing_SC1.png", "/Personal Project Images/Screenshots/Perfect Timing/Perfect_Timing_SC2.png", "/Personal Project Images/Screenshots/Perfect Timing/Perfect_Timing_SC3.png"],
      skills: ["Unity", "C#", "Machine Learning"],
      webglUrl: "https://adityashelke.itch.io/perfect-timing",
    },
    {
      title: "Self-Driving Car",
      description: "Car learns to drive using Neural Networks and Genetic Algorithms.",
      icon: "/self-driving.jpg",
      screenshots: [""],
      skills: ["Unity", "C#", "Machine Learning"],
      webglUrl: "https://yourgameurl.itch.io/self-driving",
    },
    {
      title: "NavCmd Game",
      description: "Command-based bot navigation game overcoming obstacles intelligently.",
      icon: "/Nav_Cmd_Icon.png",
      screenshots: [""],
      skills: ["Unity", "C#", "Blender"],
    },
    {
      title: "Aim Cannon Game",
      description: "Shooter game to practice aiming on moving targets.",
      icon: "/aim.jpg",
      screenshots: [""],
      skills: ["Unity", "C#"],
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl text-pink-400 mb-8">Personal Projects</h2>
      <div className="relative grid gap-8">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            project={proj}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
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
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-visible cursor-none">
      {/* <ParticlesBackground /> */}
      {/* Custom Cursor */}
      <div
        className={`fixed w-7 h-7 pointer-events-none z-200 transition-opacity duration-200 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      >
        {/*<img src="/Pointer.png" className='w-full h-full' />*/}
        {/* <PointerAnimation/> */}
        <FrameAnimation images={["/Pointer.png", "/Pointer2.png", "/Pointer3.png"]} className="w-full h-full" />
      </div>
      <Header />
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
        <FrameAnimation images={["/Scrible_Underline.png", "/Scrible_Underline2.png", "/Scrible_Underline3.png"]} className="w-130 h-10 relative" />
        <p className="text-5xl text-yellow-200 max-w-xl">
          Game Developer
        </p>
      </motion.section>

      {/* About Section */}
      <AboutSection />

      <SkillSection />
      <PersonalProjects />
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
        <p className="text-sm text-white">© 2025 Created with ambition by Aditya Shelke</p>
      </footer>
    </div>
  );
}
