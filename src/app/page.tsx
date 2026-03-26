import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-red-400 text-2xl font-extrabold h-screen flex justify-center items-center">
      <CustomCursor />
      <ParticlesBackground/>
    </div>
  );
};
