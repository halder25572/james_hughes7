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

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from 'react-fast-marquee';

gsap.registerPlugin(ScrollTrigger);

const TrustedBy = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  // We keep subtle float animation via GSAP, but apply it to marquee children
  useEffect(() => {
    // Optional: subtle floating effect
    const logos = document.querySelectorAll('.marquee-logo');
    if (logos.length) {
      logos.forEach((logo, index) => {
        gsap.to(logo, {
          y: -6,
          duration: 2.4 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.15,
        });
      });
    }
  }, []);

  const brands = [
    { src: '/images/Vector.svg', alt: 'Brand 1' },
    { src: '/images/2.svg', alt: 'Brand 2' },
    { src: '/images/3.svg', alt: 'Brand 3' },
    { src: '/images/4.svg', alt: 'Brand 4' },
    { src: '/images/5.svg', alt: 'Brand 5' },
    { src: '/images/6.svg', alt: 'Brand 6' },
    { src: '/images/Vector.svg', alt: 'Brand 1' },
    { src: '/images/2.svg', alt: 'Brand 2' },
    { src: '/images/3.svg', alt: 'Brand 3' },
    { src: '/images/4.svg', alt: 'Brand 4' },
    { src: '/images/5.svg', alt: 'Brand 5' },
    { src: '/images/6.svg', alt: 'Brand 6' },
    { src: '/images/Vector.svg', alt: 'Brand 1' },
    { src: '/images/2.svg', alt: 'Brand 2' },
    { src: '/images/3.svg', alt: 'Brand 3' },
    { src: '/images/4.svg', alt: 'Brand 4' },
    { src: '/images/5.svg', alt: 'Brand 5' },
    { src: '/images/6.svg', alt: 'Brand 6' },
  ];

  return (
    <div className="py-12 md:py-16 bg-[#6D717F] px-4 rounded-lg overflow-hidden">
      <h1
        ref={titleRef}
        className="text-2xl md:text-[26px] text-[#F3F4F6] font-semibold text-center mb-10"
      >
        Trusted By
      </h1>

      <div className="">
        <Marquee
          speed={40}              // adjust speed (higher = faster)
          pauseOnHover            // very common & user-friendly
          gradient={false}        // remove side fade if you don't like it
          // gradientWidth={200}  // if you want gradient → uncomment
          direction="left"        // default is left (right → left scroll)
        >
          {brands.map((brand, i) => (
            <div
              key={i}
              className="marquee-logo mx-8 md:mx-12 lg:mx-16 shrink-0"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={120}
                className="max-w-25 md:max-w-27.5 lg:max-w-32.5 h-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedBy;

