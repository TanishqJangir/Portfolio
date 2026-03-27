import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <div className="bg-green-300 text-2xl font-extrabold h-screen flex justify-center items-center">
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
    </div>
  );
};
