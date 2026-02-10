import { Button } from '@/components/ui/button';
import Image from 'next/image';


const HeroSection = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <h1 className="text-[45px] sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Turn Your Vehicle, <br /> Power Sports, or <br /> Commercial Assets <br /> To Cash
                    </h1>

                    <p className="mt-4 text-[#6D717F] max-w-xl mx-auto lg:mx-0">
                        A professional, transparent way to sell with cash options and <br /> optional
                        upside for qualifying vehicles.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
                        <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full py-2.5 px-6">
                            Get A Offer
                        </Button>

                        <Button
                            variant="outline"
                            className="border-red-400 text-red-500 rounded-full py-2.5 px-6"
                        >
                            How Seller Upside Works
                        </Button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="order-1 lg:order-2 relative">
                    <Image
                        src="/images/Hero.jpg"   // 👉 public/images/car.png রাখো
                        alt="car"
                        width={639}
                        height={473}
                        priority
                        className="rounded-2xl w-full h-auto"
                    />

                    {/* Overlay Badge */}
                    <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs md:text-sm p-3 rounded-xl flex flex-wrap gap-3 justify-center lg:justify-start">
                        <span>✔ Licensed dealer</span>
                        <span>✔ Nearly 20 years experience</span>
                        <span>✔ No pressure</span>
                        <span>✔ No obligation</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;