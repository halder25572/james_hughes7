// "use client";

// import { useState } from "react";
// import { Check } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { useFormContext } from "@/components/FormContext";

// export function Step7() {
//   const { formData, updateFormData, goNext, goBack } = useFormContext();
//   const [agreed, setAgreed] = useState(true);

//   return (
//     <Card className="animate-fade-slide-in">
//       <CardHeader>
//         <CardTitle>Your contact information</CardTitle>
//         <CardDescription>We&apos;ll use this to send you your confirmed offer details.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div className="space-y-1.5">
//             <Label htmlFor="firstName">
//               First Name <span className="text-brand">*</span>
//             </Label>
//             <Input
//               id="firstName"
//               placeholder="John"
//               value={formData.firstName}
//               onChange={(e) => updateFormData({ firstName: e.target.value })}
//             />
//           </div>
//           <div className="space-y-1.5">
//             <Label htmlFor="lastName">
//               Last Name <span className="text-brand">*</span>
//             </Label>
//             <Input
//               id="lastName"
//               placeholder="Doe"
//               value={formData.lastName}
//               onChange={(e) => updateFormData({ lastName: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="space-y-1.5 mb-4">
//           <Label htmlFor="email">
//             Email Address <span className="text-brand">*</span>
//           </Label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="john@example.com"
//             value={formData.email}
//             onChange={(e) => updateFormData({ email: e.target.value })}
//           />
//         </div>

//         <div className="space-y-1.5 mb-4">
//           <Label htmlFor="phone">
//             Phone Number <span className="text-brand">*</span>
//           </Label>
//           <Input
//             id="phone"
//             type="tel"
//             placeholder="(555) 000-0000"
//             value={formData.phone}
//             onChange={(e) => updateFormData({ phone: e.target.value })}
//           />
//         </div>

//         <div className="space-y-1.5 mb-4">
//           <Label htmlFor="zip">
//             ZIP Code <span className="text-brand">*</span>
//           </Label>
//           <Input
//             id="zip"
//             placeholder="90210"
//             value={formData.zip}
//             onChange={(e) => updateFormData({ zip: e.target.value })}
//           />
//           <p className="text-[11.5px] text-muted-foreground mt-1">
//             Used to match you with a local buyer or pickup service.
//           </p>
//         </div>

//         <div className="space-y-1.5 mb-5">
//           <Label>Preferred Contact Method</Label>
//           <Select
//             value={formData.contactMethod}
//             onValueChange={(val) => updateFormData({ contactMethod: val })}
//           >
//             <SelectTrigger>
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="Phone Call">Phone Call</SelectItem>
//               <SelectItem value="Text Message">Text Message</SelectItem>
//               <SelectItem value="Email">Email</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <button
//           type="button"
//           onClick={() => setAgreed(!agreed)}
//           className={cn(
//             "flex items-start gap-3 w-full text-left p-3 rounded-lg transition-colors mb-7",
//             agreed ? "bg-brand-muted/30" : "hover:bg-muted/50"
//           )}
//         >
//           <span
//             className={cn(
//               "mt-0.5 flex items-center justify-center rounded border-[1.5px] transition-colors shrink-0",
//               agreed ? "bg-brand border-brand" : "bg-white border-input"
//             )}
//             style={{ width: 18, height: 18, minWidth: 18 }}
//           >
//             {agreed && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
//           </span>
//           <p className="text-[13.5px] text-foreground leading-relaxed">
//             I agree to receive my offer and updates via the contact method above.
//           </p>
//         </button>

//         <div className="flex gap-3">
//           <Button variant="outline" className="flex-1" onClick={goBack}>
//             Back
//           </Button>
//           <Button className="flex-1 bg-[#D93E39] text-white cursor-pointer" onClick={goNext}>
//             Submit →
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }


"use client";

import { Info } from "lucide-react";
import { useFormContext } from "@/components/FormContext";

const UPSIDE_OPTIONS = [
  {
    label: "Yes, interested",
    desc: "Tell me more about Seller Upside",
  },
  {
    label: "No, just cash",
    desc: "I prefer a straightforward cash offer",
  },
  {
    label: "Not sure yet",
    desc: "Help me understand my options",
  },
];

function cn(...cls: (string | boolean | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

export default function Step7() {
  const { formData, updateFormData, goNext, goBack } = useFormContext();

  return (
    <div
      className="w-full rounded-xl border border-gray-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
      style={{ animation: "fadeSlide 0.3s ease forwards" }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-0 sm:px-7 sm:pt-7">
        <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-tight mb-1">
          Interested in Seller Upside?
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Seller Upside allows qualifying sellers to receive a guaranteed
          minimum now, plus potential additional payment if your asset sells
          for more.
        </p>
      </div>

      {/* Body */}
      <div className="px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7">

        {/* Options */}
        <div className="flex flex-col gap-3 mb-5">
          {UPSIDE_OPTIONS.map((opt) => {
            const selected = formData.sellerUpside === opt.label;
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => updateFormData({ sellerUpside: opt.label })}
                className={cn(
                  "w-full text-left rounded-xl border-[1.5px] px-5 py-4 transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 cursor-pointer bg-white",
                  selected
                    ? "border-gray-900 shadow-sm"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/60"
                )}
              >
                <p className="text-[14px] font-semibold text-gray-900 mb-0.5">
                  {opt.label}
                </p>
                <p className="text-[12.5px] text-gray-400 font-normal">
                  {opt.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Info Note */}
        <div className="flex items-start gap-2.5 rounded-lg bg-gray-50 px-4 py-3 mb-7">
          <Info className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
          <p className="text-[12.5px] text-gray-500 leading-relaxed">
            Seller Upside is completely optional and not available for all
            assets. We&apos;ll discuss your specific options when we connect.
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