import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollBottleProps {
    bottleImage: string;
}

export default function ScrollBottle({ bottleImage }: ScrollBottleProps) {
    const { scrollY } = useScroll();
    const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const translateYStart = (windowHeight || 800) * 0.08;
    // 0.09 = ~70px on 749px viewport, measured distance from viewport center to SVG blob center on mobile
    const translateYEnd = isMobile ? (windowHeight || 800) * 0.09 : 0;

    // Use a custom transform function so we apply easing ONLY during the first 100vh 
    const transitionEase = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    // Use easing function cleanly with clamped bounds
    // Once scrollY > windowHeight, values clamp to 1.2, -12, and translateYEnd
    const scale = useTransform(scrollY, [0, windowHeight], [1, 1.2], { ease: transitionEase });
    const rotate = useTransform(scrollY, [0, windowHeight], [0, -12], { ease: transitionEase });
    const translateY = useTransform(scrollY, [0, windowHeight], [translateYStart, translateYEnd], { ease: transitionEase });


    return (
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-[40]">
            {/* Outer: handles entry animation only (percentage-based y centering) */}
            <motion.div
                initial={{ opacity: 0, y: "-30%", x: "-50%" }}
                animate={{ opacity: 1, y: "-50%", x: "-50%" }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="absolute top-[50%] left-1/2 w-full flex justify-center items-center"
            >
                {/* Inner: handles scroll-driven transforms (scale, rotate, pixel translateY) */}
                <motion.div
                    style={{
                        scale,
                        rotate,
                        translateY
                    }}
                    className="flex justify-center items-center"
                >
                    <img
                        key={bottleImage}
                        src={bottleImage}
                        alt="Nexafizz Can"
                        className="relative w-[80vw] sm:w-[55vw] lg:w-[750px] h-auto max-h-[55vh] lg:max-h-[65vh] object-contain drop-shadow-2xl z-[1] select-none [-webkit-box-reflect:below_0px_linear-gradient(to_bottom,rgba(0,0,0,0)_85%,rgba(0,0,0,0.2))]"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
