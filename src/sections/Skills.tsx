"use client";
import {
    RiJavascriptFill,
    RiNextjsLine,
    RiCss3Fill,
} from "react-icons/ri";

import {
    SiPassport,
    SiMongodb,
    SiC,
    SiCplusplus,
    SiPython,
    SiHtml5,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiBetterauth,
    SiPostgresql,
    SiPrisma,
    SiShadcnui,
    SiGit,
    SiGithub,
    SiUbuntu,
    SiVercel,
    SiFramer,
    SiRender,
    SiTypescript,
    SiExpress,
    SiHostinger,
} from "react-icons/si";
import PolarshIcon from "../../public/assets/icons/PolarshIcon";
import { IoCaretUpCircleOutline } from "react-icons/io5";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";


const SkillItem = ({ skill }: { skill: any }) => (
    <div className="flex flex-col items-center gap-5 sm:gap-2 min-w-30">
        <span className="hover:scale-120 transition-transform duration-300 flex items-center justify-center sm:h-18">
            {skill.icon}
        </span>
        <p className="text-sm">{skill.name}</p>
    </div>
);


const Skills = () => {

    const skills = [
        { icon: <SiC />, name: "C" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiHtml5 />, name: "HTML" },
        { icon: <RiCss3Fill />, name: "CSS" },
        { icon: <RiJavascriptFill />, name: "JavaScript" },
        { icon: <SiReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiFramer />, name: "Framer Motion" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiPassport />, name: "Passport.js" },
        { icon: <RiNextjsLine />, name: "Next.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <PolarshIcon className="size-8 sm:size-10 md:size-15" />, name: "Polar" },
        // { icon: <SiClerk />, name: "Clerk" },
        { icon: <SiShadcnui />, name: "Shadcn/UI" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiPrisma />, name: "Prisma" },
        // { icon: <SiTrpc />, name: "tRPC" },
        { icon: <SiBetterauth />, name: "BetterAuth" },
        // { icon: <IoCaretUpCircleOutline />, name: "Ai-Sdk" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiGithub />, name: "GitHub" },
        { icon: <SiVercel />, name: "Vercel" },
        { icon: <SiRender />, name: "Render" },
        { icon: <SiHostinger />, name: "Hostinger" },
        { icon: <SiUbuntu />, name: "Ubuntu" },
    ]

    const row1 = skills.slice(0, skills.length / 2);
    const row2 = skills.slice(skills.length / 2);

    const repeatedRow1 = [...row1, ...row1];
    const repeatedRow2 = [...row2, ...row2];



    // const repeated = [...skills,]; // Repeat the skills to fill the grid

    const [dir, setDir] = useState(-1);
    const [active, setActive] = useState(false);

    const sectionRef = useRef(null);
    const touchY = useRef<number | null>(null);


    const baseDir1 = -1;
    const baseDir2 = 1;
    const baseDir3 = -1;

    const dir1 = baseDir1 * dir;
    const dir2 = baseDir2 * dir;
    const dir3 = baseDir3 * dir;

    const trackRef1 = useRef<HTMLDivElement | null>(null);
    const trackRef2 = useRef<HTMLDivElement | null>(null);
    const trackRef3 = useRef<HTMLDivElement | null>(null);

    const x1 = useMotionValue(-1);
    const x2 = useMotionValue(1);
    const x3 = useMotionValue(-1);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const io = new IntersectionObserver(([entry]) => {
            setActive(entry.isIntersecting && entry.intersectionRatio >= 0.1);
        }, { threshold: 0.1 });

        io.observe(el);

        return () => io.disconnect();

    }, []);

    useEffect(() => {
        if (!active) return;

        const onWheel = (e: WheelEvent) => setDir(e.deltaY > 0 ? -1 : 1);
        const onTouchStart = (e: TouchEvent) => (touchY.current = e.touches[0].clientY);
        const onTouchMove = (e: TouchEvent) => {
            if (touchY.current == null) return;
            const deltaY = e.touches[0].clientY - touchY.current;
            setDir(deltaY > 0 ? 1 : -1);
            touchY.current = e.touches[0].clientY;
        }

        window.addEventListener("wheel", onWheel, { passive: true });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: true });

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
        };

    }, [active]);


    useEffect(() => {
        let id: number;
        let last = performance.now();

        const speed1 = 50;
        const speed2 = 70;
        const speed3 = 60;

        const tick = (now: number) => {
            const dt = (now - last) / 1000;
            last = now;

            const dir1 = baseDir1 * dir;
            const dir2 = baseDir2 * dir;
            const dir3 = baseDir3 * dir;

            const loop1 = (trackRef1.current?.scrollWidth ?? 0) / 2;
            const loop2 = (trackRef2.current?.scrollWidth ?? 0) / 2;
            const loop3 = (trackRef3.current?.scrollWidth ?? 0) / 2;

            // Row 1
            let next1 = x1.get() + speed1 * dt * dir1;
            if (loop1) {
                if (next1 <= -loop1) next1 += loop1;
                else if (next1 >= 0) next1 -= loop1;
            }
            x1.set(next1);

            // Row 2
            let next2 = x2.get() + speed2 * dt * dir2;
            if (loop2) {
                if (next2 <= -loop2) next2 += loop2;
                else if (next2 >= 0) next2 -= loop2;
            }
            x2.set(next2);

            id = requestAnimationFrame(tick);
        };

        id = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(id);
    }, [dir]);


    return (
        <section
            id="skills"
            ref={sectionRef}
            className="min-h-1/2 flex flex-col w-full pb-8 items-center justify-center relative bg-black text-white overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 left-0 w-75 h-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
                    opacity-20 blur-[120px] animate-pulse"
                />

                <div
                    className="absolute bottom-1/4 right-0 w-75 h-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
                    opacity-20 blur-[120px] animate-pulse delay-500"
                />

            </div>

            <motion.h1
                className="text-4xl mt-5 h-13 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] z-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}

            >
                My Skills
            </motion.h1>

            <motion.p
                className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Modern Applications | Modern Technologies
            </motion.p>


            <div className="relative w-full overflow-hidden">
                <div className="flex flex-col gap-10 text-[#1cd8d2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">

                    <motion.div ref={trackRef1} style={{ x: x1 }} className="flex md:gap-10 ">
                        {repeatedRow1.map((skill, i) => (
                            <SkillItem key={i} skill={skill} />
                        ))}
                    </motion.div>

                    <motion.div ref={trackRef2} style={{ x: x2 }} className="flex md:gap-10">
                        {repeatedRow2.map((skill, i) => (
                            <SkillItem key={i} skill={skill} />
                        ))}
                    </motion.div>

                </div>
            </div>



        </section>
    );
};


export default Skills;