import { FormProvider } from "@/components/FormContext";
import { MultiStepForm } from "@/components/MultiStepForm";



const GetAOfferPage = () => {
  return (
    <main className="flex items-start justify-center">
      <FormProvider>
        <MultiStepForm />
      </FormProvider>
    </main>
  );
};

export default GetAOfferPage;

// STEP ROUTER
// ─────────────────────────────────────────────


// "use client";

// import { createContext, useContext, useState, useRef } from "react";
// import { Info, X, ImageIcon, CheckCircle2 } from "lucide-react";

// // ─────────────────────────────────────────────
// // TYPES
// // ─────────────────────────────────────────────
// interface FormData {
//   assetType: string;
//   year: string; make: string; model: string;
//   mileage: string; vin: string;
//   condition: string;
//   titleSituation: string;
//   mainGoal: string;
//   sellerUpside: string;
//   fullName: string;
//   phone: string; email: string;
//   notes: string;
//   features: string[];
//   firstName: string; lastName: string;
//   zip: string; contactMethod: string;
// }

// interface FormCtx {
//   step: number; data: FormData;
//   next: () => void; back: () => void; reset: () => void;
//   update: (d: Partial<FormData>) => void;
// }

// // ─────────────────────────────────────────────
// // CONTEXT
// // ─────────────────────────────────────────────
// const Ctx = createContext<FormCtx | null>(null);
// const useCtx = () => useContext(Ctx)!;

// const INIT: FormData = {
//   assetType: "Car / Truck / SUV",
//   year: "", make: "", model: "", mileage: "", vin: "",
//   condition: "Excellent Condition",
//   titleSituation: "", mainGoal: "", sellerUpside: "",
//   fullName: "", phone: "", email: "", notes: "",
//   features: [], firstName: "", lastName: "",
//   zip: "", contactMethod: "Phone Call",
// };

// // Steps 1-8 show progress bar, step 9 = thank you (no bar)
// const TOTAL = 9;
// const PCT  = [13, 25, 38, 50, 63, 75, 88, 100];

// function cn(...cls: (string | boolean | undefined)[]) {
//   return cls.filter(Boolean).join(" ");
// }

// // ─────────────────────────────────────────────
// // SHARED ATOMS
// // ─────────────────────────────────────────────
// function Btn({ children, onClick, variant = "primary", full = false }: {
//   children: React.ReactNode; onClick?: () => void;
//   variant?: "primary" | "outline"; full?: boolean;
// }) {
//   return (
//     <button type="button" onClick={onClick}
//       className={cn(
//         "h-12 rounded-full px-6 text-[15px] font-semibold transition-all duration-200 focus:outline-none cursor-pointer",
//         full && "w-full",
//         variant === "primary"
//           ? "bg-[#D72638] text-white hover:bg-[#b81e2e] hover:shadow-[0_4px_16px_rgba(215,38,56,0.35)] hover:-translate-y-0.5 active:translate-y-0"
//           : "border-[1.5px] border-[#D72638] bg-white text-[#D72638] hover:bg-red-50"
//       )}>
//       {children}
//     </button>
//   );
// }

// function TInput({ placeholder, value, onChange, type = "text" }: {
//   placeholder?: string; value: string; onChange: (v: string) => void; type?: string;
// }) {
//   return (
//     <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       className="h-11 w-full rounded-lg border-[1.5px] border-gray-200 bg-white px-3.5 text-sm text-gray-900 placeholder:text-gray-400 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-[#D72638] focus:ring-[3px] focus:ring-red-100" />
//   );
// }

// function TTextarea({ placeholder, value, onChange, rows = 3 }: {
//   placeholder?: string; value: string; onChange: (v: string) => void; rows?: number;
// }) {
//   return (
//     <textarea value={value} onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder} rows={rows}
//       className="w-full rounded-lg border-[1.5px] border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-[#D72638] focus:ring-[3px] focus:ring-red-100 resize-none" />
//   );
// }


