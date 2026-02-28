import { motion, AnimatePresence } from 'framer-motion';
import shopAllBg from '../assets/shop-all-bg.png';
import { themes } from './Hero';
import type { ThemeKey } from './Hero';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    activeThemeId: ThemeKey;
}

export default function WorkSampleModal({ isOpen, onClose, activeThemeId }: Props) {
    const activeTheme = themes[activeThemeId];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                >
                    {/* Overlay click to close */}
                    <div className="absolute inset-0" onClick={onClose}></div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        className="relative w-[95vw] max-w-[1200px] h-[85vh] rounded-3xl overflow-hidden  flex flex-col items-center justify-center p-8 bg-cover bg-center"
                        style={{ backgroundImage: `url(${shopAllBg})` }}
                    >
                        {/* Inner dimming to ensure text readability against the background */}
                        <div className="absolute "></div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className={`absolute top-6 right-6 w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center text-black border border-white/50 transition-colors z-[10] ${activeTheme.btnBg} ${activeTheme.btnHover} ${activeTheme.btnShadow} ${activeTheme.btnHoverShadow}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Centered Content */}
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-between pointer-events-none p-4">
                            <h3 className="font-serif text-[clamp(28px,3vw,56px)] leading-tight text-[#1a0033] text-center whitespace-normal md:whitespace-nowrap drop-shadow-sm mt-16 md:-mt-2 px-6 md:px-0">
                                This is a sample of our work
                            </h3>

                            <a
                                href="https://denovation.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group pl-8 pr-2.5 py-2 text-sm md:text-base font-bold tracking-[1px] uppercase bg-[#1a0033] text-white border-none rounded-full flex items-center gap-4 shadow-[0_10px_20px_rgba(26,0,51,0.2)] hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(26,0,51,0.3)] transition-all duration-300 pointer-events-auto no-underline"
                            >
                                <span className="relative z-[1]">Get Started Together</span>
                                <div className={`text-[#1a0033] rounded-full p-2 w-10 h-10 flex items-center justify-center transition-all duration-500 group-hover:-rotate-45 ${activeTheme.btnBg} ${activeTheme.btnHover} ${activeTheme.btnShadow} ${activeTheme.btnHoverShadow}`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
