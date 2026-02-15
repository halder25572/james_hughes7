"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

const SellerUpsides = () => {
    const heroImgRef = useRef<HTMLDivElement>(null);
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroSubRef = useRef<HTMLParagraphElement>(null);
    return (
        <section className="bg-gray-100 py-10 mt-10">
            <div className="max-w-7xl mx-auto">
                {/* ── hero banner ── */}
                <div ref={heroImgRef} className="relative w-full h-115 mb-15">
                    <Image
                        src="/images/SellerUpside.jpg"
                        alt="this is car"
                        fill
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
                            Seller Upside
                        </h1>
                        <p ref={heroSubRef} className="text-[20px] text-[#6D717F]">
                            An optional program that lets qualifying sellers receive guaranteed cash now, with <br /> the potential for additional payment if your asset sells for more than expected.
                        </p>
                    </article>
                </div>
                <div className="mt-15">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#F3F3E0] rounded-l-[28px]">
                        <div className="">
                            <Image className="rounded-l-[28px]" src="/images/Upside.png" alt="" width={651} height={200} />
                        </div>
                        <div className="p-12">
                            <h1 className="text-[30px] font-semibold mb-4">What is Seller Upside?</h1>
                            <p className="mb-2">Seller Upside is our way of sharing success with sellers who are willing to give us time to maximize the value of their asset.</p>

                            <p className="mb-2">Here&apos;s how it works: Instead of receiving a single cash payment, you receive a guaranteed minimum payment upfront. Then, if we&apos;re able to sell your asset for more than our target price, you receive a percentage of that additional profit.</p>

                            <p>It&apos;s designed for sellers who want to maximize their return but still need some cash now. You get the security of a guaranteed payment plus the opportunity to earn more.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#CBDCEB] rounded-r-[28px]">
                        <div className="p-12">
                            <h1 className="text-[30px] font-semibold mb-4">When It Makes Sense?</h1>
                            <p className="text-[#6D717F]">Seller Upside is ideal for assets that have strong market value or <br /> unique features.</p>
                            <p className="text-[#6D717F] mt-2.5">If your vehicle or asset has the potential to sell above the typical market price, participating in Seller Upside can help you capture additional profit. Our specialists will guide you on whether your asset qualifies and if it’s a good fit for this program.</p>
                        </div>
                        <div>
                            <Image className="rounded-r-[28px]" src="/images/Sense.jpg" alt="" width={651} height={200} />
                        </div>
                    </div>
                </div>
                <div className="mt-15">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#DFF2EB] rounded-l-[28px]">
                        <div className="">
                            <Image className="rounded-l-[28px] h-97.5" src="/images/Optional.jpg" alt="" width={651} height={390} />
                        </div>
                        <div className="p-12">
                            <h1 className="text-[30px] font-semibold mb-4">It’s Completely Optional</h1>
                            <p className="mb-2">Participation in Seller Upside is entirely optional.</p>

                            <p className="mb-2">You are never required to take part, and you can always choose the immediate cash offer instead. This ensures you remain in full control of your sale and can select the option that best suits your needs.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#EDDFE0] rounded-r-[28px]">
                        <div className="p-12">
                            <h1 className="text-[30px] font-semibold mb-4">Cash Option Always Available</h1>
                            <p className="text-[#6D717F]">Even if you choose Seller Upside, a guaranteed cash offer is <br /> always available.</p>
                            <p className="text-[#6D717F] mt-2.5">This flexibility allows you to participate in the program without risking access to immediate payment. You can decide the best approach for your situation at any time.</p>
                        </div>
                        <div>
                            <Image className="rounded-r-[28px]" src="/images/Available.jpg" alt="" width={651} height={200} />
                        </div>
                    </div>
                </div>
                <div className="mt-15">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#FAF7F0] rounded-l-[28px]">
                        <div className="">
                            <Image className="rounded-l-[28px] h-95" src="/images/Summary.jpg" alt="" width={651} height={380} />
                        </div>
                        <div className="p-12">
                            <h1 className="text-[30px] font-semibold mb-4">Clear Sale Summary</h1>
                            <p className="mb-2">Every Seller Upside transaction comes with a detailed sale <br /> summary.</p>

                            <p className="mb-2">This summary shows exactly how your final payout is calculated, providing transparency and confidence. You’ll see the breakdown of sale price, deductions, and net payout clearly documented.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#CBDCEB] rounded-r-[28px]">
                        <div className="p-12">
                            <h1 className="text-[30px] font-semibold mb-4">Final Sale Price</h1>
                            <p className="text-[#6D717F]">Your final sale price reflects the true value your asset achieved in <br /> the market.</p>
                            <p className="text-[#6D717F] mt-2.5">It’s included in your sale summary so you can see exactly how much your vehicle or asset sold for, giving you a clear picture of your potential earnings.</p>
                        </div>
                        <div>
                            <Image className="rounded-r-[28px]" src="/images/Price.jpg" alt="" width={651} height={200} />
                        </div>
                    </div>
                </div>
                <div className="mt-15">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#DFF2EB] rounded-l-[28px]">
                        <div className="">
                            <Image className="rounded-l-[28px] h-95" src="/images/Predefined.jpg" alt="" width={651} height={380} />
                        </div>
                        <div className="p-12">
                            <h1 className="text-[30px] font-semibold mb-4">Deductions (Predefined)</h1>
                            <p className="mb-2">All applicable deductions are predefined and clearly listed.</p>

                            <p className="mb-2">These may include fees, logistics, or adjustments. Everything is transparent — there are no hidden costs, and you’ll know exactly how the net payout is determined.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#CBDCEB] rounded-r-[28px]">
                        <div className="p-12">
                            <h1 className="text-[30px] font-semibold mb-4">Net Payout</h1>
                            <p className="text-[#6D717F]">Your net payout is the final amount you receive after all <br /> deductions.</p>
                            <p className="text-[#6D717F] mt-2.5">It represents the cash that goes directly into your hands. By clearly showing this, we ensure sellers feel confident, informed, and secure throughout the process.</p>
                        </div>
                        <div>
                            <Image className="rounded-r-[28px]" src="/images/Payout.jpg" alt="" width={651} height={200} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <Button className="bg-[#D93E39] cursor-pointer">See If My Vehicle Qualifies</Button>
                </div>
            </div>
        </section>
    );
};

export default SellerUpsides;