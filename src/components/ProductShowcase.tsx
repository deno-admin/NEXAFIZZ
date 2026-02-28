import { GiLotus, GiLemon, GiElderberry, GiCube, GiWheat } from 'react-icons/gi';
import { MdFlashOn, MdOpacity, MdNoDrinks } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { themes } from './Hero';
import type { ThemeKey } from './Hero';

const showcaseData = {
    blue: {
        title: "Arctic Lotus",
        desc: "Carbonated water, butterfly pea flower extract, natural arctic lotus flavor, cane sugar, citric acid.",
        starColor: "text-blue-400",
        blobColor: "#f3f4f7"
    },
    dragon: {
        title: "Mystic Dragon",
        desc: "Carbonated water, dragon fruit puree, elderberry extract, cane sugar, citric acid.",
        starColor: "text-purple-400",
        blobColor: "#fdf2fd"
    },
    lime: {
        title: "Zesty Lime",
        desc: "Carbonated water, fresh lime juice, natural mint flavor, cane sugar, citric acid.",
        starColor: "text-green-400",
        blobColor: "#f2fdf5"
    },
    citrus: {
        title: "Sunset Citrus",
        desc: "Carbonated water, orange juice, blood orange extract, cane sugar, citric acid.",
        starColor: "text-orange-400",
        blobColor: "#fdf8f2"
    }
};

interface Props {
    activeThemeId: ThemeKey;
}

