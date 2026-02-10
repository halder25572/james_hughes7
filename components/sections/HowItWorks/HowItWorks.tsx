import { ClipboardList, Search, DollarSign } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Your Info",
    desc: "Tell us about your vehicle or asset. Photos help but aren't required to start.",
  },
  {
    icon: Search,
    title: "Review & Options",
    desc: "A real specialist reviews every submission and explains your options clearly.",
  },
  {
    icon: DollarSign,
    title: "Get Paid",
    desc: "Choose a cash option or, when applicable, Seller Upside. Payment is fast and professional.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#E5E7EA] py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          HOW IT WORKS
        </h2>

        <p className="mt-2 text-gray-500 text-sm md:text-base">
          A simple, transparent process from start to finish
        </p>

        {/* Steps */}
        <div className="relative mt-10 grid gap-10 md:grid-cols-3">

          {/* dotted line desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 border-t border-dashed border-gray-300"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center px-4"
              >
                {/* Icon Circle */}
                <div className="z-10 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-500 text-sm max-w-xs">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
