
// "use client";
// import { CircleCheckBig } from "lucide-react";
// import Image from "next/image";
// import { useRef } from "react";
// import CallToActionBanner from "../CallToActionBanner/CallToActionBanner";

// const WhatWeBuySection = () => {
//     const heroImgRef = useRef<HTMLDivElement>(null);
//     const heroTitleRef = useRef<HTMLHeadingElement>(null);
//     const heroSubRef = useRef<HTMLParagraphElement>(null);

//     return (
//         <section className="bg-gray-100 py-10 mt-10">
//             <div className="max-w-7xl mx-auto">
//                 {/* ── hero banner ── */}
//                 <div
//                     ref={heroImgRef}
//                     className="relative w-full h-115 mb-15 px-4 lg:px-0"
//                 >
//                     <Image
//                         src="/images/buy.jpg"
//                         alt="this is car"
//                         fill
//                         priority
//                         className="object-cover rounded-[24px] px-4 lg:px-0"
//                     />
//                 </div>

//                 {/* ── headline block ── */}
//                 <div className="px-4 lg:px-0">
//                     <article className="text-center">
//                         <h1
//                             ref={heroTitleRef}
//                             className="text-3xl lg:text-[60px] font-bold"
//                         >
//                             What We Buy?
//                         </h1>

//                         <p
//                             ref={heroSubRef}
//                             className="mt-4 text-[18px] lg:text-[20px] text-[#6D717F]"
//                         >
//                             From everyday vehicles to specialized commercial assets, we purchase a wide <br /> range of vehicles and equipment in all conditions.
//                         </p>
//                     </article>
//                 </div>
//                 {/* card section */}
//                 <div>
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-9.25 mt-15 px-4 lg:px-0">
//                         {/* card 1 */}
//                         <div className="bg-[#FDECEC] grid grid-cols-1 lg:grid-cols-2 items-center rounded-[30px]">
//                             <div className="px-5 pt-5 lg:pt-0">
//                                 <Image className="h-75 object-cover rounded-4xl" src="/images/trucks.jpg" alt="trucks" width={281} height={300} />
//                             </div>
//                             <div className="py-5 px-4 lg:px-0">
//                                 <h1 className="text-2xl font-semibold text-[#131927]">Cars / Trucks / SUVs</h1>
//                                 <p className="text-[16px] text-[#6D717F] mt-4">All makes and models, from economy <br /> sedans to luxury vehicles and heavy- <br /> duty trucks.</p>
//                                 <div className="mt-6 space-y-3">
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Takes just 5-10 minutes</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Pickup Trucks</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">SUVs & Crossovers</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Luxury Vehicles</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Electric & Hybrid</h2>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card 2 */}
//                         <div className="bg-[#DBFFF2] grid grid-cols-1 lg:grid-cols-2 items-center rounded-[30px]">
//                             <div className="px-5 pt-5 lg:pt-0">
//                                 <Image className="h-75 object-cover rounded-4xl" src="/images/bike.jpg" alt="trucks" width={281} height={300} />
//                             </div>
//                             <div className="py-5 px-4 lg:px-0">
//                                 <h1 className="text-2xl font-semibold text-[#131927]">Power Sports</h1>
//                                 <p className="text-[16px] text-[#6D717F] mt-4">Motorcycles, ATVS, UTVs, and other <br /> recreational vehicles in any condition.</p>
//                                 <div className="mt-6 space-y-3">
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Street Motorcycles</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Dirt Bikes</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">ATVs & Quads</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Side-by-Sides (UTVS)</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Scooters</h2>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card 3 */}
//                         <div className="bg-[#DFF0FF] grid grid-cols-1 lg:grid-cols-2 items-center rounded-[30px]">
//                             <div className="px-5 pt-5 lg:pt-0">
//                                 <Image className="h-75 object-cover rounded-4xl" src="/images/building.jpg" alt="trucks" width={281} height={300} />
//                             </div>
//                             <div className="py-5 px-4 lg:px-0">
//                                 <h1 className="text-2xl font-semibold text-[#131927]">Campers & RVs</h1>
//                                 <p className="text-[16px] text-[#6D717F] mt-4">Travel trailers, motorhomes, fifth <br /> wheels, and pop-up campers of all <br /> sizes.</p>
//                                 <div className="mt-6 space-y-3">
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Class A, B, C Motorhomes</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Travel Trailers</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Fifth Wheels</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Pop-Up Campers</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Toy Haulers</h2>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* card 4 */}
//                         <div className="bg-[#F3F3E0] grid grid-cols-1 lg:grid-cols-2 items-center rounded-[30px]">
//                             <div className="px-5 pt-5 lg:pt-0">
//                                 <Image className="h-75 object-cover rounded-4xl" src="/images/house.jpg" alt="trucks" width={281} height={300} />
//                             </div>
//                             <div className="py-5 px-4 lg:px-0">
//                                 <h1 className="text-2xl font-semibold text-[#131927]">Trailers</h1>
//                                 <p className="text-[16px] text-[#6D717F] mt-4">Utility trailers, enclosed trailers, car <br /> haulers, and specialty trailers.</p>
//                                 <div className="mt-6 space-y-3">
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Utility Trailers</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Enclosed Trailers</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Car Haulers</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Dump Trailers</h2>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <CircleCheckBig className="text-[#D93E39]" />
//                                         <h2 className="text-[14px] text-[#6D717F]">Equipment Trailers</h2>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* card 5 */}
//                     <div className="bg-[#DEE6FF] grid grid-cols-1 lg:grid-cols-2 items-center rounded-[30px] mt-6">
//                         <div className="p-5 pt-5 lg:pt-0">
//                             <Image className="h-75 object-cover rounded-4xl" src="/images/commercial.jpg" alt="trucks" width={281} height={300} />
//                         </div>
//                         <div className="py-5 px-4 lg:px-0">
//                             <h1 className="text-2xl font-semibold text-[#131927]">Commercial Assets</h1>
//                             <p className="text-[16px] text-[#6D717F] mt-4">Work trucks, vans, equipment, and other commercial vehicles for business use</p>
//                             <div className="mt-6 space-y-3">
//                                 <div className="flex gap-2">
//                                     <CircleCheckBig className="text-[#D93E39]" />
//                                     <h2 className="text-[14px] text-[#6D717F]">Box Trucks</h2>
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <CircleCheckBig className="text-[#D93E39]" />
//                                     <h2 className="text-[14px] text-[#6D717F]">Cargo Vans</h2>
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <CircleCheckBig className="text-[#D93E39]" />
//                                     <h2 className="text-[14px] text-[#6D717F]">Service Vehicles</h2>
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <CircleCheckBig className="text-[#D93E39]" />
//                                     <h2 className="text-[14px] text-[#6D717F]">Fleet Vehicles</h2>
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <CircleCheckBig className="text-[#D93E39]" />
//                                     <h2 className="text-[14px] text-[#6D717F]">Heavy Equipment</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* article */}
//                 <article className="text-center mt-40">
//                     <h1 className="text-[44px] lg:text-[60px] font-bold">Any Condition Accepted</h1>
//                     <p className="mt-4 text-[17px] lg:text-[20px] text-[#6D717F]">Whether your vehicle is in pristine condition or needs significant work, we’ll <br /> provide a fair offer based on its current state.</p>
//                 </article>
//                 {/* card condition */}
//                 <div>
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 px-4">
//                         <div className="p-6 bg-white rounded-[14px]">
//                             <h1 className="text-[18px] font-bold">Excellent Condition</h1>
//                             <p className="text-[14px] text-[#6D717F]">Well-maintained, minimal wear, ready to sell retail</p>
//                         </div>
//                         <div className="p-6 bg-white rounded-[14px]">
//                             <h1 className="text-[18px] font-bold">Good Condition</h1>
//                             <p className="text-[14px] text-[#6D717F]">Normal wear, minor cosmetic issues, mechanically sound</p>
//                         </div>
//                         <div className="p-6 bg-white rounded-[14px]">
//                             <h1 className="text-[18px] font-bold">Fair Condition</h1>
//                             <p className="text-[14px] text-[#6D717F]">Some repairs needed, cosmetic damage, runs but needs work</p>
//                         </div>
//                         <div className="p-6 bg-white rounded-[14px]">
//                             <h1 className="text-[18px] font-bold">Poor Condition</h1>
//                             <p className="text-[14px] text-[#6D717F]">Significant issues, major repairs needed, may not run</p>
//                         </div>
//                         <div className="p-6 bg-white rounded-[14px]">
//                             <h1 className="text-[18px] font-bold">Not Running</h1>
//                             <p className="text-[14px] text-[#6D717F]">Non-operational, parts value, project vehicles</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-12">
//                     <div className="bg-[#EFF6FF] border border-[#BEDBFF] p-6 rounded-[14px]">
//                         <h1 className="text-[18px] font-medium">Professional Review Process</h1>
//                         <p className="text-[#6D717F] text-[16px]">Every asset receives a professional review. We assess condition, market demand, and potential value. Even if your vehicle needs significant work or isn&apos;t running, it may still have value—submit it and let us provide an honest assessment.</p>
//                     </div>
//                 </div>
//                 {/* call to action */}
//                 <div className="mt-27.5">
//                     <CallToActionBanner/>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhatWeBuySection;