// function Field({ label, req, opt, hint, children }: {
//   label: string; req?: boolean; opt?: string; hint?: string; children: React.ReactNode;
// }) {
//   return (
//     <div className="flex flex-col gap-1.5">
//       <label className="text-[13px] font-medium text-gray-800">
//         {label}
//         {req && <span className="text-[#D72638] ml-0.5">*</span>}
//         {opt && <span className="text-gray-400 font-normal text-xs ml-1">({opt})</span>}
//       </label>
//       {children}
//       {hint && <p className="text-[11.5px] text-gray-400 mt-0.5">{hint}</p>}
//     </div>
//   );
// }

// function InfoNote({ children, green = false }: { children: React.ReactNode; green?: boolean }) {
//   return (
//     <div className={cn("flex items-start gap-2.5 rounded-lg px-4 py-3",
//       green ? "bg-emerald-50 border border-emerald-100" : "bg-gray-50")}>
//       {green
//         ? <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
//         : <Info className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />}
//       <p className={cn("text-[12.5px] leading-relaxed", green ? "text-emerald-800" : "text-gray-500")}>
//         {children}
//       </p>
//     </div>
//   );
// }

// function Card({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="w-full rounded-xl border border-gray-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
//       style={{ animation: "fadeSlide 0.3s ease forwards" }}>
//       {children}
//     </div>
//   );
// }

// function CardHead({ title, sub, optionalTag }: { title: string; sub: string; optionalTag?: boolean }) {
//   return (
//     <div className="px-6 pt-6 pb-0 sm:px-7 sm:pt-7">
//       <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-tight mb-1">
//         {title}
//         {optionalTag && <span className="text-gray-400 font-normal"> (optional)</span>}
//       </h2>
//       <p className="text-sm text-gray-500">{sub}</p>
//     </div>
//   );
// }

// function CardBody({ children }: { children: React.ReactNode }) {
//   return <div className="px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7">{children}</div>;
// }

// function NavRow({ onBack, onNext, label = "Continue", noBack = false }: {
//   onBack?: () => void; onNext: () => void; label?: string; noBack?: boolean;
// }) {
//   return (
//     <div className="flex gap-3 mt-7">
//       {!noBack && onBack && <Btn variant="outline" onClick={onBack} full>Back</Btn>}
//       <Btn variant="primary" onClick={onNext} full>{label}</Btn>
//     </div>
//   );
// }

// // Reusable single-select option row (dark border when selected, no checkmark)
// function SelectRow({ title, desc, selected, onClick }: {
//   title: string; desc: string; selected: boolean; onClick: () => void;
// }) {
//   return (
//     <button type="button" onClick={onClick}
//       className={cn(
//         "w-full text-left rounded-xl border-[1.5px] px-5 py-4 bg-white transition-all duration-200 focus:outline-none cursor-pointer",
//         selected ? "border-gray-900 shadow-sm" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/60"
//       )}>
//       <p className="text-[14px] font-semibold text-gray-900 mb-0.5">{title}</p>
//       <p className="text-[12.5px] text-gray-400 font-normal">{desc}</p>
//     </button>
//   );
// }

// // Reusable single-select option card (red border + checkmark when selected)
// function OptionCard({ title, desc, selected, onClick, block = false }: {
//   title: string; desc: string; selected: boolean; onClick: () => void; block?: boolean;
// }) {
//   return (
//     <button type="button" onClick={onClick}
//       className={cn(
//         "relative text-left rounded-lg border-[1.5px] px-4 py-4 transition-all duration-200 focus:outline-none cursor-pointer",
//         block && "w-full",
//         selected ? "border-[#D72638] bg-red-50" : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
//       )}>
//       {selected && (
//         <span className="absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#D72638] text-white text-[10px] font-bold">✓</span>
//       )}
//       <p className="text-[13.5px] font-semibold text-gray-900 mb-0.5 pr-7">{title}</p>
//       <p className="text-[12px] text-gray-500">{desc}</p>
//     </button>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP 1 — Asset Type
// // ─────────────────────────────────────────────
// const ASSETS = [
//   { label: "Car / Truck / SUV", desc: "Sedans, coupes, trucks, SUVs" },
//   { label: "Motorcycle",        desc: "Street, sport, cruiser bikes" },
//   { label: "ATV / UTV",         desc: "All-terrain and utility vehicles" },
//   { label: "Camper / RV",       desc: "Motorhomes, travel trailers" },
//   { label: "Trailer",           desc: "Cargo, utility, specialty trailers" },
//   { label: "Commercial Asset",  desc: "Work trucks, equipment, fleet" },
// ];

