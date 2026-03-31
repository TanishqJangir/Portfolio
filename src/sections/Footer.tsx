"use client";

import { Variants } from "framer-motion";
import GithubIcon from "../../public/assets/icons/GithubIcon";
import InstagramIcon from "../../public/assets/icons/InstagramIcon";
import LinkedInIcon from "../../public/assets/icons/LinkedInIcon";
import TwitterIcon from "../../public/assets/icons/TwitterIcon";
import YoutubeIcon from "../../public/assets/icons/YoutubeIcon";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


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

const Footer = () => {
    return (
        <footer 
        id="footer"
        className="relative overflow-hidden bg-black">

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.25),transparent_70%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_65%_at_30%_70%,rgba(16,185,129,0.3),transparent_70%)]" />


            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center space-y-6"
            >

                <h1 className="font-semibold leading-none text-white text-center select-none"
                    style={{
                        fontSize: "clamp(2.5rem,5vw,14rem)",
                        letterSpacing: "0.02em",
                        lineHeight: 0.9,
                        padding: "0 3vw",
                        whiteSpace: "nowrap",
                        textShadow: "0 2px 18px rgba(0,0,0,0.45)"
                    }}
                >
                    Tanishq Jangir
                </h1>

                <div className="h-0.75 w-48 md:w-68 rounded-full bg-linear-to-r from-[#0d58cc] via-cyan-300 to-emerald-400 " />

                <div className="flex gap-5 text-2xl md:text-3xl">

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

                </div>

                <p className="text-gray-300 italic max-w-xl text-center">
                    "Success is when preparation meets opportunity."
                </p>

                <p className="text-xs text-gray-400 text-center" >
                    &copy; {new Date().getFullYear()} Tanishq Jangir. All rights reserved.
                </p>

            </motion.div>
        </footer>
    );
};


export default Footer;