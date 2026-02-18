// // "use client";

// // import { CheckCircle2 } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { useFormContext } from "@/components/FormContext";

// // export function Step8() {
// //   const { formData, goToStep, goBack } = useFormContext();

// //   const vehicleLabel =
// //     [formData.year, formData.make, formData.model].filter(Boolean).join(" ") ||
// //     "2020 Honda Accord";

// //   const summaryItems = [
// //     { key: "Vehicle", value: vehicleLabel },
// //     { key: "Mileage", value: formData.mileage ? `${formData.mileage} mi` : "75,000 mi" },
// //     { key: "Condition", value: formData.condition || "Excellent Condition" },
// //     { key: "Estimated Offer", value: "$14,800", highlight: true },
// //     { key: "Reference #", value: "#VH-20248472" },
// //   ];

// //   const nextSteps = [
// //     "Our team reviews your submission and confirms the offer",
// //     "Schedule a free pick-up or drop-off at your convenience",
// //     "Receive same-day payment upon vehicle handover",
// //   ];

// //   const handleStartNew = () => {
// //     goToStep(1);
// //   };

// //   return (
// //     <Card className="animate-scale-in">
// //       <CardContent className="pt-8">
// //         {/* Success Icon */}
// //         <div className="text-center mb-6">
// //           <div className="w-18 h-18 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
// //             <CheckCircle2 className="w-9 h-9 text-emerald-600" />
// //           </div>
// //           <h2 className="font-display text-2xl font-bold text-foreground mb-2.5">
// //             You&apos;re all set! 🎉
// //           </h2>
// //           <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
// //             Your vehicle information has been submitted.
// //             <br />
// //             Expect your confirmed offer within <strong className="text-foreground">24 hours</strong>.
// //             <br />
// //             We&apos;ve sent details to your email.
// //           </p>
// //         </div>

// //         {/* Summary */}
// //         <div className="rounded-lg border border-border overflow-hidden mb-5">
// //           {summaryItems.map((item, i) => (
// //             <div
// //               key={item.key}
// //               className={`flex items-center justify-between px-4 py-3 ${
// //                 i < summaryItems.length - 1 ? "border-b border-border" : ""
// //               } ${i % 2 === 1 ? "bg-muted/40" : "bg-white"}`}
// //             >
// //               <span className="text-[13px] font-medium text-muted-foreground">{item.key}</span>
// //               <span
// //                 className={`text-[13px] font-semibold ${
// //                   item.highlight ? "text-brand" : "text-foreground"
// //                 }`}
// //               >
// //                 {item.value}
// //               </span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Next Steps */}
// //         <div className="space-y-2.5 mb-7">
// //           {nextSteps.map((step, i) => (
// //             <div
// //               key={i}
// //               className="flex items-center gap-3.5 bg-muted/50 rounded-lg px-4 py-3.5"
// //             >
// //               <span className="flex h-7 w-7 min-w-7 items-center justify-center rounded-full bg-brand text-white text-[13px] font-bold">
// //                 {i + 1}
// //               </span>
// //               <p className="text-[13.5px] text-foreground leading-snug">{step}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Actions */}
// //         <div className="flex flex-col gap-2.5">
// //           <Button className="w-full bg-[#D93E39] text-white cursor-pointer" onClick={handleStartNew}>
// //             Start a New Submission
// //           </Button>
// //           <Button variant="outline" className="w-full" onClick={goBack}>
// //             Back
// //           </Button>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // }


// "use client";

// import { Info } from "lucide-react";
// import { useFormContext } from "@/components/FormContext";

// export default function Step8() {
//   const { formData, updateFormData, goNext, goBack } = useFormContext();

//   return (
//     <div
//       className="w-full rounded-xl border border-gray-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
//       style={{ animation: "fadeSlide 0.3s ease forwards" }}
//     >
//       {/* Header */}
//       <div className="px-6 pt-6 pb-0 sm:px-7 sm:pt-7">
//         <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-tight mb-1">
//           How should we reach you?
//         </h2>
//         <p className="text-sm text-gray-500">
//           We&apos;ll use this to discuss your offer and options.
//         </p>
//       </div>

