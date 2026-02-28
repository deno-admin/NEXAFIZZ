import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';

const FAQ = () => {
    const faqs = [
        {
            id: 1,
            question: "Is Nexafizz really 100% alcohol-free?",
            answer: "Yes! Every can of Nexafizz is certified 0.0% alcohol — halal, safe, and clean."
        },
        {
            id: 2,
            question: "Are your drinks vegan-friendly?",
            answer: "Absolutely. All our ingredients are plant-based and cruelty-free, perfect for a vegan lifestyle."
        },
        {
            id: 3,
            question: "Where can I buy your drinks?",
            answer: "You can purchase directly through our website, or find us in select boutique grocery stores nationwide."
        },
        {
            id: 4,
            question: "Do your drinks contain artificial sweeteners?",
            answer: "No, we never use artificial sweeteners. We use a hint of natural agave and real fruit juice for the perfect light sweetness."
        },
        {
            id: 5,
            question: "Where do you ship?",
            answer: "We currently ship anywhere in the contiguous United States, with plans for international shipping soon."
        }
    ];

    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full py-24 bg-white flex flex-col items-center px-4">
            <h2 className="font-serif text-[48px] md:text-[56px] text-[#1a0033] mb-12 flex items-center justify-center">
                FAQS
            </h2>

            <div className="w-full max-w-[800px] flex flex-col gap-4">
                {faqs.map((faq) => (
                    <div
                        key={faq.id}
                        className={`w-full rounded-[24px] overflow-hidden transition-colors duration-300 ${openId === faq.id ? 'bg-[#f4f4f5]' : 'bg-[#fafafa]'}`}
                    >
                        <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full px-8 py-5 flex items-center justify-between outline-none"
                        >
                            <span className="font-bold text-[#1a0033] text-sm md:text-base text-left tracking-wide">
                                {faq.question}
                            </span>
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
                                {openId === faq.id ? (
                                    <BsDashLg className="text-[#1a0033] text-sm" />
                                ) : (
                                    <BsPlusLg className="text-[#1a0033] text-sm" />
                                )}
                            </div>
                        </button>

                        <AnimatePresence>
                            {openId === faq.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <div className="px-8 pb-6 text-sm text-gray-500 font-medium leading-relaxed max-w-[90%]">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
