"use client";

import CustomCursor from "@/components/CustomCursor";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
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
        </div>
        
      )}
    </>
  );
};
