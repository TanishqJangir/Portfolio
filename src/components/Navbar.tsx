"use client";


import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Image from "next/image";
import Logo from "../../public/assets/images/Logo.png"
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";



const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [forceVisible, setForceVisible] = useState(false);

    const lastScrollY = useRef(0);
    const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const homeSection = document.querySelector("#home");
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setForceVisible(true);
                setVisible(true);
            } else {
                setForceVisible(false);
            }
        }, { threshold: 0.1 });

        if (homeSection) observer.observe(homeSection);

        return () => {
            if (homeSection) observer.unobserve(homeSection);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (forceVisible) {
                setVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setVisible(false);
            } else {
                setVisible(true);

                if (timerId.current) clearTimeout(timerId.current);

                timerId.current = setTimeout(() => {
                    setVisible(false);
                }, 3000)
            }

            lastScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timerId.current) clearTimeout(timerId.current);
        };
    }, [forceVisible]);



    return (
        <>
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex items-center space-x-2">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="w-8 h-8"
                        priority
                    />
                    <div
                        className="text-2xl text-white font-bold hidden sm:block"
                    >Tanishq</div>
                </div>

                <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setMenuOpen(true)}
                                className="hover:bg-white/10 rounded-md cursor-pointer"
                                aria-label="Open Menu"
                            >
                                <MenuIcon className="size-7 text-white" />
                            </Button>
                        </TooltipTrigger>

                        <TooltipContent className="bg-transparent text-white! px-3 py-1 text-sm rounded-md shadow-lg **:data-radix-popper-arrow:hidden">
                            Open Menu
                        </TooltipContent>
                    </Tooltip>
                </div>



                <div className="hidden sm:block">
                    <Link
                        href={"contact"}
                        className="bg-linear-to-r from-pink-500 to-blue-500 px-5 py-2 rounded-full font-medium shadow-lg text-white hover:opacity-90 transition-opacity duration-300 text-sm"
                    >
                        Reach Out
                    </Link>
                </div>
            </nav>


            <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
};

export default Navbar;