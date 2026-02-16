// "use client";

// import { Info, CheckCircle2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { useFormContext } from "@/components/FormContext";

// export function Step6() {
//   const { formData, goNext, goBack } = useFormContext();


//   return (
//     <Card className="animate-fade-slide-in">
//       <CardHeader>
//         <CardTitle>Your estimated offer</CardTitle>
//         <CardDescription>Based on the details you&apos;ve provided so far.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         {/* Price Box */}
//         <div className="rounded-xl bg-linear-to-br from-brand to-[#a81b29] p-7 text-center text-white mb-5">
//           <p className="text-xs font-medium uppercase tracking-widest opacity-80 mb-2">
//             Estimated Offer Range
//           </p>
//           <p className="font-display text-[44px] font-bold leading-none mb-2">$14,800</p>
//           <p className="text-sm opacity-70">Range: $13,500 – $16,200</p>
//         </div>

//         {/* Detail tiles */}
//         <div className="grid grid-cols-3 gap-3 mb-5">
//           {[
//             { label: "Market Value", value: "$17,400" },
//             { label: "Condition Factor", value: formData.condition.split(" ")[0] },
//             { label: "Confidence", value: "92%" },
//           ].map((item) => (
//             <div key={item.label} className="bg-muted rounded-lg px-3 py-3.5 text-center">
//               <p className="text-[10.5px] uppercase tracking-wider text-muted-foreground mb-1">
//                 {item.label}
//               </p>
//               <p className="text-[14px] font-semibold text-foreground">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-start gap-2.5 rounded-lg bg-muted px-4 py-3 mb-3">
//           <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
//           <p className="text-[12.5px] text-muted-foreground leading-relaxed">
//             This is a preliminary estimate. A final confirmed offer will be made after a brief inspection.
//             No obligation to accept.
//           </p>
//         </div>

//         <div className="flex items-start gap-2.5 rounded-lg bg-emerald-50 border border-emerald-100 px-4 py-3 mb-7">
//           <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
//           <p className="text-[12.5px] text-emerald-800 leading-relaxed">
//             We offer <strong>same-day payment</strong> and <strong>free towing</strong>. Continue to claim your offer.
//           </p>
//         </div>

//         <div className="flex gap-3">
//           <Button variant="outline" className="flex-1" onClick={goBack}>
//             Back
//           </Button>
//           <Button className="flex-1 bg-[#D93E39] text-white cursor-pointer" onClick={goNext}>
//             Claim Offer →
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }


"use client";

import { useFormContext } from "@/components/FormContext";

const GOAL_OPTIONS = [
  { label: "Fast Cash",         desc: "Quick, simple transaction" },
  { label: "Most Money",        desc: "Maximize value received" },
  { label: "Exploring Options", desc: "Just seeing what's possible" },
];

function cn(...cls: (string | boolean | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

export default function Step6() {
  const { formData, updateFormData, goNext, goBack } = useFormContext();

  return (
    <div
      className="w-full rounded-xl border border-gray-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
      style={{ animation: "fadeSlide 0.3s ease forwards" }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-0 sm:px-7 sm:pt-7">
        <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-tight mb-1">
          What&apos;s your main goal?
        </h2>
        <p className="text-sm text-gray-500">
          This helps us tailor our approach to your needs.
        </p>
      </div>

      {/* Body */}
      <div className="px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7">

        {/* Options */}
        <div className="flex flex-col gap-3 mb-7">
          {GOAL_OPTIONS.map((g) => {
            const selected = formData.mainGoal === g.label;
            return (
              <button
                key={g.label}
                type="button"
                onClick={() => updateFormData({ mainGoal: g.label })}
                className={cn(
                  "w-full text-left rounded-xl border-[1.5px] px-5 py-4 transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 cursor-pointer bg-white",
                  selected
                    ? "border-gray-900 shadow-sm"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/60"
                )}
              >
                <p className="text-[14px] font-semibold text-gray-900 mb-0.5">
                  {g.label}
                </p>
                <p className="text-[12.5px] text-gray-400 font-normal">
                  {g.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={goBack}
            className="flex-1 h-12 rounded-full border-[1.5px] border-[#D72638] bg-white text-[#D72638] text-[15px] font-semibold transition-all duration-200 hover:bg-red-50 cursor-pointer focus:outline-none"
          >
            Back
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex-1 h-12 rounded-full bg-[#D72638] text-white text-[15px] font-semibold transition-all duration-200 hover:bg-[#b81e2e] hover:shadow-[0_4px_16px_rgba(215,38,56,0.35)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none"
          >
            Continue
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}