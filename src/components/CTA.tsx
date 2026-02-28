import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import bottleDragon from '../assets/bottles/bottle-dragon.png';
import bottleLime from '../assets/bottles/bottle-lime.png';
import bottleCitrus from '../assets/bottles/bottle-citrus.png';
import bottleBlue from '../assets/bottles/bottle-blue.png';
import ctaStage from '../assets/cta-stage.svg';
import { themes } from './Hero';
import type { ThemeKey } from './Hero';

interface Props {
    activeThemeId: ThemeKey;
    onOpenModal: () => void;
}

const CTA = ({ activeThemeId, onOpenModal }: Props) => {
    const activeTheme = themes[activeThemeId];
    const orbColors = {
        blue: { left: "bg-[#00ccff]", right: "bg-[#2b7de9]" },
        dragon: { left: "bg-[#e6a8ff]", right: "bg-[#a832cc]" },
        lime: { left: "bg-[#a1f392]", right: "bg-[#6bda5a]" },
        citrus: { left: "bg-[#ffdf80]", right: "bg-[#ffb347]" }
    };

    return (
        <section className="relative w-full pb-32 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#fdf7ff] to-[#f5f1fc]">

            {/* Background glowing orbs */}
            <div className={`absolute top-1/2 left-0 w-[400px] h-[400px] ${orbColors[activeThemeId].left} rounded-full mix-blend-multiply filter blur-[150px] opacity-40 transition-colors duration-700`}></div>
            <div className={`absolute top-1/2 right-0 w-[400px] h-[400px] ${orbColors[activeThemeId].right} rounded-full mix-blend-multiply filter blur-[150px] opacity-30 transition-colors duration-700`}></div>

            {/* The 4 bottles display Desk*/}
            <div className="relative w-full max-w-[600px] h-[350px] md:h-[450px] hidden md:flex items-end justify-center mb-22 select-none pointer-events-none">
                <div className='relative w-full h-full translate-x-4 md:translate-x-6'>
                    {/* Center Green Bottle - Highest */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="absolute inset-0 flex items-end justify-center z-10"
                    >
                        <div id='lime-stage' className="absolute -bottom-11 right-0 w-full flex justify-center z-0">
                            <img src={ctaStage} alt="Stage" className="w-[30%] max-w-[700px] h-auto object-contain drop-shadow-xl translate-y-8" />
                        </div>
                        <div className="absolute z-10 -mt-20 md:-mt-32 drop-shadow-2xl">
                            <img src={bottleLime} alt="Zesty Lime" className="h-[250px] md:h-[320px] object-contain drop-shadow-xl" />
                        </div>
                    </motion.div>

                    {/* Left Purple Bottle */}
                    <motion.div
                        initial={{ y: 50, opacity: 0, x: 20 }}
                        whileInView={{ y: 0, opacity: 1, x: -50 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="absolute inset-0 z-20 "
                    >
                        <div id='dragon-stage' className="absolute -bottom-6 right-38 w-full flex justify-center z-0">
                            <img src={ctaStage} alt="Stage" className="w-[30%] max-w-[700px] h-auto object-contain drop-shadow-xl translate-y-8" />
                        </div>
                        <div className="absolute -left-4 md:left-[3.5%] bottom-8 z-20">
                            <img src={bottleDragon} alt="Mystic Dragon" className="h-[200px] md:h-[260px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]" />
                        </div>
                    </motion.div>

                    {/* Right Blue/Orange Bottle */}
                    <motion.div
                        initial={{ y: 50, opacity: 0, x: -20 }}
                        whileInView={{ y: 0, opacity: 1, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="absolute inset-0 z-[5]"
                    >
                        <div id='citrus-stage' className="absolute bottom-3 left-25 w-full flex justify-center z-0">
                            <img src={ctaStage} alt="Stage" className="w-[30%] max-w-[700px] h-auto object-contain drop-shadow-xl translate-y-8" />
                        </div>
                        <div className="absolute -right-4 md:right-[10%] bottom-16 z-[5]">
                            <img src={bottleCitrus} alt="Sunset Citrus" className="h-[210px] md:h-[280px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]" />
                        </div>
                    </motion.div>

                    {/* Missing Blue Bottle - added behind left/center */}
                    <motion.div
                        initial={{ y: 50, opacity: 0, x: 10 }}
                        whileInView={{ y: 0, opacity: 1, x: -20 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="absolute inset-0 z-[8]"
                    >
                        <div id='blue-stage' className="absolute bottom-18 right-15 w-full flex justify-center z-0">
                            <img src={ctaStage} alt="Stage" className="w-[30%] max-w-[700px] h-auto object-contain drop-shadow-xl translate-y-8" />
                        </div>
                        <div className="absolute left-[8%] md:left-[15%] bottom-32 z-[8]">
                            <img src={bottleBlue} alt="Arctic Lotus" className="h-[220px] md:h-[290px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* The 4 bottles display Mobile*/}
            <div className="relative w-full h-[220px] flex md:hidden items-center justify-center mb-10 mt-8 select-none pointer-events-none px-4 z-10">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-1/4 flex justify-center"
                >
                    <img src={bottleDragon} alt="Mystic Dragon" className="h-[160px] max-w-none object-contain drop-shadow-xl z-10 scale-[1.2]" />
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-1/4 flex justify-center"
                >
                    <img src={bottleLime} alt="Zesty Lime" className="h-[160px] max-w-none object-contain drop-shadow-xl z-20 scale-[1.2]" />
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-1/4 flex justify-center"
                >
                    <img src={bottleCitrus} alt="Sunset Citrus" className="h-[160px] max-w-none object-contain drop-shadow-xl z-20 scale-[1.2]" />
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-1/4 flex justify-center"
                >
                    <img src={bottleBlue} alt="Arctic Lotus" className="h-[160px] max-w-none object-contain drop-shadow-xl z-10 scale-[1.2]" />
                </motion.div>
            </div>

            {/* Text block */}
            <div className="relative z-30 text-center flex flex-col items-center px-4">
                <h2 className="font-serif text-[42px] md:text-[56px] text-[#1a0033] leading-[1.1] mb-4">
                    Ready for a Better <br />
                    Refreshment?
                </h2>
                <p className="text-gray-600 font-medium tracking-wide mb-10 max-w-[400px]">
                    Order your first box today and taste the natural difference
                </p>

                {/* CTA Button */}
                <button onClick={onOpenModal} className="group pl-8 pr-2 py-2 bg-black text-white rounded-full flex items-center justify-between gap-6 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
                    <span className="font-bold text-xs tracking-[0.2em] uppercase whitespace-nowrap">Try Nexafizz Now</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-all duration-300 drop-shadow-md ${activeTheme.btnBg} ${activeTheme.btnHover}`}>
                        <BsArrowRight size={20} />
                    </div>
                </button>
            </div>

        </section>
    );
};

export default CTA;
