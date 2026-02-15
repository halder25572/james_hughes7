
"use client";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const WhatWeBuySection = () => {
    const heroImgRef = useRef<HTMLDivElement>(null);
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroSubRef = useRef<HTMLParagraphElement>(null);

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
                        className="object-cover rounded-[24px]"
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
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9.25 mt-15">
                            {/* card 1 */}
                            <div className="bg-[#FDECEC] flex items-center rounded-[30px]">
                                <div className="px-5">
                                    <Image className="h-75 object-cover rounded-4xl" src="/images/trucks.jpg" alt="trucks" width={281} height={300} />
                                </div>
                                <div className="py-5">
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
                            <div className="bg-[#DBFFF2] flex items-center rounded-[30px]">
                                <div className="px-5">
                                    <Image className="h-75 object-cover rounded-4xl" src="/images/bike.jpg" alt="trucks" width={281} height={300} />
                                </div>
                                <div className="py-5">
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
                            <div className="bg-[#DFF0FF] flex items-center rounded-[30px]">
                                <div className="px-5">
                                    <Image className="h-75 object-cover rounded-4xl" src="/images/building.jpg" alt="trucks" width={281} height={300} />
                                </div>
                                <div className="py-5">
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
                            <div className="bg-[#F3F3E0] flex items-center rounded-[30px]">
                                <div className="px-5">
                                    <Image className="h-75 object-cover rounded-4xl" src="/images/house.jpg" alt="trucks" width={281} height={300} />
                                </div>
                                <div className="py-5">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeBuySection;
