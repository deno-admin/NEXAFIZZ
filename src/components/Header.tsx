interface Props {
    onOpenModal: () => void;
}

const Header = ({ onOpenModal }: Props) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px] border-b border-[rgba(255,255,255,0.3)] py-3 md:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] animate-fade-in-down">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Left Navigation */}
                <nav className="flex gap-2 md:gap-4 flex-1 justify-start">
                    <button
                        onClick={onOpenModal}
                        className="font-body font-normal text-[10px] md:text-[11px] tracking-[0.8px] px-4 py-1.5 md:px-5 md:py-2 border border-black/70 bg-transparent text-black rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] uppercase whitespace-nowrap inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-[rgba(255,255,255,0.3)]"
                    >
                        Shop All
                    </button>
                </nav>

                {/* Logo */}
                <div className="shrink-0 text-center mx-2">
                    <h1 className="font-script text-[32px] md:text-[46px] font-normal tracking-normal text-black m-0 leading-none drop-shadow-sm">
                        NEXAFIZZ
                    </h1>
                </div>

                {/* Right Navigation */}
                <nav className="flex gap-2 md:gap-4 flex-1 justify-end">
                    <a
                        href="https://denovation.in/create"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body font-normal text-[10px] md:text-[11px] tracking-[0.5px] md:tracking-[0.8px] px-4 py-1.5 md:px-5 md:py-2 border border-black/70 bg-transparent text-black rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] uppercase whitespace-nowrap inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-[rgba(255,255,255,0.3)] no-underline"
                    >
                        <span className="md:hidden">Build</span>
                        <span className="hidden md:inline">Build Your Website</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