//       {/* Body */}
//       <div className="px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7">

//         <div className="flex flex-col gap-4 mb-5">

//           {/* Full Name */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-[13px] font-medium text-gray-800">
//               Full Name <span className="text-[#D72638]">*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Smith"
//               value={formData.fullName ?? ""}
//               onChange={(e) => updateFormData({ fullName: e.target.value })}
//               className="h-11 w-full rounded-lg border-[1.5px] border-gray-200 bg-white px-3.5 text-sm text-gray-900 placeholder:text-gray-400 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-[#D72638] focus:ring-[3px] focus:ring-red-100"
//             />
//           </div>

//           {/* Phone Number */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-[13px] font-medium text-gray-800">
//               Phone Number <span className="text-[#D72638]">*</span>
//             </label>
//             <input
//               type="tel"
//               placeholder="(555) 123-4567"
//               value={formData.phone ?? ""}
//               onChange={(e) => updateFormData({ phone: e.target.value })}
//               className="h-11 w-full rounded-lg border-[1.5px] border-gray-200 bg-white px-3.5 text-sm text-gray-900 placeholder:text-gray-400 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-[#D72638] focus:ring-[3px] focus:ring-red-100"
//             />
//           </div>

//           {/* Email */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-[13px] font-medium text-gray-800">
//               Email{" "}
//               <span className="text-gray-400 font-normal">(optional)</span>
//             </label>
//             <input
//               type="email"
//               placeholder="john@example.com"
//               value={formData.email ?? ""}
//               onChange={(e) => updateFormData({ email: e.target.value })}
//               className="h-11 w-full rounded-lg border-[1.5px] border-gray-200 bg-white px-3.5 text-sm text-gray-900 placeholder:text-gray-400 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-[#D72638] focus:ring-[3px] focus:ring-red-100"
//             />
//           </div>

//           {/* Additional Notes */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-[13px] font-medium text-gray-800">
//               Additional Notes{" "}
//               <span className="text-gray-400 font-normal">(optional)</span>
//             </label>
//             <textarea
//               placeholder="Any additional details you'd like us to know..."
//               value={formData.notes ?? ""}
//               onChange={(e) => updateFormData({ notes: e.target.value })}
//               rows={4}
//               className="w-full rounded-lg border-[1.5px] border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-[#D72638] focus:ring-[3px] focus:ring-red-100 resize-none"
//             />
//           </div>
//         </div>

