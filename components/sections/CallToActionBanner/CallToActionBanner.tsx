"use client";

import { Button } from "@/components/ui/button";

interface CTABannerProps {
  backgroundImage?: string;
  heading?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CallToActionBanner({
  backgroundImage = "/images/Frame42.png",
  heading = "Ready to See Your Options?",
  buttonText = "Get My Offer",
  onButtonClick
}: CTABannerProps) {
  return (
    <section className="w-full -mt-10 mb-20 px-4 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div 
          className="relative overflow-hidden rounded-2xl md:rounded-3xl"
          style={{
            backgroundImage: `
              url('${backgroundImage}')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 py-12 md:gap-6 md:py-16 lg:py-20">
            <h2 className="text-center text-xl font-semibold text-white md:text-2xl lg:text-3xl">
              {heading}
            </h2>
            <Button
              onClick={onButtonClick}
              size="lg"
              className="rounded-full bg-linear-to-r from-red-500 to-red-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-xl md:px-10 md:text-lg"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}