// function Step1() {
//   const { data, update, next } = useCtx();
//   return (
//     <Card>
//       <CardHead title="What type of asset are you selling?" sub="Select the category that best describes your vehicle or asset." />
//       <CardBody>
//         <div className="grid grid-cols-2 gap-3 mb-6">
//           {ASSETS.map((a) => (
//             <OptionCard key={a.label} title={a.label} desc={a.desc}
//               selected={data.assetType === a.label}
//               onClick={() => update({ assetType: a.label })} />
//           ))}
//         </div>
//         <InfoNote>Your information is kept confidential. No obligation to proceed.</InfoNote>
//         <NavRow noBack onNext={next} />
//       </CardBody>
//     </Card>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP 2 — Vehicle Details
// // ─────────────────────────────────────────────
// function Step2() {
//   const { data, update, next, back } = useCtx();
//   return (
//     <Card>
//       <CardHead title="Tell us about your car / truck / suv" sub="Basic details help us provide an accurate assessment." />
//       <CardBody>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <Field label="Year" req><TInput placeholder="2020" value={data.year} onChange={(v) => update({ year: v })} /></Field>
//           <Field label="Make" req><TInput placeholder="Honda" value={data.make} onChange={(v) => update({ make: v })} /></Field>
//         </div>
//         <div className="flex flex-col gap-4">
//           <Field label="Model" req><TInput placeholder="Accord" value={data.model} onChange={(v) => update({ model: v })} /></Field>
//           <Field label="Mileage" opt="if applicable"><TInput placeholder="75,000" value={data.mileage} onChange={(v) => update({ mileage: v })} /></Field>
//           <Field label="VIN" opt="optional" hint="VIN helps us provide the most accurate offer. Usually found on dashboard or door jamb.">
//             <TInput placeholder="1HGBH41JXMN109186" value={data.vin} onChange={(v) => update({ vin: v })} />
//           </Field>
//         </div>
//         <NavRow onBack={back} onNext={next} />
//       </CardBody>
//     </Card>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP 3 — Condition
// // ─────────────────────────────────────────────
// const CONDITIONS = [
//   { label: "Excellent Condition", desc: "Well-maintained, minimal wear, ready to sell retail" },
//   { label: "Good Condition",      desc: "Normal wear, minor cosmetic issues, mechanically sound" },
//   { label: "Fair Condition",      desc: "Some repairs needed, cosmetic damage, runs but needs work" },
//   { label: "Poor Condition",      desc: "Significant issues, major repairs needed, may not run" },
//   { label: "Not Running",         desc: "Non-operational, parts value, project vehicles" },
// ];

// function Step3() {
//   const { data, update, next, back } = useCtx();
//   return (
//     <Card>
//       <CardHead title="What's the current condition?" sub="Be honest—it helps us give you the best offer possible." />
//       <CardBody>
//         <div className="flex flex-col gap-2.5 mb-5">
//           {CONDITIONS.map((c) => (
//             <OptionCard key={c.label} title={c.label} desc={c.desc} block
//               selected={data.condition === c.label}
//               onClick={() => update({ condition: c.label })} />
//           ))}
//         </div>
//         <InfoNote>Even non-running vehicles can have value. We buy in all conditions.</InfoNote>
//         <NavRow onBack={back} onNext={next} />
//       </CardBody>
//     </Card>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP 4 — Title Situation
// // ─────────────────────────────────────────────
// const TITLE_OPTIONS = [
//   { label: "Clean Title", desc: "Title in hand, no liens" },
//   { label: "Financed",    desc: "Still making payments" },
//   { label: "No Title",    desc: "Title not available" },
//   { label: "Not Sure",    desc: "Need help determining" },
// ];