"use client";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import CallToActionBanner from "../CallToActionBanner/CallToActionBanner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeBuySection = () => {
    const heroImgRef = useRef<HTMLDivElement>(null);
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroSubRef = useRef<HTMLParagraphElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const card5Ref = useRef<HTMLDivElement>(null);
    const anyConditionArticleRef = useRef<HTMLElement>(null);
    const conditionCardsRef = useRef<HTMLDivElement>(null);
    const professionalReviewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ── Hero Image: fade in + scale up ──
            gsap.from(heroImgRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: "power3.out",
            });

            // ── Hero Title: slide up + fade in ──
            gsap.from(heroTitleRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
            });

            // ── Hero Subtitle: slide up + fade in ──
            gsap.from(heroSubRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out",
            });

            // ── Cards Grid (4 cards): slide from left/right alternately ──
            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll(":scope > div");
                cards.forEach((card, index) => {
                    const fromX = index % 2 === 0 ? -120 : 120; // even → left, odd → right
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                        opacity: 0,
                        x: fromX,
                        duration: 0.8,
                        delay: (index % 2 === 0 ? 0 : 0.1),
                        ease: "power3.out",
                    });
                });
            }

            // ── Card 5 (Commercial Assets): slide up on scroll ──
            gsap.from(card5Ref.current, {
                scrollTrigger: {
                    trigger: card5Ref.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 60,
                duration: 0.7,
                ease: "power3.out",
            });

            // ── "Any Condition Accepted" article: slide up on scroll ──
            gsap.from(anyConditionArticleRef.current, {
                scrollTrigger: {
                    trigger: anyConditionArticleRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
            });

            // ── Condition Cards: staggered fade in on scroll ──
            if (conditionCardsRef.current) {
                const condCards = conditionCardsRef.current.querySelectorAll(":scope > div");
                gsap.from(condCards, {
                    scrollTrigger: {
                        trigger: conditionCardsRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                });
            }

            // ── Professional Review Box: fade + slide up ──
            gsap.from(professionalReviewRef.current, {
                scrollTrigger: {
                    trigger: professionalReviewRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: "power2.out",
            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-gray-100 py-10 mt-10">
            <div className="max-w-7xl mx-auto">
                {/* ── hero banner ── */}
                <div
                    ref={heroImgRef}
                    className="relative w-full h-115 mb-15 px-4 lg:px-0"
                >
                    <Image
                        src="/images/buy.jpg"
                        alt="this is car"
                        fill
                        priority
                        className="object-cover rounded-[24px] px-4 lg:px-0"
                    />
                </div>

                {/* ── headline block ── */}
                <div className="px-4 lg:px-0">
                    <article className="text-center">
                        <h1
                            ref={heroTitleRef}
                            className="text-3xl lg:text-[60px] font-bold"
                        >
                            What We Buy?
                        </h1>

                        <p
                            ref={heroSubRef}
                            className="mt-4 text-[18px] lg:text-[20px] text-[#6D717F]"
                        >
                            From everyday vehicles to specialized commercial assets, we purchase a wide <br /> range of vehicles and equipment in all conditions.
                        </p>
                    </article>
                </div>
                {/* card section */}
                <div>
                    <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-9.25 mt-15 px-4 lg:px-0">
                        {/* card 1 */}
                        <div className="bg-[#FDECEC] grid grid-cols-1 lg:grid-cols-2 items-center rounded-[30px]">
                            <div className="px-5 pt-5 lg:pt-0">
                                <Image className="h-75 object-cover rounded-4xl" src="/images/trucks.jpg" alt="trucks" width={281} height={300} />
                            </div>
                            <div className="py-5 px-4 lg:px-0">
                                <h1 className="text-2xl font-semibold text-[#131927]">Cars / Trucks / SUVs</h1>
                                <p className="text-[16px] text-[#6D717F] mt-4">All makes and models, from economy <br /> sedans to luxury vehicles and heavy- <br /> duty trucks.</p>
                                <div className="mt-6 space-y-3">
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Takes just 5-10 minutes</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Pickup Trucks</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">SUVs & Crossovers</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Luxury Vehicles</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Electric & Hybrid</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="bg-[#DBFFF2] grid grid-cols-1 lg:grid-cols-2 items-center rounded-[30px]">
                            <div className="px-5 pt-5 lg:pt-0">
                                <Image className="h-75 object-cover rounded-4xl" src="/images/bike.jpg" alt="trucks" width={281} height={300} />
                            </div>
                            <div className="py-5 px-4 lg:px-0">
                                <h1 className="text-2xl font-semibold text-[#131927]">Power Sports</h1>
                                <p className="text-[16px] text-[#6D717F] mt-4">Motorcycles, ATVS, UTVs, and other <br /> recreational vehicles in any condition.</p>
                                <div className="mt-6 space-y-3">
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Street Motorcycles</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Dirt Bikes</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">ATVs & Quads</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Side-by-Sides (UTVS)</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Scooters</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="bg-[#DFF0FF] grid grid-cols-1 lg:grid-cols-2 items-center rounded-[30px]">
                            <div className="px-5 pt-5 lg:pt-0">
                                <Image className="h-75 object-cover rounded-4xl" src="/images/building.jpg" alt="trucks" width={281} height={300} />
                            </div>
                            <div className="py-5 px-4 lg:px-0">
                                <h1 className="text-2xl font-semibold text-[#131927]">Campers & RVs</h1>
                                <p className="text-[16px] text-[#6D717F] mt-4">Travel trailers, motorhomes, fifth <br /> wheels, and pop-up campers of all <br /> sizes.</p>
                                <div className="mt-6 space-y-3">
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Class A, B, C Motorhomes</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Travel Trailers</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Fifth Wheels</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Pop-Up Campers</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Toy Haulers</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="bg-[#F3F3E0] grid grid-cols-1 lg:grid-cols-2 items-center rounded-[30px]">
                            <div className="px-5 pt-5 lg:pt-0">
                                <Image className="h-75 object-cover rounded-4xl" src="/images/house.jpg" alt="trucks" width={281} height={300} />
                            </div>
                            <div className="py-5 px-4 lg:px-0">
                                <h1 className="text-2xl font-semibold text-[#131927]">Trailers</h1>
                                <p className="text-[16px] text-[#6D717F] mt-4">Utility trailers, enclosed trailers, car <br /> haulers, and specialty trailers.</p>
                                <div className="mt-6 space-y-3">
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Utility Trailers</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Enclosed Trailers</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Car Haulers</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Dump Trailers</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <CircleCheckBig className="text-[#D93E39]" />
                                        <h2 className="text-[14px] text-[#6D717F]">Equipment Trailers</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div ref={card5Ref} className="bg-[#DEE6FF] mx-4 lg:flex items-center rounded-[30px] mt-6">
                        <div className="p-5 pt-5">
                            <Image className="h-75 w-full object-cover rounded-4xl" src="/images/commercial.jpg" alt="trucks" width={281} height={300} />
                        </div>
                        <div className="py-5 px-4 lg:px-0">
                            <h1 className="text-2xl font-semibold text-[#131927]">Commercial Assets</h1>
                            <p className="text-[16px] text-[#6D717F] mt-4">Work trucks, vans, equipment, and other commercial vehicles for business use</p>
                            <div className="mt-6 space-y-3">
                                <div className="flex gap-2">
                                    <CircleCheckBig className="text-[#D93E39]" />
                                    <h2 className="text-[14px] text-[#6D717F]">Box Trucks</h2>
                                </div>
                                <div className="flex gap-2">
                                    <CircleCheckBig className="text-[#D93E39]" />
                                    <h2 className="text-[14px] text-[#6D717F]">Cargo Vans</h2>
                                </div>
                                <div className="flex gap-2">
                                    <CircleCheckBig className="text-[#D93E39]" />
                                    <h2 className="text-[14px] text-[#6D717F]">Service Vehicles</h2>
                                </div>
                                <div className="flex gap-2">
                                    <CircleCheckBig className="text-[#D93E39]" />
                                    <h2 className="text-[14px] text-[#6D717F]">Fleet Vehicles</h2>
                                </div>
                                <div className="flex gap-2">
                                    <CircleCheckBig className="text-[#D93E39]" />
                                    <h2 className="text-[14px] text-[#6D717F]">Heavy Equipment</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* article */}
                <article ref={anyConditionArticleRef} className="text-center mt-40">
                    <h1 className="text-[44px] lg:text-[60px] font-bold">Any Condition Accepted</h1>
                    <p className="mt-4 text-[17px] lg:text-[20px] text-[#6D717F]">Whether your vehicle is in pristine condition or needs significant work, we&apos;ll <br /> provide a fair offer based on its current state.</p>
                </article>
                {/* card condition */}
                <div>
                    <div ref={conditionCardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 px-4">
                        <div className="p-6 bg-white rounded-[14px]">
                            <h1 className="text-[18px] font-bold">Excellent Condition</h1>
                            <p className="text-[14px] text-[#6D717F]">Well-maintained, minimal wear, ready to sell retail</p>
                        </div>
                        <div className="p-6 bg-white rounded-[14px]">
                            <h1 className="text-[18px] font-bold">Good Condition</h1>
                            <p className="text-[14px] text-[#6D717F]">Normal wear, minor cosmetic issues, mechanically sound</p>
                        </div>
                        <div className="p-6 bg-white rounded-[14px]">
                            <h1 className="text-[18px] font-bold">Fair Condition</h1>
                            <p className="text-[14px] text-[#6D717F]">Some repairs needed, cosmetic damage, runs but needs work</p>
                        </div>
                        <div className="p-6 bg-white rounded-[14px]">
                            <h1 className="text-[18px] font-bold">Poor Condition</h1>
                            <p className="text-[14px] text-[#6D717F]">Significant issues, major repairs needed, may not run</p>
                        </div>
                        <div className="p-6 bg-white rounded-[14px]">
                            <h1 className="text-[18px] font-bold">Not Running</h1>
                            <p className="text-[14px] text-[#6D717F]">Non-operational, parts value, project vehicles</p>
                        </div>
                    </div>
                </div>
                <div ref={professionalReviewRef} className="mt-12">
                    <div className="bg-[#EFF6FF] border border-[#BEDBFF] p-6 rounded-[14px]">
                        <h1 className="text-[18px] font-medium">Professional Review Process</h1>
                        <p className="text-[#6D717F] text-[16px]">Every asset receives a professional review. We assess condition, market demand, and potential value. Even if your vehicle needs significant work or isn&apos;t running, it may still have value—submit it and let us provide an honest assessment.</p>
                    </div>
                </div>
                {/* call to action */}
                <div className="mt-27.5">
                    <CallToActionBanner/>
                </div>
            </div>
        </section>
    );
};

export default WhatWeBuySection;