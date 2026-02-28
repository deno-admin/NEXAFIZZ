import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import bottleBlue from '../assets/bottles/bottle-blue.png';
import bottleLime from '../assets/bottles/bottle-lime.png';
import bottleDragon from '../assets/bottles/bottle-dragon.png';
import bottleCitrus from '../assets/bottles/bottle-citrus.png';

const products = [
    {
        id: 1,
        name: "ARCTIC LOTUS",
        price: "$48",
        size: "12 PACK",
        topBg: "bg-[#cce0ff]",
        bottomBg: "bg-[#e5f0ff]",
        btnBg: "bg-[#027ce3]",
        btnHover: "hover:bg-[#1a8cff]",
        btnShadow: "shadow-[0_0_10px_rgba(2,124,227,0.4)]",
        btnHoverShadow: "hover:shadow-[0_0_15px_rgba(26,140,255,0.6)]",
        image: bottleBlue,
    },
    {
        id: 2,
        name: "ZESTY LIME",
        price: "$48",
        size: "12 PACK",
        topBg: "bg-[#d1ebb5]",
        bottomBg: "bg-[#e4fcce]",
        btnBg: "bg-[#a1f392]",
        btnHover: "hover:bg-[#8ee67f]",
        btnShadow: "shadow-[0_0_10px_rgba(161,243,146,0.4)]",
        btnHoverShadow: "hover:shadow-[0_0_15px_rgba(142,230,127,0.6)]",
        image: bottleLime,
    },
    {
        id: 3,
        name: "MYSTIC DRAGON",
        price: "$48",
        size: "12 PACK",
        topBg: "bg-[#e5bbed]",
        bottomBg: "bg-[#f2dbf8]",
        btnBg: "bg-[#e6a8ff]",
        btnHover: "hover:bg-[#d88bed]",
        btnShadow: "shadow-[0_0_10px_rgba(230,168,255,0.4)]",
        btnHoverShadow: "hover:shadow-[0_0_15px_rgba(216,139,237,0.6)]",
        image: bottleDragon,
    },
    {
        id: 4,
        name: "SUNSET CITRUS",
        price: "$48",
        size: "12 PACK",
        topBg: "bg-[#ffe2bb]",
        bottomBg: "bg-[#fff1de]",
        btnBg: "bg-[#ffb347]",
        btnHover: "hover:bg-[#ffa31a]",
        btnShadow: "shadow-[0_0_10px_rgba(255,179,71,0.4)]",
        btnHoverShadow: "hover:shadow-[0_0_15px_rgba(255,163,26,0.6)]",
        image: bottleCitrus,
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

interface Props {
    onOpenModal: () => void;
}

const FanFavorites = ({ onOpenModal }: Props) => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#f2eff8] via-white to-white flex flex-col items-center justify-center py-20 pb-32">
            <div className="max-w-[1440px] w-full mx-auto px-6 relative z-10 flex flex-col items-center gap-16">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-script text-[64px] lg:text-[76px] text-black leading-none m-0 text-center drop-shadow-sm"
                >
                    Fan Favorites
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-[1440px] mx-auto"
                >
                    {products.map((product) => (
                        <motion.div
                            variants={itemVariants}
                            key={product.id}
                            className={`rounded-[32px] overflow-hidden flex flex-col relative w-full ${product.bottomBg} shadow-sm hover:shadow-xl transition-shadow duration-500`}
                        >
                            {/* Top Half Color Split */}
                            <div className={`absolute top-0 left-0 w-full h-[60%] ${product.topBg} z-0 border-b border-black/5`}></div>

                            {/* Bottle Image Container */}
                            <div className="relative z-10 pt-10 lg:pt-12 flex justify-center items-center pointer-events-none group">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-56 lg:h-64 scale-[1.3] lg:scale-[1.5] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.35] lg:group-hover:scale-[1.55] group-hover:-translate-y-2"
                                />
                            </div>

                            {/* Card Content Footer */}
                            <div className="relative z-10 p-5 lg:p-6 mt-auto">

                                {/* Black action pill */}
                                <div className="bg-black rounded-full flex items-center justify-between pl-5 pr-1.5 py-1.5 shadow-lg mb-3 hover:scale-[1.02] transition-transform duration-300">
                                    <span className="text-white font-bold text-[8px] lg:text-[9px] tracking-[0.1em] uppercase">
                                        {product.name}
                                    </span>
                                    <button onClick={onOpenModal} className={`${product.btnBg} text-black font-bold text-[8px] lg:text-[8px] uppercase px-4 lg:px-5 py-3 rounded-full flex items-center gap-2 ${product.btnHover} transition-colors ${product.btnShadow} ${product.btnHoverShadow}`}>
                                        SHOP NOW
                                        <BsArrowRight size={14} className="stroke-[1px]" />
                                    </button>
                                </div>

                                {/* Info pill */}
                                <div className="bg-white/60 rounded-full px-6 py-3.5 flex flex-row items-center justify-between w-full shadow-sm border border-white/80 mt-2">
                                    <span className="text-[#1a0033] font-bold text-xs lg:text-sm uppercase tracking-wider">
                                        {product.size}
                                    </span>
                                    <span className="text-[#1a0033] font-black text-sm lg:text-base tracking-wide">
                                        {product.price}
                                    </span>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default FanFavorites;
