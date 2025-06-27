import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ProjectCard({ project, isOpen, onToggle }) {
    return (
        <motion.div
            layout
            onClick={onToggle}
            className="relative cursor-pointer border-4 border-dashed border-white rounded-xl p-6 bg-black bg-opacity-40 text-white hover:shadow-lg transition-all duration-300"
        >
            <h3 layout="position" className="text-2xl font-bold text-yellow-300 mb-2">
                {project.title}
            </h3>
            <div className="flex mb-5">
                <img src={project.icon} layout="position" className="mr-5 float-left w-50 h-auto" />

                <p layout="position" className="text-lg">
                    {project.description}
                </p>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        {/* {project.screenshots && (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-lg mb-4 w-full max-h-60 object-cover"
                            />
                        )} */}
                        <motion.div className="flex float-right grid gap-5">
                            {project.screenshots.map((src, i) => (
                                <motion.img
                                    key={i}
                                    src={src}
                                    alt={`frame-${i}`}
                                    className={`relative w-80 h-auto transition-none`}
                                    draggable={false}
                                />
                            ))}
                        </motion.div>
                        {project.skills?.length > 0 && (
                            <motion.div className="mb-2 text-lg">
                                <strong className="text-green-300">Technologies:</strong>{' '}
                                {project.skills.join(', ')}
                            </motion.div>
                        )}
                        {/* {project.webglUrl && (
                            <div className="aspect-video border mt-4">
                                <iframe
                                    src={project.webglUrl}
                                    title={`${project.title} WebGL`}
                                    className="w-full h-full"
                                    allowFullScreen
                                />
                            </div>
                        )} */}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>

    );
}
