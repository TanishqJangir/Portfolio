import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Home from "@/sections/Home";

export default function App() {
  return (
    <div className="relative gradient text-white">
      <CustomCursor />
      <Navbar />
      <Home/>
    </div>
  );
};
