import { useState, useEffect } from 'react';
import { GiBottleCap } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero, { themes } from './components/Hero';
import type { ThemeKey } from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import FanFavorites from './components/FanFavorites';
import ScrollBottle from './components/ScrollBottle';
import ScrollAnimationWrapper from './components/ScrollAnimationWrapper';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WorkSampleModal from './components/WorkSampleModal';

function App() {
    const [activeThemeId, setActiveThemeId] = useState<ThemeKey>('blue');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Provide "backup time" to let all elements render
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen w-full relative overflow-x-clip">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black"
                    >
                        <motion.div
                            animate={{
                                y: [0, -80, 0],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <GiBottleCap className="w-24 h-24 mb-6 text-white" />
                        </motion.div>
                        <div className="w-48 h-1 bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Header onOpenModal={() => setIsModalOpen(true)} />
            <ScrollAnimationWrapper
                heroComponent={
                    <Hero activeThemeId={activeThemeId} setActiveThemeId={setActiveThemeId} onOpenModal={() => setIsModalOpen(true)} />
                }
                productShowcaseComponent={<ProductShowcase activeThemeId={activeThemeId} />}
                bottleComponent={
                    <ScrollBottle bottleImage={themes[activeThemeId].icon} />
                }
            />
            <FanFavorites onOpenModal={() => setIsModalOpen(true)} />
            <Testimonials />
            <Comparison activeThemeId={activeThemeId} />
            <FAQ />
            <CTA activeThemeId={activeThemeId} onOpenModal={() => setIsModalOpen(true)} />
            <Footer />

            <WorkSampleModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                activeThemeId={activeThemeId}
            />
        </div>
    );
}

export default App;
