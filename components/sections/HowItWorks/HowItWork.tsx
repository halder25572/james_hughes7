"use client"

import { CircleCheckBig } from "lucide-react";
import Image from "next/image";


const HowItWork = () => {

    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full h-78 mb-15">
                    <Image src="/images/howITWorkB.jpg" alt="this is car" fill className="object-cover rounded-[24px]" />
                </div>
                <div className="">
                    <article className="text-center">
                        <h1 className="text-3xl lg:text-[60px] font-bold ">How It Works</h1>
                        <p className="text-[20px] text-[#6D717F]">A clear, professional process designed to make selling your vehicle or asset as smooth as <br /> possible.</p>
                    </article>
                </div>
                <div className="mt-15">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
                        <div>
                            <div className="">
                                <div className="flex items-center gap-4">
                                    <div className="bg-black p-5 rounded-full">
                                        <Image src="/images/Icon1.svg" width={28} height={28} alt="" />
                                    </div>
                                    <h1 className="text-[30px] font-semibold text-[#131927]">Submission & Review</h1>
                                </div>
                                <p className="mt-3.5">Fill out our simple online form with details about your vehicle or asset. Include photos if available—they help us provide a more accurate assessment.</p>
                            </div>
                            <div className="mt-6 space-y-3">
                                <div className="flex gap-3">
                                    <CircleCheckBig className="text-[#D93E39]" />
                                    <h2>Takes just 5-10 minutes</h2>
                                </div>
                                <div className="flex gap-3">
                                    <CircleCheckBig className="text-[#D93E39]" />
                                    <h2>Photos optional but recommended</h2>
                                </div>
                                <div className="flex gap-3">
                                    <CircleCheckBig className="text-[#D93E39]" />
                                    <h2>VIN helps with accuracy</h2>
                                </div>
                                <div className="flex gap-3">
                                    <CircleCheckBig className="text-[#D93E39]" />
                                    <h2>All information kept confidential</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image className="rounded-[24px]" src="/images/submission.jpg" alt="" width={650} height={445}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWork;