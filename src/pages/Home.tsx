"use client";

import CustomCursor from "@/components/CustomCursor";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { useState } from "react";

export default function Home() {

  const [showIntro, setShowIntro] = useState(false);

  return (
    <>

      {!showIntro && <IntroAnimation onFinish={() => setShowIntro(true)} />}

      {showIntro && (

        <div className="relative gradient text-white">
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>

      )}
    </>
  );
};
