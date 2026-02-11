// import Image from "next/image";


// const TrustedBy = () => {
//     return (
//         <div className="py-8.75 bg-[#E5E7EA] px-4 rounded-lg">
//             <h1 className="text-[26px] text-[#6D717F] font-semibold text-center">Trusted By</h1>
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 items-center">
//                     <div>
//                         <Image src="/images/Vector.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
//                     </div>
//                     <div>
//                         <Image src="/images/2.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
//                     </div>
//                     <div>
//                         <Image src="/images/3.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
//                     </div>
//                     <div>
//                         <Image src="/images/4.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
//                     </div>
//                     <div>
//                         <Image src="/images/5.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
//                     </div>
//                     <div>
//                         <Image src="/images/6.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TrustedBy;

'use client';

import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrustedBy = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const logosRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(titleRef.current, {
                opacity: 0,
                y: 20
            });

            const logos = logosRef.current?.querySelectorAll('div > div');
            if (logos) {
                gsap.set(logos, {
                    opacity: 0,
                    y: 30,
                    scale: 0.8
                });
            }

            // Create timeline with ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Animate title
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            });

            // Animate logos with stagger
            if (logos) {
                tl.to(logos, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.2)'
                }, '-=0.4');
            }

            // Continuous subtle animation on logos
            if (logos) {
                logos.forEach((logo, index) => {
                    gsap.to(logo, {
                        y: -5,
                        duration: 2 + (index * 0.2),
                        repeat: -1,
                        yoyo: true,
                        ease: 'power1.inOut',
                        delay: index * 0.1 + 1
                    });
                });
            }

        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="py-8.75 bg-[#E5E7EA] px-4 rounded-lg">
            <h1 
                ref={titleRef}
                className="text-[26px] text-[#6D717F] font-semibold text-center"
            >
                Trusted By
            </h1>
            <div className="max-w-7xl mx-auto">
                <div 
                    ref={logosRef}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 items-center"
                >
                    <div>
                        <Image src="/images/Vector.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/2.svg" alt="Brand 2" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/3.svg" alt="Brand 3" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/4.svg" alt="Brand 4" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/5.svg" alt="Brand 5" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/6.svg" alt="Brand 6" className="mx-auto my-4" width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;