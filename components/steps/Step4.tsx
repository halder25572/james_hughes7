// "use client";

// import { Check } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { useFormContext } from "@/components/FormContext";

// const FEATURES = [
//   "Leather Seats",
//   "Sunroof / Moonroof",
//   "Navigation System",
//   "Backup Camera",
//   "Heated Seats",
//   "4WD / AWD",
//   "Tow Package",
//   "Premium Audio",
//   "Remote Start",
//   "Blind Spot Alert",
//   "Apple CarPlay",
//   "Ventilated Seats",
// ];

// export function Step4() {
//   const { formData, updateFormData, goNext, goBack } = useFormContext();

//   const toggleFeature = (feature: string) => {
//     const current = formData.features;
//     const updated = current.includes(feature)
//       ? current.filter((f) => f !== feature)
//       : [...current, feature];
//     updateFormData({ features: updated });
//   };

//   return (
//     <Card className="animate-fade-slide-in">
//       <CardHeader>
//         <CardTitle>Does it have any extra features?</CardTitle>
//         <CardDescription>Select all options that apply to your vehicle.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-2 gap-2.5 mb-5">
//           {FEATURES.map((feature) => {
//             const selected = formData.features.includes(feature);
//             return (
//               <button
//                 key={feature}
//                 type="button"
//                 onClick={() => toggleFeature(feature)}
//                 className={cn(
//                   "flex items-center gap-2.5 rounded-lg border-[1.5px] px-3.5 py-3 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
//                   selected
//                     ? "border-brand bg-brand-light"
//                     : "border-border bg-white hover:border-slate-300 hover:bg-slate-50"
//                 )}
//               >
//                 <span
//                   className={cn(
//                     "flex h-4 w-4 min-w-4 items-center justify-center rounded border-[1.5px] transition-colors",
//                     selected
//                       ? "bg-brand border-brand"
//                       : "bg-white border-input"
//                   )}
//                 >
//                   {selected && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
//                 </span>
//                 <span className="text-[13px] font-medium text-foreground">{feature}</span>
//               </button>
//             );
//           })}
//         </div>

//         <div className="space-y-1.5 mb-7">
//           <Label htmlFor="notes">
//             Additional Notes{" "}
//             <span className="text-muted-foreground font-normal text-xs">(optional)</span>
//           </Label>
//           <Textarea
//             id="notes"
//             placeholder="Any modifications, recent repairs, or other details we should know..."
//             value={formData.notes}
//             onChange={(e) => updateFormData({ notes: e.target.value })}
//           />
//         </div>

//         <div className="flex gap-3">
//           <Button variant="outline" className="flex-1" onClick={goBack}>
//             Back
//           </Button>
//           <Button className="flex-1 bg-[#D93E39] text-white" onClick={goNext}>
//             Continue
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import { Info } from "lucide-react";
import { useFormContext } from "@/components/FormContext";

const TITLE_OPTIONS = [
  { label: "Clean Title", desc: "Title in hand, no liens" },
  { label: "Financed",    desc: "Still making payments" },
  { label: "No Title",   desc: "Title not available" },
  { label: "Not Sure",   desc: "Need help determining" },
];

function cn(...cls: (string | boolean | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

export default function Step4() {
  const { formData, updateFormData, goNext, goBack } = useFormContext();

  return (
    <div
      className="w-full rounded-xl border border-gray-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
      style={{ animation: "fadeSlide 0.3s ease forwards" }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-0 sm:px-7 sm:pt-7">
        <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-tight mb-1">
          What&apos;s the title situation?
        </h2>
        <p className="text-sm text-gray-500">
          This helps us understand the paperwork needed.
        </p>
      </div>

      {/* Body */}
      <div className="px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7">

        {/* Options */}
        <div className="flex flex-col gap-3 mb-5">
          {TITLE_OPTIONS.map((t) => {
            const selected = formData.titleSituation === t.label;
            return (
              <button
                key={t.label}
                type="button"
                onClick={() => updateFormData({ titleSituation: t.label })}
                className={cn(
                  "w-full text-left rounded-xl border-[1.5px] px-5 py-4 transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 cursor-pointer bg-white",
                  selected
                    ? "border-gray-900 shadow-sm"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/60"
                )}
              >
                <p className="text-[14px] font-semibold text-gray-900 mb-0.5">
                  {t.label}
                </p>
                <p className="text-[12.5px] text-gray-400 font-normal">
                  {t.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Info Note */}
        <div className="flex items-start gap-2.5 rounded-lg bg-gray-50 px-4 py-3 mb-7">
          <Info className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
          <p className="text-[12.5px] text-gray-500 leading-relaxed">
            We can work with most title situations. We&apos;ll help guide you
            through the process.
          </p>
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