// function Step4() {
//   const { data, update, next, back } = useCtx();
//   return (
//     <Card>
//       <CardHead title="What's the title situation?" sub="This helps us understand the paperwork needed." />
//       <CardBody>
//         <div className="flex flex-col gap-3 mb-5">
//           {TITLE_OPTIONS.map((t) => (
//             <SelectRow key={t.label} title={t.label} desc={t.desc}
//               selected={data.titleSituation === t.label}
//               onClick={() => update({ titleSituation: t.label })} />
//           ))}
//         </div>
//         <InfoNote>We can work with most title situations. We&apos;ll help guide you through the process.</InfoNote>
//         <NavRow onBack={back} onNext={next} />
//       </CardBody>
//     </Card>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP 5 — Photos or Video
// // ─────────────────────────────────────────────
// function Step5() {
//   const { next, back } = useCtx();
//   const ref = useRef<HTMLInputElement>(null);
//   const [previews, setPreviews] = useState<{ name: string; src: string }[]>([]);
//   const [dragging, setDragging] = useState(false);

//   const handleFiles = (files: FileList | null) => {
//     if (!files) return;
//     Array.from(files).forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         if (e.target?.result)
//           setPreviews((p) => [...p, { name: file.name, src: e.target!.result as string }]);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   return (
//     <Card>
//       <CardHead title="Photos or video" sub="Visual documentation helps us provide a more accurate offer." optionalTag />
//       <CardBody>
//         {/* Drop Zone */}
//         <div
//           onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
//           onDragLeave={() => setDragging(false)}
//           onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
//           className={cn(
//             "w-full rounded-xl border-[1.5px] transition-all duration-200 mb-4 overflow-hidden",
//             dragging ? "border-[#D72638] bg-red-50" : "border-gray-200 bg-white"
//           )}
//         >
//           <div className="flex flex-col items-center justify-center py-10 px-4">
//             {/* Upload icon */}
//             <div className="mb-3 text-gray-400">
//               <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
//                 <path d="M18 24V12M18 12L13 17M18 12L23 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M6 26C3.8 24.5 2 22 2 19C2 15.1 5.1 12 9 12c.4 0 .7 0 1 .1C11.1 8.6 14.3 6 18 6c4.4 0 8 3.6 8 8 0 .3 0 .6-.1.9C28.8 15.6 31 18.1 31 21c0 2.5-1.5 4.7-3.7 5.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//               </svg>
//             </div>
//             <p className="text-[14px] font-medium text-gray-700 mb-1">Drag and drop or click to upload</p>
//             <p className="text-[12px] text-gray-400 mb-4 text-center">Photos of exterior, interior, dashboard, and any damage</p>
//             <button type="button" onClick={() => ref.current?.click()}
//               className="px-5 py-2 rounded-lg border-[1.5px] border-gray-300 bg-white text-[13px] font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer focus:outline-none">
//               Choose Files
//             </button>
//           </div>

//           {previews.length > 0 && (
//             <div className="border-t border-gray-100 px-4 py-4">
//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
//                 {previews.map((p, i) => (
//                   <div key={i} className="relative group aspect-square">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img src={p.src} alt={p.name} className="w-full h-full object-cover rounded-lg border border-gray-200" />
//                     <button type="button" onClick={() => setPreviews((prev) => prev.filter((_, j) => j !== i))}
//                       className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gray-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
//                       <X className="w-3 h-3" />
//                     </button>
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => ref.current?.click()}
//                   className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 hover:border-[#D72638] hover:bg-red-50 transition-colors cursor-pointer">
//                   <ImageIcon className="w-5 h-5 text-gray-400" />
//                   <span className="text-[10px] text-gray-400">Add more</span>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         <input ref={ref} type="file" accept="image/*,video/*" multiple className="hidden"
//           onChange={(e) => handleFiles(e.target.files)} />

