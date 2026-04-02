"use client";

import ParticlesBackground from "@/components/ParticleBackground";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import TwitterIcon from "../../public/assets/icons/TwitterIcon";
import GithubIcon from "../../public/assets/icons/GithubIcon";
import LinkedInIcon from "../../public/assets/icons/LinkedInIcon";
import { Variants } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import avator from "../../public/assets/images/avator.png"
import InstagramIcon from "../../public/assets/icons/InstagramIcon";
import YoutubeIcon from "../../public/assets/icons/YoutubeIcon";

const MotionImage = motion.create(Image);



const socialLinks = [
    { Icon: <TwitterIcon className="size-8" />, label: "X", url: "https://x.com/Tanishq_Jangir" },
    { Icon: <GithubIcon className="size-8" />, label: "GitHub", url: "https://github.com/TanishqJangir" },
    { Icon: <LinkedInIcon className="size-8" />, label: "LinkedIn", url: "https://www.linkedin.com/in/tanishq-jangir-b17b0725a" },
    { Icon: <InstagramIcon className="size-8" />, label: "Instagram", url: "https://www.instagram.com/tanishq__jangir" },
    { Icon: <YoutubeIcon className="size-8" />, label: "YouTube", url: "https://www.youtube.com/@TanishqJangir-Escanor" },
];

const glowVariants: Variants = {
    initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))" },
    hover: {
        scale: 1.2, y: -3,
        filter: "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.8))",
        transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
}


const Hero = () => {

    const roles = useMemo(() => ["Web Developer", "Software Developer", "Full Stack Developer"], []);

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index];
        const timeOut = setTimeout(() => {
            if (!deleting && subIndex < current.length) setSubIndex(v => v + 1);
            else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 2000);
            else if (deleting && subIndex > 0) setSubIndex(v => v - 1);
            else if (deleting && subIndex === 0) { setDeleting(false); setIndex(v => (v + 1) % roles.length); }

        }, deleting ? 75 : 150);


        return () => clearTimeout(timeOut);
    }, [subIndex, index, deleting, roles])





    return (
        <section
            id="home"
            className="w-full h-screen relative bg-black overflow-hidden"
        >
            <ParticlesBackground />

            <div className="absolute inset-8">
                <div
                    className="absolute -top-32 -left-32
                    w-[70vw] sm:w-[60vw] md:w-[35vw]
                    h-[70vw] sm:h-[60vw] md:h-[35vw]
                    max-w-125 max-h-125 rounded-full
                    bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
                    opacity-30 sm:opacity-20 md:opacity-10
                    blur-[100px] sm:blur-[130px] md:blur-[150px]
                    animate-pulse
                    "
                />


                <div
                    className="absolute bottom-0 right-0
                    w-[70vw] sm:w-[60vw] md:w-[35vw]
                    h-[70vw] sm:h-[60vw] md:h-[35vw]
                    max-w-125 max-h-125 rounded-full
                    bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
                    opacity-30 sm:opacity-20 md:opacity-10
                    blur-[100px] sm:blur-[130px] md:blur-[150px]
                    animate-pulse delay-500
                    "
                />
            </div>


            <div className="relative z-10 h-full w-full max-w-340 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

                <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
                    <div className="w-full  lg:pr-2 max-w-xl">
                        <motion.div
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <span>
                                {roles[index].substring(0, subIndex)}
                            </span>
                            <span className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle"
                                style={{ height: "1em" }}
                            ></span>

                        </motion.div>

                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
                            bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg "
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Hello, I'm
                            <br />
                            <span
                                className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl  lg:whitespace-nowrap"
                            >
                                Tanishq Jangir
                            </span>
                        </motion.h1>


                        <motion.p
                            className="mt-5 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            I turn complex ideas into seamless, high-impact web experiences - building modern, scalable, and lightning-fast applications that make a difference.
                        </motion.p>

                        <motion.div
                            className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-full font-medium text-lg text-white
                            bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
                            shadow-lg hover:scale-105 transition-all "
                            >
                                View My Work
                            </a>

                            <a
                                href="/assets/resume/Resume.pdf"
                                download
                                className="px-8 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
                            >
                                My Resume
                            </a>

                        </motion.div>

                        <motion.div
                            className="flex gap-6 mt-5 justify-center sm:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            {socialLinks.map(({ Icon, label, url }) => (

                                <Tooltip key={label}>
                                    <TooltipTrigger asChild>

                                        <motion.a
                                            key={label}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            variants={glowVariants}
                                            initial="initial"
                                            whileHover="hover"
                                            whileTap="tap"
                                            className="text-gray-300"
                                        >
                                            {Icon}
                                        </motion.a>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" className="bg-transparent text-white px-3 py-1 text-sm rounded-md shadow-lg **:data-radix-popper-arrow:hidden">
                                        {label}
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </motion.div>
                    </div>

                </div>

                <div className="relative hidden lg:block">

                    <div
                        className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{
                            right: "10px", width: "min(22vw, 410px)", height: "min(40vw, 760px)", borderRadius: "50%",
                            filter: "blur(38px)", opacity: 0.32,
                            background: "conic-gradient(from 180deg at 50% 50%, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"
                        }}
                    />
                    <MotionImage
                        src={avator}
                        alt="Tanishq Jangir"
                        loading="eager"
                        priority
                        className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
                        style={{
                            right: "20px", width: "min(45vw, 780px)", maxHeight: "90vh"
                        }}
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}

                    />
                </div>

            </div>


        </section>
    );
};

export default Hero;