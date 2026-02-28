import { useScroll, useTransform, motion } from 'framer-motion';
import { MdNoDrinks, MdLocalDrink } from 'react-icons/md';
import { GiCherry, GiCube } from 'react-icons/gi';

import bgBlue from '../assets/hero-bg/hero_bg_blue.png';
import bgCitrus from '../assets/hero-bg/hero_bg_citrus.png';
import bgDragon from '../assets/hero-bg/hero_bg_dragon.png';
import bgLime from '../assets/hero-bg/hero_bg_lime.png';

import assetBlue from '../assets/theme-asset/blue-artic-lotus.png';
import assetCitrus from '../assets/theme-asset/citrus.png';
import assetDragon from '../assets/theme-asset/dragon.png';
import assetLime from '../assets/theme-asset/lime.png';

import bottleDragon from '../assets/bottles/bottle-dragon.png';
import bottleLime from '../assets/bottles/bottle-lime.png';
import bottleCitrus from '../assets/bottles/bottle-citrus.png';
import bottleBlue from '../assets/bottles/bottle-blue.png';

export const themes = {
    blue: {
        id: 'blue',
        name: 'Arctic Lotus',
        bg: bgBlue,
        asset: assetBlue,
        icon: bottleBlue,
        titleColor: 'from-[#1a0033] to-[#2b7de9]',
        btnBg: 'bg-[#027ce3]',
        btnHover: 'group-hover:bg-[#1a8cff]',
        btnShadow: 'shadow-[0_0_10px_rgba(2,124,227,0.4)]',
        btnHoverShadow: 'group-hover:shadow-[0_0_15px_rgba(26,140,255,0.6)]',
        dot: 'from-[#1a8cff] to-[#027ce3]'
    },
    dragon: {
        id: 'dragon',
        name: 'Mystic Dragon',
        bg: bgDragon,
        asset: assetDragon,
        icon: bottleDragon,
        titleColor: 'from-[#1a0033] to-[#a832cc]',
        btnBg: 'bg-[#e6a8ff]',
        btnHover: 'group-hover:bg-[#f5dfff]',
        btnShadow: 'shadow-[0_0_10px_rgba(230,168,255,0.4)]',
        btnHoverShadow: 'group-hover:shadow-[0_0_15px_rgba(245,223,255,0.6)]',
        dot: 'from-[#e6a8ff] to-[#a832cc]'
    },
    lime: {
        id: 'lime',
        name: 'Zesty Lime',
        bg: bgLime,
        asset: assetLime,
        icon: bottleLime,
        titleColor: 'from-[#1a0033] to-[#6bda5a]',
        btnBg: 'bg-[#a1f392]',
        btnHover: 'group-hover:bg-[#bdf5b3]',
        btnShadow: 'shadow-[0_0_10px_rgba(161,243,146,0.4)]',
        btnHoverShadow: 'group-hover:shadow-[0_0_15px_rgba(189,245,179,0.6)]',
        dot: 'from-[#a1f392] to-[#6bda5a]'
    },
    citrus: {
        id: 'citrus',
        name: 'Sunset Citrus',
        bg: bgCitrus,
        asset: assetCitrus,
        icon: bottleCitrus,
        titleColor: 'from-[#1a0033] to-[#ffb347]',
        btnBg: 'bg-[#ffdf80]',
        btnHover: 'group-hover:bg-[#ffeaad]',
        btnShadow: 'shadow-[0_0_10px_rgba(255,223,128,0.4)]',
        btnHoverShadow: 'group-hover:shadow-[0_0_15px_rgba(255,234,173,0.6)]',
        dot: 'from-[#ffdf80] to-[#ffb347]'
    }
};

export type ThemeKey = keyof typeof themes;
export const themeKeys: ThemeKey[] = ['blue', 'dragon', 'lime', 'citrus'];

interface HeroProps {
    activeThemeId: ThemeKey;
    setActiveThemeId: (id: ThemeKey) => void;
    onOpenModal: () => void;
}