//         <div className="mb-7">
//           <InfoNote>
//             Photos are optional but highly recommended for the most accurate assessment.
//             You can also text or email them after submission.
//           </InfoNote>
//         </div>
//         <NavRow onBack={back} onNext={next} />
//       </CardBody>
//     </Card>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP 6 — Main Goal
// // ─────────────────────────────────────────────
// const GOAL_OPTIONS = [
//   { label: "Fast Cash",         desc: "Quick, simple transaction" },
//   { label: "Most Money",        desc: "Maximize value received" },
//   { label: "Exploring Options", desc: "Just seeing what's possible" },
// ];

// function Step6() {
//   const { data, update, next, back } = useCtx();
//   return (
//     <Card>
//       <CardHead title="What's your main goal?" sub="This helps us tailor our approach to your needs." />
//       <CardBody>
//         <div className="flex flex-col gap-3 mb-7">
//           {GOAL_OPTIONS.map((g) => (
//             <SelectRow key={g.label} title={g.label} desc={g.desc}
//               selected={data.mainGoal === g.label}
//               onClick={() => update({ mainGoal: g.label })} />
//           ))}
//         </div>
//         <NavRow onBack={back} onNext={next} />
//       </CardBody>
//     </Card>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP 7 — Seller Upside
// // ─────────────────────────────────────────────
// const UPSIDE_OPTIONS = [
//   { label: "Yes, interested",  desc: "Tell me more about Seller Upside" },
//   { label: "No, just cash",    desc: "I prefer a straightforward cash offer" },
//   { label: "Not sure yet",     desc: "Help me understand my options" },
// ];

// function Step7() {
//   const { data, update, next, back } = useCtx();
//   return (
//     <Card>
//       <CardHead title="Interested in Seller Upside?" sub="Seller Upside allows qualifying sellers to receive a guaranteed minimum now, plus potential additional payment if your asset sells for more." />
//       <CardBody>
//         <div className="flex flex-col gap-3 mb-5">
//           {UPSIDE_OPTIONS.map((o) => (
//             <SelectRow key={o.label} title={o.label} desc={o.desc}
//               selected={data.sellerUpside === o.label}
//               onClick={() => update({ sellerUpside: o.label })} />
//           ))}
//         </div>
//         <InfoNote>
//           Seller Upside is completely optional and not available for all assets.
//           We&apos;ll discuss your specific options when we connect.
//         </InfoNote>
//         <NavRow onBack={back} onNext={next} />
//       </CardBody>
//     </Card>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP 8 — Contact Info
// // ─────────────────────────────────────────────
// function Step8() {
//   const { data, update, next, back } = useCtx();
//   return (
//     <Card>
//       <CardHead title="How should we reach you?" sub="We'll use this to discuss your offer and options." />
//       <CardBody>
//         <div className="flex flex-col gap-4 mb-5">
//           <Field label="Full Name" req>
//             <TInput placeholder="John Smith" value={data.fullName}
//               onChange={(v) => update({ fullName: v })} />
//           </Field>
//           <Field label="Phone Number" req>
//             <TInput type="tel" placeholder="(555) 123-4567" value={data.phone}
//               onChange={(v) => update({ phone: v })} />
//           </Field>
//           <Field label="Email" opt="optional">
//             <TInput type="email" placeholder="john@example.com" value={data.email}
//               onChange={(v) => update({ email: v })} />
//           </Field>
//           <Field label="Additional Notes" opt="optional">
//             <TTextarea rows={4}
//               placeholder="Any additional details you'd like us to know..."
//               value={data.notes} onChange={(v) => update({ notes: v })} />
//           </Field>
//         </div>
//         <InfoNote>
//           Your information is kept confidential and never shared. A VinToCash specialist
//           will contact you to discuss your options—no pressure, no obligation.
//         </InfoNote>
//         <NavRow onBack={back} onNext={next} label="Continue" />
//       </CardBody>
//     </Card>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP 9 — Thank You
// // ─────────────────────────────────────────────
// const NEXT_STEPS = [
//   "We'll review your asset details within 24 hours",
//   "A specialist will reach out via phone or email",
//   "We'll discuss your options and answer questions",
// ];

