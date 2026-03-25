import { useRef } from 'react';

const ParticlesBackground = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);



    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        >



        </canvas>
    );
};

export default ParticlesBackground;