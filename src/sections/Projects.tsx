"use client";


import { useEffect, useMemo, useRef, useState } from "react";
import DigitalBrainDesktop from "../../public/assets/images/DigitalBrainDesktop.png"
import DigitalBrainMobile from "../../public/assets/images/DitigalBrainMobile.png"
import NodebaseDesktop from "../../public/assets/images/NodebaseDesktop.png"
import NodebaseMobile from "../../public/assets/images/NodebaseMobile.png"
import PortfolioDesktop from "../../public/assets/images/PortfolioDesktop.png"
import PortfolioMobile from "../../public/assets/images/PortfolioMobile.png"
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";

const useIsMobile = (query = "(max-width : 639px)") => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" && window.matchMedia(query).matches
    );

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mql = window.matchMedia(query);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        mql.addEventListener("change", handler);
        setIsMobile(mql.matches);

        return () => mql.removeEventListener("change", handler);

    }, [query]);

    return isMobile;
}

const Projects = () => {

    const isMobile = useIsMobile();
    const sceneRef = useRef(null);

    const projects = useMemo(() => [
        {
            title: "Digital Brain",
            link: "https://digital-brain-frontend.vercel.app",
            code: "https://github.com/TanishqJangir/Brainly.git",
            bgColor: "#6d66e6",
            image: isMobile ? DigitalBrainMobile : DigitalBrainDesktop,
        },

        {
            title: "Nodebase",
            link: "https://nodebase-puce.vercel.app",
            code: "https://github.com/TanishqJangir/Nodebase.git",
            bgColor: "#e37d47",
            image: isMobile ? NodebaseMobile : NodebaseDesktop,
        },

        {
            title: "Portfolio",
            link: "http://localhost:3000",
            code: "https://github.com/TanishqJangir/Portfolio.git",
            bgColor: "#0d4d3d",
            image: isMobile ? PortfolioMobile : PortfolioDesktop,
        }


    ], [isMobile]
    );


    const { scrollYProgress } = useScroll({
        target: sceneRef,
        offset: ["start start", "end end"]
    });

    const thresholds = projects.map((_, i) => (i + 1) / projects.length);
    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const idx = thresholds.findIndex((t) => v <= t);
        setActiveIndex(idx === -1 ? projects.length - 1 : idx);
    });

    const activeProject = projects[activeIndex];

    return (
        <section
            id="projects"
            className="min-h-screen relative text-white"
            ref={sceneRef}
            style={{
                height: `${100 * projects.length}vh`,
                backgroundColor: activeProject.bgColor,
                transition: "background-color 400ms ease"
            }}
        >
            <div
                className="sticky top-0 h-screen flex flex-col items-center justify-center gap-2"
            >
                <h2 className="text-2xl sm:text-3xl font-semibold z-10 text-center pt-4">My Work</h2>


                <div className="relative w-full flex-1 flex items-center justify-center" >
                    {projects.map((project, index) => (
                        <div key={project.title}
                            className={`absolute inset-0 flex flex-col items-center justify-center py-4 transition-all duration-500 ${activeIndex === index ? "opacity-100 z-20" : "opacity-0 z-0"}`}
                        >

                            <AnimatePresence mode="wait">
                                {activeIndex === index && (
                                    <motion.h3
                                        key={project.title}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="text-white/95 italic font-semibold text-center"
                                        style={{
                                            fontSize: "clamp(2rem, 4vw, 4.5rem)",
                                            zIndex: 5,
                                        }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                )}
                            </AnimatePresence>

                            {isMobile ? (
                                <img
                                    src={project.image.src}
                                    alt={project.title}
                                    className="rounded-lg shadow-2xl drop-shadow-xl"
                                    style={{
                                        maxWidth: "90%",
                                        maxHeight: "55vh",
                                        width: "auto",
                                        height: "auto",
                                        display: "block",
                                        zIndex: 10,
                                        position: "relative",
                                        transition: "transform 200ms ease",
                                    }}
                                    loading="lazy"
                                />
                            ) : (
                            <div
                                className="relative flex items-center justify-center overflow-hidden bg-transparent rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]"
                                style={{
                                    width: "80%",
                                    maxWidth: "960px",
                                    height: "480px",
                                    zIndex: 10,
                                    transition: "box-shadow 250ms ease",
                                }}
                            >
                                <img
                                    src={project.image.src}
                                    alt={project.title}
                                    className="w-full h-full object-fill object-center drop-shadow-2xl"
                                    style={{
                                        position: "relative",
                                        zIndex: 10,
                                        transition: "transform 200ms ease",
                                    }}
                                    loading="lazy"
                                />

                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        zIndex: 11,
                                        background: "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)"
                                    }}
                                />
                            </div>
                            )}

                        </div>
                    ))}
                </div>
            
                <div className={`flex justify-center items-center gap-4 z-20 pb-4 ${isMobile ? "flex-col" : ""}`}>
                    <Button
                        variant="default"
                        size="lg"
                        onClick={() => window.open(activeProject.link, "_blank")}
                        className="px-8 py-5 font-semibold text-black bg-white hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                        aria-label={`View ${activeProject.title}`}
                        rel="noopener noreferrer"
                    >
                        View Project
                    </Button>

                    <Button
                        variant="default"
                        size="lg"
                        onClick={() => window.open(activeProject.code, "_blank")}
                        className="px-9 py-5 font-semibold text-black bg-white hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                        aria-label={`View code for ${activeProject.title}`}
                        rel="noopener noreferrer"
                    >
                        View Code
                    </Button>


                </div>
            </div>

        </section >
    );
};

export default Projects;