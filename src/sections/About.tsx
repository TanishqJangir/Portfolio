

const About = () => {

    const glows = [
        "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
        "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
    ]


    return (
        <section id="about" className="min-h-screen w-full bg-black flex items-center justify-center relative text-white">
            
            <div className="absolute inset-0 pointer-events-none">
                {glows.map((c, index) => (
                    <div key={index} className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} />
                ))}
            </div>
            
            <h1 className="text-7xl font-bold text-center mt-20">About Me</h1>
        </section>
    )
};

export default About;