// function StepThankYou() {
//   const { reset } = useCtx();
//   return (
//     <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-12"
//       style={{ animation: "fadeSlide 0.4s ease forwards" }}>
//       {/* Green check */}
//       <div className="w-18 h-18 rounded-full bg-green-100 flex items-center justify-center mb-6">
//         <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
//           <path d="M7 19L14.5 26L29 11" stroke="#22c55e" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </div>

//       <h1 className="text-[32px] sm:text-[36px] font-bold text-gray-900 mb-3">Thank You!</h1>
//       <p className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-115">
//         Your submission has been received. A VinToCash specialist will review
//         your information and contact you shortly.
//       </p>

//       {/* What happens next */}
//       <div className="w-full max-w-130 rounded-2xl border border-red-100 bg-red-50/60 px-6 py-6 mb-8 text-left">
//         <p className="text-[15px] font-semibold text-gray-900 mb-4">What happens next?</p>
//         <div className="flex flex-col gap-3">
//           {NEXT_STEPS.map((s, i) => (
//             <div key={i} className="flex items-start gap-3">
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0">
//                 <circle cx="9" cy="9" r="8.25" stroke="#9ca3af" strokeWidth="1.5" />
//                 <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//               <p className="text-[13.5px] text-gray-700 leading-snug">{s}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <p className="text-[12.5px] text-gray-400 mb-8">
//         Your information is kept confidential and never shared with third parties.
//       </p>

//       <button type="button" onClick={reset}
//         className="px-8 h-12 rounded-full border-[1.5px] border-gray-300 bg-white text-[14px] font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer focus:outline-none">
//         Submit Another Vehicle
//       </button>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// // PROGRESS BAR
// // ─────────────────────────────────────────────
// function Progress() {
//   const { step } = useCtx();
//   if (step >= TOTAL) return null; // hide on thank you page
//   const pct  = PCT[step - 1];
//   const done = step === TOTAL - 1; // step 8 = 100%
//   return (
//     <div className="mb-5">
//       <div className="flex items-center justify-between mb-3">
//         <span className="text-[13px] font-medium text-gray-500">Step {step} of {TOTAL - 1}</span>
//         <span className={cn("text-[13px] font-semibold", done ? "text-emerald-600" : "text-[#D72638]")}>
//           {done ? "100% Complete" : `${pct}% Complete`}
//         </span>
//       </div>
//       <div className="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
//         <div className={cn("h-full rounded-full transition-all duration-500", done ? "bg-emerald-500" : "bg-[#D72638]")}
//           style={{ width: `${pct}%` }} />
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// // STEP ROUTER
// // ─────────────────────────────────────────────
// const STEP_MAP: Record<number, React.FC> = {
//   1: Step1, 2: Step2, 3: Step3, 4: Step4,
//   5: Step5, 6: Step6, 7: Step7, 8: Step8,
//   9: StepThankYou,
// };

// // ─────────────────────────────────────────────
// // ROOT PAGE
// // ─────────────────────────────────────────────
// export default function Page() {
//   const [step, setStep] = useState(1);
//   const [data, setData] = useState<FormData>(INIT);

//   const ctx: FormCtx = {
//     step, data,
//     next:   () => setStep((s) => Math.min(s + 1, TOTAL)),
//     back:   () => setStep((s) => Math.max(s - 1, 1)),
//     reset:  () => { setStep(1); setData(INIT); },
//     update: (d) => setData((prev) => ({ ...prev, ...d })),
//   };

//   const StepComp = STEP_MAP[step];

//   return (
//     <Ctx.Provider value={ctx}>
//       <main className="min-h-screen bg-[#f0f2f5] flex items-start justify-center">
//         <div className="w-full max-w-190 px-4 py-8 sm:py-10">
//           <Progress />
//           <div key={step}><StepComp /></div>
//         </div>
//       </main>
//       <style>{`
//         @keyframes fadeSlide {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//       `}</style>
//     </Ctx.Provider>
//   );
// }