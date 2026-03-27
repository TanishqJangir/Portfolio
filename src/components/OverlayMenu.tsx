import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface OverlayMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

const OverlayMenu = ({
    isOpen,
    onClose,
}: OverlayMenuProps) => {

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const origin = isMobile ? "94% 3%" : "50% 3%";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center z-50 w-full min-h-screen"
                    initial={{ clipPath: `circle(0% at ${origin})` }}
                    animate={{ clipPath: `circle(150% at ${origin})` }}
                    exit={{ clipPath: `circle(0% at ${origin})` }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.90)" }}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>

                            <Button
                                variant="ghost"
                                className="hover:bg-transparent hover:text-white text-gray-400 cursor-pointer absolute top-4 right-4"
                                onClick={onClose}
                                aria-label="Close Menu"
                            >
                                <XIcon className="size-6" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="[&>span]:hidden">
                            Close Menu
                        </TooltipContent>
                    </Tooltip>

                    <ul
                        className="flex flex-col items-center justify-center gap-6">
                        {menuItems.map((item, index) => (
                            <motion.li
                                key={index}
                                className="text-3xl text-white cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, ease: "easeInOut" }}
                            >
                                <a
                                    href={item.href}
                                    onClick={onClose}
                                    className="text-4xl font-semibold text-white hover:text-pink-400 transition-colors duration-300"
                                >
                                    {item.label}

                                </a>



                            </motion.li>
                        ))}
                    </ul>

                </motion.div>
            )};
        </AnimatePresence>
    );
};

export default OverlayMenu; 