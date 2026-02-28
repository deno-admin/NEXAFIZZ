import { useState } from 'react';
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

    return (
        <div className="min-h-screen w-full relative overflow-x-clip">
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
