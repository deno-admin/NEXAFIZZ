import React from 'react';
import { motion } from 'framer-motion';
import { BsCheckCircleFill, BsXCircle } from 'react-icons/bs';
import { GiSodaCan } from 'react-icons/gi';
import bottleBlue from '../assets/bottles/bottle-blue.png';
import bottleLime from '../assets/bottles/bottle-lime.png';
import bottleCitrus from '../assets/bottles/bottle-citrus.png';
import type { ThemeKey } from './Hero';

const comparisonThemes = {
    blue: {
        containerBg: "from-[#3169B3] via-[#1B4B8A] to-[#3169B3]",
        nebula: "bg-[#E2EDFF]",
        moonGradient: "from-[#91BEF0] via-[#E2EDFF] to-[#FFFFFF]",
        moonShadow: "shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.2),_0_0_100px_rgba(226,237,255,0.5)]",
        tableGlow: "from-[#E2EDFF]/50",
        columnBg: "bg-[#1B4B8A]/50 border-[#E2EDFF]/40"
    },
    dragon: {
        containerBg: "from-[#B854A3] via-[#912B7D] to-[#B854A3]",
        nebula: "bg-[#EFDBFA]",
        moonGradient: "from-[#DDA8EB] via-[#EFDBFA] to-[#FFFFFF]",
        moonShadow: "shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.2),_0_0_100px_rgba(239,219,250,0.5)]",
        tableGlow: "from-[#EFDBFA]/50",
        columnBg: "bg-[#912B7D]/50 border-[#EFDBFA]/40"
    },
    lime: {
        containerBg: "from-[#3D8F54] via-[#216B36] to-[#3D8F54]",
        nebula: "bg-[#E0F5C9]",
        moonGradient: "from-[#90D9A6] via-[#E0F5C9] to-[#FFFFFF]",
        moonShadow: "shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.2),_0_0_100px_rgba(224,245,201,0.5)]",
        tableGlow: "from-[#E0F5C9]/50",
        columnBg: "bg-[#216B36]/50 border-[#E0F5C9]/40"
    },
    citrus: {
        containerBg: "from-[#D17138] via-[#A84A16] to-[#D17138]",
        nebula: "bg-[#FFE3CC]",
        moonGradient: "from-[#EBA16A] via-[#FFE3CC] to-[#FFFFFF]",
        moonShadow: "shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.2),_0_0_100px_rgba(255,227,204,0.5)]",
        tableGlow: "from-[#FFE3CC]/50",
        columnBg: "bg-[#A84A16]/50 border-[#FFE3CC]/40"
    }
};

interface Props {
    activeThemeId: ThemeKey;
}