const Hero = ({ activeThemeId, setActiveThemeId, onOpenModal }: HeroProps) => {
    const activeTheme = themes[activeThemeId];

    // Fade out asset on scroll
    const { scrollY } = useScroll();
    const assetOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="hero relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-[120px] pb-[60px] md:pt-[80px] md:pb-[40px] transition-colors duration-700">
            {/* Background with image */}
            <div
                className="hero-background absolute inset-0 -z-10 bg-center bg-bottom bg-no-repeat bg-[#ffffff] bg-cover md:bg-[length:100%_auto] transition-all duration-700"
                style={{
                    backgroundImage: `url(${activeTheme.bg})`
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.08)] via-transparent to-[rgba(255,255,255,0.1)] pointer-events-none"></div>
            </div>

            {/* Bottom Fog Fade Effect */}
            <div className="absolute bottom-[-1px] left-0 w-full h-[30vh] md:h-[35vh] bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none z-[0]"></div>

            {/* Center Main Asset from theme-asset */}
            <motion.div
                style={{ opacity: assetOpacity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] z-[10] w-[100%] sm:w-[90%] md:w-[90%] max-w-[600px] pointer-events-none md:mt-10 flex justify-center items-center"
            >
                <img
                    key={activeTheme.id}
                    src={activeTheme.asset}
                    alt={activeTheme.name}
                    className="w-[80%] md:w-full h-auto max-h-[45vh] md:max-h-[60vh] object-contain animate-fade-in-up drop-shadow-2xl"
                />
            </motion.div>

            {/* Left Feature Glass Card */}
            <div className="hidden lg:flex absolute left-[5%] xl:left-[8%] top-[60%] -translate-y-1/2 flex-col gap-5 bg-[rgba(255,255,255,0.3)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.4)] p-6 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] z-[15] pointer-events-auto animate-fade-in-up [animation-delay:0.4s] [animation-fill-mode:backwards]">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black border border-white/60 shadow-md"><MdNoDrinks size={14} /></div>
                        <span className="font-body text-[12px] font-bold tracking-tight text-black drop-shadow-sm">No Alcohol</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black border border-white/60 shadow-md"><GiCherry size={14} /></div>
                        <span className="font-body text-[12px] font-bold tracking-tight text-black drop-shadow-sm">Fruit Flavour</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black border border-white/60 shadow-md"><GiCube size={14} /></div>
                        <span className="font-body text-[12px] font-bold tracking-tight text-black drop-shadow-sm">Low Sugar</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black border border-white/60 shadow-md"><MdLocalDrink size={14} /></div>
                        <span className="font-body text-[12px] font-bold tracking-tight text-black drop-shadow-sm">Great Taste</span>
                    </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-1"></div>

                <div className="flex items-center justify-between gap-6">
                    <div className="flex flex-col">
                        <div className="flex text-[#ffb800] text-[12px] tracking-[1px] mb-0.5">
                            ★★★★★
                        </div>
                        <span className="font-body text-[10px] font-medium text-black/80">
                            <span className="font-bold text-black">4.8/5</span> from <span className="font-bold text-black">250+</span> Reviews
                        </span>
                    </div>
                    <div className="flex -space-x-2">
                        <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-[28px] h-[28px] rounded-full border-[1.5px] border-white shadow-sm" />
                        <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-[28px] h-[28px] rounded-full border-[1.5px] border-white shadow-sm" />
                        <img src="https://i.pravatar.cc/100?img=41" alt="User" className="w-[28px] h-[28px] rounded-full border-[1.5px] border-white shadow-sm" />
                    </div>
                </div>
            </div>

            {/* Right Feature - Vertical Flavor Variations */}
            <div className="hidden lg:flex absolute right-[5%] xl:right-[8%] top-[60%] -translate-y-1/2 flex-col gap-6 items-center z-[15] pointer-events-auto animate-fade-in-up [animation-delay:0.5s] [animation-fill-mode:backwards]">

                <div className="flex flex-col gap-4 bg-[rgba(255,255,255,0.2)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.5)] p-2.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.1)]">

                    {themeKeys.map((key) => {
                        const theme = themes[key];
                        const isActive = activeThemeId === key;
                        return (
                            <div
                                key={key}
                                onClick={() => setActiveThemeId(key)}
                                className={`group relative w-12 h-12 rounded-full cursor-pointer flex items-center justify-center border transition-all duration-300 shadow-sm hover:shadow-md ${isActive ? 'bg-white border-white scale-110 shadow-md ring-4 ring-white/30' : 'bg-white/50 border-white/60 hover:bg-white'}`}
                            >
                                <img src={theme.icon} alt={theme.name} className={`h-[28px] object-contain drop-shadow-sm transition-transform duration-300 ${isActive ? 'scale-110 -translate-y-0.5' : 'group-hover:scale-110 group-hover:-translate-y-0.5'}`} />
                                {/* Tooltip */}
                                <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                    <div className="bg-white/90 backdrop-blur-sm text-black font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg border border-black/5 whitespace-nowrap shadow-lg flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${theme.dot}`}></div>
                                        {theme.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>

            <div className="hero-content relative mt-8 lg:mt-6 max-w-[1440px] w-full px-8 flex flex-col items-center justify-between flex-1 md:px-4">
                {/* Main Headline - Centered at top */}
                <div className="hero-text relative z-[20] text-center animate-fade-in-up max-w-full flex flex-col items-center gap-0">
                    <h1 className={`hero-title font-script text-[clamp(48px,8vw,64px)] font-normal tracking-normal text-black m-0 leading-none whitespace-nowrap bg-linear-to-br ${activeTheme.titleColor} bg-clip-text text-transparent transition-all duration-700 delay-100`}>
                        Drink Different
                    </h1>
                    <p className="hero-subtitle font-body text-[clamp(9px,1.2vw,9px)] font-normal text-[#4a4a4a] max-w-[600px] mx-auto leading-relaxed opacity-80 tracking-[0.2px] bg-white/40 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm mt-0">
                        Delicious, alcohol-free cold drinks made with real fruit, natural herbs, and zero compromise
                    </p>
                </div>

                {/* CTA Button - Pushed to bottom of container */}
                <div className="hero-cta relative z-[20] flex justify-center animate-fade-in-up mt-auto pb-2 lg:pb-0 [animation-delay:0.6s] [animation-fill-mode:backwards]">
                    <button onClick={onOpenModal} className="cta-button group pl-8 pr-2.5 py-2 text-sm font-bold tracking-[1px] bg-black text-white border-none rounded-full flex items-center gap-4 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300 pointer-events-auto">
                        <span className="relative z-[1]">SHOP NOW</span>
                        <div className={`text-black rounded-full p-1.5 w-9 h-9 flex items-center justify-center transition-all duration-500 group-hover:-rotate-45 ${activeTheme.btnBg} ${activeTheme.btnHover} ${activeTheme.btnShadow} ${activeTheme.btnHoverShadow}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
