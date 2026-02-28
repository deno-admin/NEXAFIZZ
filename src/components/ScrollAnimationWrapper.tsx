import type { ReactNode } from "react";

interface Props {
    heroComponent: ReactNode;
    productShowcaseComponent: ReactNode;
    bottleComponent: ReactNode;
}

export default function ScrollAnimationWrapper({
    heroComponent,
    productShowcaseComponent,
    bottleComponent,
}: Props) {
    return (
        <div className="relative w-full z-10">
            {/* 
              This absolute container dictates the exactly length the bottle remains sticky.
              With Hero being ~100vh, making this 200vh allows the bottle to stick for exactly 
              100vh. After that, it hits the bottom and scrolls natively with ProductShowcase, 
              acting essentially as padding/margin holding it perfectly in place!
              On mobile, the layout stacks so we need to stay sticky longer (225vh) to bypass the left card.
            */}
            <div className="absolute top-0 left-0 w-full h-[225vh] md:h-[240vh] lg:h-[200vh] pointer-events-none z-[40]">
                <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
                    {bottleComponent}
                </div>
            </div>

            {/* Actual Content layers */}
            <div className="relative z-10">
                {heroComponent}
                {productShowcaseComponent}
            </div>
        </div>
    );
}