//         {/* Info Note */}
//         <div className="flex items-start gap-2.5 rounded-lg bg-gray-50 px-4 py-3 mb-7">
//           <Info className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
//           <p className="text-[12.5px] text-gray-500 leading-relaxed">
//             Your information is kept confidential and never shared. A
//             VinToCash specialist will contact you to discuss your
//             options—no pressure, no obligation.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3">
//           <button
//             type="button"
//             onClick={goBack}
//             className="flex-1 h-12 rounded-full border-[1.5px] border-[#D72638] bg-white text-[#D72638] text-[15px] font-semibold transition-all duration-200 hover:bg-red-50 cursor-pointer focus:outline-none"
//           >
//             Back
//           </button>
//           <button
//             type="button"
//             onClick={goNext}
//             className="flex-1 h-12 rounded-full bg-[#D72638] text-white text-[15px] font-semibold transition-all duration-200 hover:bg-[#b81e2e] hover:shadow-[0_4px_16px_rgba(215,38,56,0.35)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none"
//           >
//             Continue
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeSlide {
//           from { opacity: 0; transform: translateY(10px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { Info } from "lucide-react";
import { useFormContext } from "@/components/FormContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Step8() {
  const { formData, updateFormData, goNext, goBack } = useFormContext();

  const handleSubmit = async () => {
    // ✅ Console এ সব data দেখুন
    // console.log("═══════════════════════════════════════");
    // console.log("📋 FORM SUBMISSION DATA");
    // console.log("═══════════════════════════════════════");
    // console.log("⏰ Timestamp:", new Date().toLocaleString());
    // console.log("─────────────────────────────────────");
    // console.log("🚗 Vehicle Information:");
    // console.log("  Asset Type:", formData.assetType);
    // console.log("  Year:", formData.year);
    // console.log("  Make:", formData.make);
    // console.log("  Model:", formData.model);
    // console.log("  Mileage:", formData.mileage || "N/A");
    // console.log("  VIN:", formData.vin || "N/A");
    // console.log("  Condition:", formData.condition);
    // console.log("─────────────────────────────────────");
    // console.log("📄 Additional Details:");
    // console.log("  Title Situation:", formData.titleSituation || "N/A");
    // console.log("  Main Goal:", formData.mainGoal || "N/A");
    // console.log("  Seller Upside:", formData.sellerUpside || "N/A");
    // console.log("─────────────────────────────────────");
    // console.log("👤 Contact Information:");
    // console.log("  Full Name:", formData.fullName);
    // console.log("  Phone:", formData.phone);
    // console.log("  Email:", formData.email || "N/A");
    // console.log("  Notes:", formData.notes || "N/A");
    // console.log("═══════════════════════════════════════");
    // console.log("📦 Complete Data Object:");
    // console.log(JSON.stringify(formData, null, 2));
    console.log("═══════════════════════════════════════");
    console.log(formData);
    // ⏸️ API Call (পরে uncomment করবেন যখন backend API পাবেন)
    /*
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      
      const response = await fetch(`${API_URL}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${YOUR_TOKEN}`,  // যদি authentication লাগে
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      console.log("✅ API Response:", result);
      
      if (response.ok && result.success) {
        // Success - go to next step (Thank You page)
        goNext();
      } else {
        console.error("❌ API Error:", result);
        alert(result.message || "Submission failed. Please try again.");
      }
      
    } catch (error) {
      console.error("❌ Network Error:", error);
      alert("Could not connect to server. Please check your connection.");
    }
    */

    // ✅ এখনের জন্য শুধু next step এ যান
    goNext();
  };

  return (
    <Card className="max-w-7xl mx-auto animate-scale-in">
      <CardContent className="pt-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-display text-[20px] sm:text-[22px] font-bold text-foreground mb-1">
            How should we reach you?
          </h2>
          <p className="text-sm text-muted-foreground">
            We&apos;ll use this to discuss your offer and options.
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4 mb-5">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-800">
              Full Name <span className="text-brand">*</span>
            </label>
            <input
              type="text"
              placeholder="John Smith"
              value={formData.fullName || ""}
              onChange={(e) => updateFormData({ fullName: e.target.value })}
              className="h-11 w-full rounded-lg border-[1.5px] border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/10"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-800">
              Phone Number <span className="text-brand">*</span>
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone || ""}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              className="h-11 w-full rounded-lg border-[1.5px] border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/10"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-800">
              Email{" "}
              <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              value={formData.email || ""}
              onChange={(e) => updateFormData({ email: e.target.value })}
              className="h-11 w-full rounded-lg border-[1.5px] border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/10"
            />
          </div>

          {/* Additional Notes */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-800">
              Additional Notes{" "}
              <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <textarea
              placeholder="Any additional details you'd like us to know..."
              value={formData.notes || ""}
              onChange={(e) => updateFormData({ notes: e.target.value })}
              rows={4}
              className="w-full rounded-lg border-[1.5px] border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/10 resize-none"
            />
          </div>
        </div>

        {/* Info Note */}
        <div className="flex items-start gap-2.5 rounded-lg bg-muted/50 px-4 py-3 mb-7">
          <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <p className="text-[12.5px] text-muted-foreground leading-relaxed">
            Your information is kept confidential and never shared. A VinToCash
            specialist will contact you to discuss your options—no pressure, no
            obligation.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={goBack}
            className="flex-1 h-12 rounded-full border-[1.5px] border-[#D72638] bg-white text-[#D72638] text-[15px] font-semibold transition-all duration-200 hover:bg-red-50 cursor-pointer focus:outline-none"
          >
            Back
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="flex-1 h-12 rounded-full bg-[#D72638] text-white text-[15px] font-semibold transition-all duration-200 hover:bg-[#b81e2e] hover:shadow-[0_4px_16px_rgba(215,38,56,0.35)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none"
          >
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}