const ProductShowcase = ({ activeThemeId }: Props) => {
    const activeTheme = themes[activeThemeId];
    const data = showcaseData[activeThemeId];
    return (
        <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center py-20 overflow-hidden">
            {/* Gray Wavy Peanut Background Blob */}
            <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350vw] md:w-[200vw] lg:w-[100%] h-[60vh] md:h-[70vh] lg:h-[90%] max-w-none z-0 pointer-events-none">
                <path
                    d="M-100,300 
                       C-100,-50 400,150 720,200 
                       C1040,250 1540,-50 1540,300 
                       C1540,650 1040,350 720,400 
                       C400,450 -100,650 -100,300 Z"
                    fill={data.blobColor}
                    className="transition-colors duration-700"
                />
            </svg>

            <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 relative z-10">

                {/* Left Side: Ingredients / Description Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 relative w-full lg:max-w-sm lg:mr-8 xl:mr-16 flex items-center justify-center lg:justify-start"
                >
                    {/* Flower Behind Card */}
                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 100, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        key={`top-${activeTheme.id}`}
                        src={activeTheme.asset}
                        alt="Background Asset"
                        className="absolute -top-16 -right-4 w-40 h-40 lg:-top-32 lg:-right-16 lg:w-64 lg:h-64 xl:w-[350px] xl:h-[350px] object-contain rotate-[15deg] drop-shadow-xl z-0 pointer-events-none mix-blend-multiply"
                    />

                    <div className="relative z-10 bg-[rgba(255,255,255,0.3)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.4)] p-8 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col items-center lg:items-start overflow-hidden w-full max-w-sm">
                        <div className="relative z-10 flex flex-col items-center lg:items-start gap-4">
                            <h2 className={`font-script text-[48px] lg:text-[56px] text-[#1a0033] leading-none m-0 text-center lg:text-left transition-colors duration-700 bg-linear-to-br ${activeTheme.titleColor} bg-clip-text text-transparent`}>{data.title}</h2>
                            <div className="w-12 h-1 bg-[#1a0033]/20 rounded-full mb-2"></div>
                            <p className="font-body text-[14px] lg:text-[15px] text-[#1a0033]/80 leading-relaxed max-w-[280px]">
                                {data.desc}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Center: The Product Can */}
                <div className="flex-1 flex justify-center relative lg:sticky lg:top-1/4 my-12 lg:my-0">
                    <div className="relative">
                        {/* Shimmer stars */}
                        <div className={`absolute top-10 -right-4 lg:-right-8 ${data.starColor}`}>
                            <BsStars className="w-7 h-7 animate-pulse drop-shadow-sm" />
                        </div>
                        <div className={`absolute bottom-16 lg:bottom-20 -left-6 lg:-left-12 ${data.starColor}`}>
                            <BsStars className="w-5 h-5 animate-pulse drop-shadow-sm [animation-delay:1s]" />
                        </div>

                        <div className="w-full max-w-[300px] h-[60vh] sm:h-[45vh] lg:h-[65vh]"></div>
                    </div>
                </div>

                {/* Right Side: Flavors and Nutrition Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 relative w-full lg:max-w-[480px] lg:ml-8 xl:ml-16 flex items-center justify-center lg:justify-end mt-4 md:mt-8 lg:mt-0"
                >
                    {/* Flower Behind Card */}
                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 100, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        key={`bot-${activeTheme.id}`}
                        src={activeTheme.asset}
                        alt="Background Asset"
                        className="absolute -bottom-16 -right-4 md:right-24 w-48 h-48 md:w-[320px] md:h-[320px] object-contain -rotate-[180deg] drop-shadow-xl z-0 pointer-events-none mix-blend-multiply"
                    />

                    <div className="relative z-10 w-full max-w-[480px] flex flex-col items-start gap-8 bg-[rgba(255,255,255,0.3)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.4)] p-8 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)]">

                        {/* Flavor Selector */}
                        <div className="flex gap-4 items-center">
                            <button className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.4)] backdrop-blur border border-[rgba(255,255,255,0.6)] flex items-center justify-center shadow-md hover:bg-[rgba(255,255,255,0.6)] transition-colors">
                                <GiElderberry className="w-7 h-7 text-[#1a0033]/80" />
                            </button>
                            <button className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.4)] backdrop-blur border border-[rgba(255,255,255,0.6)] flex items-center justify-center shadow-md hover:bg-[rgba(255,255,255,0.6)] transition-colors">
                                <GiLemon className="w-7 h-7 text-[#1a0033]/80" />
                            </button>
                            {/* Active Selection */}
                            <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_4px_15px_rgba(26,0,51,0.1)] border-2 border-[rgba(255,255,255,0.8)] relative">
                                <span className="absolute inset-0 rounded-full border border-[rgba(26,0,51,0.2)] scale-110"></span>
                                <GiLotus className="w-8 h-8 text-[#1a0033] drop-shadow-sm" />
                            </button>
                        </div>

                        {/* Nutrition Facts */}
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold font-body text-black m-0 tracking-tight">Nutrition</h3>
                                <span className="text-[12px] text-black/60 font-body font-medium">(per 330ml)</span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 w-full">
                                <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.6)] p-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-transform duration-300">
                                    <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-sm text-[#1a0033]/80">
                                        <MdFlashOn size={16} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-[#1a0033]/60 font-bold uppercase tracking-wider">Energy</span>
                                        <span className="text-[13px] font-bold text-[#1a0033] font-body leading-tight">52 kcal</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.6)] p-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-transform duration-300">
                                    <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-sm text-[#1a0033]/80">
                                        <MdOpacity size={16} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-[#1a0033]/60 font-bold uppercase tracking-wider">Fat</span>
                                        <span className="text-[13px] font-bold text-[#1a0033] font-body leading-tight">0g</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.6)] p-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-transform duration-300">
                                    <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-sm text-[#1a0033]/80">
                                        <MdNoDrinks size={16} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-[#1a0033]/60 font-bold uppercase tracking-wider">Alcohol</span>
                                        <span className="text-[13px] font-bold text-[#1a0033] font-body leading-tight">0.0%</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.6)] p-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-transform duration-300">
                                    <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-sm text-[#1a0033]/80">
                                        <GiCube size={16} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-[#1a0033]/60 font-bold uppercase tracking-wider">Sugar</span>
                                        <span className="text-[13px] font-bold text-[#1a0033] font-body leading-tight">7g</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.6)] p-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-transform duration-300">
                                    <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-sm text-[#1a0033]/80">
                                        <GiWheat size={16} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-[#1a0033]/60 font-bold uppercase tracking-wider">Carbs</span>
                                        <span className="text-[13px] font-bold text-[#1a0033] font-body leading-tight">8g</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ProductShowcase;
