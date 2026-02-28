import { motion } from 'framer-motion';
import { BsPlayFill } from 'react-icons/bs';
import bottleDragon from '../assets/bottles/bottle-dragon.png';
import bottleLime from '../assets/bottles/bottle-lime.png';
import bottleCitrus from '../assets/bottles/bottle-citrus.png';
import testi1 from '../assets/testimonial/testi1.png';
import testi2 from '../assets/testimonial/testi2.png';
import testi3 from '../assets/testimonial/testi3.png';

const testimonials = [
    {
        id: 1,
        name: "MICHAEL JONES",
        handle: "Brand Manager, NY",
        videoImage: testi1,
        productImage: bottleLime,
        productName: "ZESTY LIME",
        productTag: "Powered by Nexafizz"
    },
    {
        id: 2,
        name: "NATALIE CLARK",
        handle: "Yoga Instructor, LA",
        videoImage: testi2,
        productImage: bottleCitrus,
        productName: "SUNSET CITRUS",
        productTag: "Powered by Nexafizz"
    },
    {
        id: 3,
        name: "AVA JACKSON",
        handle: "Digital Nomad, TX",
        videoImage: testi3,
        productImage: bottleDragon,
        productName: "MYSTIC DRAGON",
        productTag: "Powered by Nexafizz"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Testimonials() {
    return (
        <section className="relative w-full py-24 pb-32 bg-[#f9f9fb] flex flex-col items-center justify-center overflow-hidden">

            {/* Soft decorative background elements matching the playful aesthetic */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none -z-10 -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center gap-16">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-script text-[clamp(28px,8vw,56px)] lg:text-[68px] whitespace-nowrap text-[#1a0033] leading-none m-0 text-center drop-shadow-sm"
                >
                    What Our Customers Say
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-[calc(100%+3rem)] md:w-full -mx-6 md:mx-0 px-6 md:px-0 pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {testimonials.map((test) => (
                        <motion.div
                            variants={itemVariants}
                            key={test.id}
                            className="relative group shrink-0 w-[85vw] sm:w-[400px] md:w-full snap-center h-[480px] lg:h-[560px] rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                            style={{ willChange: 'opacity, transform' }}
                        >
                            {/* Video Thumbnail Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${test.videoImage})` }}
                            ></div>

                            {/* Soft darkening gradient at top and bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none"></div>

                            {/* Top User Info Layer */}
                            <div className="absolute top-5 left-5 right-5 flex items-center gap-3 z-10">
                                <div className="w-10 h-10 rounded-full border-2 border-white/80 overflow-hidden bg-gray-200">
                                    <img src={test.videoImage} alt={test.name} className="w-full h-full object-cover scale-150 object-top" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-xs tracking-wider uppercase drop-shadow-md">{test.name}</span>
                                    <span className="text-white/80 text-[10px] font-medium tracking-wide drop-shadow-md">{test.handle}</span>
                                </div>
                            </div>

                            {/* Center Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 text-white shadow-lg group-hover:bg-white/40 group-hover:scale-110 transition-all duration-300">
                                    <BsPlayFill size={32} className="ml-1" />
                                </div>
                            </div>

                            {/* Bottom Floating Product Tag */}
                            <div className="absolute bottom-5 left-5 right-5 z-10">
                                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-3 flex items-center gap-4 shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500 border border-white/60">
                                    <div className="w-12 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shadow-inner">
                                        <img src={test.productImage} alt={test.productName} className="h-[120%] object-contain scale-[1.3] drop-shadow-md pointer-events-none" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <span className="text-[#1a0033] font-bold text-xs lg:text-sm tracking-widest uppercase">{test.productName}</span>
                                        <span className="text-gray-500 text-[10px] lg:text-xs">{test.productTag}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </section>
    );
}
