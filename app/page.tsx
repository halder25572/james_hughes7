import HeroSection from "@/components/sections/HeroSection/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import TrustedBy from "@/components/sections/TrustedBy/TrustedBy";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroSection />
        <div className="mt-10 px-2 lg:px-0">
          <TrustedBy />
        </div>
        <div className="mb-10 mt-4 lg:mt-0 px-2 lg:px-0">
          <HowItWorks />
        </div>
      </main>
    </div>
  );
}