const Comparison = ({ activeThemeId }: Props) => {
    const compTheme = comparisonThemes[activeThemeId];
    const features = [
        "Alcohol-Free",
        "Real Fruit Flavors",
        "Faith-Aligned",
        "Natural Ingredients",
        "Low Sugar"
    ];

    return (
        <section className="relative w-full py-16 md:py-24 px-3 sm:px-6 md:px-8 bg-white flex justify-center overflow-hidden">
            {/* Dark Space Theme Container - Dynamic Theme */}
            <div className={`relative w-full max-w-[1240px] rounded-[24px] md:rounded-[40px] bg-gradient-to-br ${compTheme.containerBg} overflow-hidden shadow-2xl p-4 sm:p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 transition-colors duration-700`}>

                {/* Background Space Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    {/* Glowing Moon / Planet */}
                    <div className={`absolute -bottom-6 -left-6 w-[100px] h-[100px] md:-bottom-1/4 md:-left-1/4 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr ${compTheme.moonGradient} opacity-80 ${compTheme.moonShadow} blur-[1px] transition-all duration-700`}></div>
                    {/* Floating stars */}
                    <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,0.8)]"></div>
                    <div className="absolute top-[40%] left-[40%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.6)] animate-pulse"></div>
                    <div className="absolute top-[15%] right-[20%] w-2 h-2 bg-white rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,0.6)]"></div>
                    <div className="absolute bottom-[30%] right-[35%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"></div>
                    {/* Glowing nebulas */}
                    <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${compTheme.nebula} rounded-full mix-blend-screen filter blur-[100px] opacity-30 transition-colors duration-700`}></div>
                </div>

                {/* Left Side: Title */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10 w-full text-center md:text-left mb-6 md:mb-0 md:flex-1"
                >
                    <h2 className="font-serif text-[clamp(40px,6vw,70px)] text-white tracking-tight leading-tight mix-blend-overlay">
                        <span className="opacity-90">Us</span> <span className="font-sans font-light opacity-70">VS</span> <span className="opacity-90">Them</span>
                    </h2>
                </motion.div>

                {/* Right Side: Comparison Table Layout */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10 grid grid-cols-[minmax(80px,auto)_minmax(90px,160px)_minmax(80px,160px)] md:grid-cols-[auto_160px_160px] w-full md:w-auto"
                >

                    {/* Column 2 Background (NEXAFIZZ) */}
                    <div className={`${compTheme.columnBg} backdrop-blur-xl border rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden transition-colors duration-700`} style={{ gridColumn: 2, gridRow: `1 / ${features.length + 3}` }}>
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30px] bg-gradient-to-b ${compTheme.tableGlow} to-transparent blur-md transition-all duration-700`}></div>
                    </div>

                    {/* Column 3 Background (Others) */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-[28px] ml-2 md:ml-4" style={{ gridColumn: 3, gridRow: `1 / ${features.length + 3}` }}></div>

                    {/* Header Row */}
                    <div style={{ gridColumn: 1, gridRow: 1 }}></div>

                    {/* NEXAFIZZ Header */}
                    <div className="flex flex-col items-center justify-end pt-6 pb-4 md:pt-8 md:pb-6 z-10" style={{ gridColumn: 2, gridRow: 1 }}>
                        <div className="relative w-16 h-12 md:w-24 md:h-20 mb-3 flex justify-center items-end">
                            <img src={bottleLime} className="absolute -left-1 md:-left-2 bottom-0 w-10 md:w-18 h-auto object-contain -rotate-[15deg] z-0" alt="Lime" />
                            <img src={bottleCitrus} className="absolute -right-1 md:-right-2 bottom-0 w-10 md:w-18 h-auto object-contain rotate-[15deg] z-0" alt="Citrus" />
                            <img src={bottleBlue} className="absolute bottom-0 w-12 md:w-20 h-auto object-contain z-10" alt="Blue" />
                        </div>
                        <span className="font-serif text-white font-bold tracking-widest text-[10px] md:text-base">NEXAFIZZ</span>
                    </div>

                    {/* Others Brand Header */}
                    <div className="flex flex-col items-center justify-end pt-6 pb-4 md:pt-8 md:pb-6 z-10 opacity-70 ml-2 md:ml-4" style={{ gridColumn: 3, gridRow: 1 }}>
                        <div className="w-8 h-8 md:w-12 md:h-12 border border-white/40 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                            <GiSodaCan className="text-white/60 text-xl md:text-3xl" />
                        </div>
                        <span className="font-body text-white/60 font-medium text-[10px] md:text-sm tracking-wider text-center">Others<br className="md:hidden" /> Brand</span>
                    </div>

                    {/* Feature Rows */}
                    {features.map((feature, idx) => (
                        <React.Fragment key={idx}>
                            {/* Feature Label */}
                            <div className="flex items-center justify-end pr-3 md:pr-8 py-3 md:py-6" style={{ gridColumn: 1, gridRow: idx + 2 }}>
                                <span className="text-white/90 font-medium text-[10px] md:text-sm tracking-wide text-right whitespace-normal leading-tight">{feature}</span>
                            </div>

                            {/* NEXAFIZZ Check */}
                            <div className="z-10 flex items-center justify-center py-3 md:py-6" style={{ gridColumn: 2, gridRow: idx + 2 }}>
                                <BsCheckCircleFill className="text-white text-base md:text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                            </div>

                            {/* Others Brand X */}
                            <div className="z-10 flex items-center justify-center py-3 md:py-6 ml-2 md:ml-4" style={{ gridColumn: 3, gridRow: idx + 2 }}>
                                <BsXCircle className="text-white/30 text-base md:text-xl" />
                            </div>
                        </React.Fragment>
                    ))}

                    {/* Spacer row for padding at bottom */}
                    <div style={{ gridColumn: 1, gridRow: features.length + 2, height: '24px' }}></div>
                </motion.div>

            </div>
        </section>
    );
};

export default Comparison;
