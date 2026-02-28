import { BsArrowRight } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="relative w-full bg-transparent z-20 flex flex-col -mt-[40px] md:-mt-[80px]">

            {/* SVG Liquid Wave cutting top edge */}
            <div className="w-full flex-shrink-0 overflow-hidden leading-none text-[#111111] -mb-[1px]">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] block text-[#111111]">
                    <path
                        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                        className="fill-current"
                    ></path>
                </svg>
            </div>

            {/* Black Full-Width Footer */}
            <div className="relative w-full bg-[#111111] z-10 overflow-hidden flex-1">

                {/* Inner Content Wrapper */}
                <div className="relative z-20 pt-10 md:pt-16 pb-12 px-6 md:px-16 w-full max-w-[1440px] mx-auto flex flex-col justify-between overflow-hidden">

                    <div className="grid grid-cols-2 flex-wrap lg:grid-cols-5 gap-8 md:gap-12 w-full mb-[80px] md:mb-[120px] text-white relative z-20">
                        {/* Help Column */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-serif text-xl md:text-[22px] text-[#fdf7ff]">Help</h4>
                            <div className="flex flex-col gap-3.5">
                                <a href="#" className="font-sans text-[10px] text-gray-400 hover:text-white transition-colors tracking-widest uppercase">FAQS</a>
                                <a href="#" className="font-sans text-[10px] text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Returns</a>
                                <a href="#" className="font-sans text-[10px] text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Contact Us</a>
                            </div>
                        </div>

                        {/* Shop Column */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-serif text-xl md:text-[22px] text-[#fdf7ff]">Shop</h4>
                            <div className="flex flex-col gap-3.5">
                                <a href="#" className="font-sans text-[10px] text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Cherry Bliss</a>
                                <a href="#" className="font-sans text-[10px] text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Grape Rush</a>
                                <a href="#" className="font-sans text-[10px] text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Zesty Lime</a>
                            </div>
                        </div>

                        {/* Social Column */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-serif text-xl md:text-[22px] text-[#fdf7ff]">Social</h4>
                            <div className="flex flex-col gap-3.5">
                                <a href="#" className="font-sans text-[10px] text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Instagram</a>
                                <a href="#" className="font-sans text-[10px] text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Facebook</a>
                                <a href="#" className="font-sans text-[10px] text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Tik Tok</a>
                            </div>
                        </div>

                        {/* Newsletter Column */}
                        <div className="col-span-2 lg:col-span-2 flex flex-col gap-5 md:pl-16">
                            <h4 className="font-serif text-2xl md:text-[28px] tracking-tight text-[#fdf7ff]">Get up to <span className="font-serif">20% OFF</span></h4>
                            <div className="relative w-full max-w-[360px]">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-[#1c1c1c] border border-white/5 rounded-full py-4 pl-6 pr-14 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500/70"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors shadow-md">
                                    <BsArrowRight size={14} strokeWidth={0.5} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Huge NEXAFIZZ Text */}
                    <div className="w-full flex justify-center relative z-10 select-none pb-6 md:pb-2 pt-16 overflow-hidden">
                        <h1 className="font-serif tracking-tighter w-full text-center text-[21vw] sm:text-[19vw] md:text-[17vw] lg:text-[16vw] xl:text-[220px] leading-[0.75] text-[#1c1c1c] m-0 p-0 transform scale-y-110 whitespace-nowrap">
                            NEXAFIZZ
                        </h1>
                    </div>

                    {/* Copyright Footer Line */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[10px] text-[#444] font-medium relative z-30 pt-8 md:pt-0">
                        <span>©Nexafizz, All Rights Reserved</span>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>

                </div>



            </div>
        </footer>
    );
};

export default Footer;
