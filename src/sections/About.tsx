"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../public/assets/images/Profile.jpeg";

const MotionImage = motion.create(Image);

const About = () => {


    const stats = [
        { label: "Focus", value: "Performance & Scalability" },
        { label: "Speciality", value: "Full Stack" },
        { label: "Location", value: "India" }
    ]

    const glows = [
        "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
        "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
    ]


    return (
        <section id="about" className="min-h-screen w-full bg-black flex items-center justify-center relative text-white overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">
                {glows.map((c, index) => (
                    <div key={index} className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} />
                ))}
            </div>

            <div
                className="relative z-10 max-w-6xl w-full max-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12"
            >

                <motion.div
                    className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, }}
                    viewport={{ once: true, amount: 0.4 }}
                >

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative w-40 h-40 md:w-50 md:h-50 rounded-2xl overflow-hidden shadow-2xl  border border-[#1cd8d2]/30 "  //border-[#1cd8d2]/25 bg-linear-to-r from-[#1cd8d2] to-[#302b63]/20
                    >
                        <MotionImage
                            src={profile}
                            alt="Profile Image"
                            className="absolute inset-0 object-cover -translate-y-6 scale-190 -translate-x-4"
                        />
                    </motion.div>

                    <div className="flex flex-1 flex-col justify-center text-center md:text-left" >
                        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">Tanishq Jangir</h2>

                        <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
                            Full Stack Developer
                        </p>

                        <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl md:max-w-3xl">
                            I design and develop scalable, high-performance web applications with a strong emphasis on clean architecture and seamless user experiences. Proficient in React, Next.js, TypeScript, Tailwind CSS, and Express.js, I transform ideas into production-ready solutions with efficient APIs and intuitive interfaces.
                        </p>

                        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                            {stats.map(({ label, value }, index) => (
                                <motion.div
                                    key={index}
                                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex flex-col justify-center items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.5 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    
                                    <div className="text-sm text-gray-400 uppercase">{label}</div>
                                    <div className="text-base font-semibold">{value}</div>

                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <a
                                href="#projects"
                                className="inline-flex justify-center px-6 py-3 bg-linear-to-r from-[#1cd8d2] to-[#302b63] rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300"
                            >
                                View My Work
                            </a>


                            <a
                                href="#contact"
                                className="inline-flex justify-center px-6 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition-colors duration-300"
                            >
                                Lets connect
                            </a>
                        </div>

                    </div>


                </motion.div>

                <motion.div

                    className="text-center md:text-left"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        About Me
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        I am a full stack developer with a passion for creating scalable and high-performance web applications.
                    </p>
                    <p className="mt-1 text-gray-400 text-base sm:text-lg">
                        I love turning ideas into scalable, user-friendly products that make an impact.
                    </p>
                </motion.div>


            </div>
        </section>
    )
};

export default About;