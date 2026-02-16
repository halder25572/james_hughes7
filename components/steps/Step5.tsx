// "use client";

// import { useRef, useState } from "react";
// import { Upload, ImageIcon, TrendingUp, X } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { useFormContext } from "@/components/FormContext";

// export function Step5() {
//   const { goNext, goBack } = useFormContext();
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [previews, setPreviews] = useState<string[]>([]);
//   const [skipPhotos, setSkipPhotos] = useState(false);

//   const handleFiles = (files: FileList | null) => {
//     if (!files) return;
//     Array.from(files).forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         if (e.target?.result) {
//           setPreviews((prev) => [...prev, e.target!.result as string]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const removePhoto = (idx: number) => {
//     setPreviews((prev) => prev.filter((_, i) => i !== idx));
//   };

//   return (
//     <Card className="animate-fade-slide-in">
//       <CardHeader>
//         <CardTitle>Upload vehicle photos</CardTitle>
//         <CardDescription>Clear photos help us give you a more accurate offer.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <button
//           type="button"
//           onClick={() => fileInputRef.current?.click()}
//           className="w-full border-2 border-dashed border-border rounded-xl p-8 text-center transition-all duration-200 bg-muted/40 hover:border-brand hover:bg-brand-muted/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 mb-4"
//         >
//           <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center mx-auto mb-3 shadow-sm">
//             <Upload className="w-5 h-5 text-muted-foreground" />
//           </div>
//           <p className="text-sm font-semibold text-foreground mb-1">Tap to upload photos</p>
//           <p className="text-xs text-muted-foreground">Exterior, interior, odometer, any damage</p>
//           <p className="text-[11px] text-muted-foreground/70 mt-1.5">JPG, PNG up to 20MB each · Up to 20 photos</p>
//         </button>
//         <input
//           ref={fileInputRef}
//           type="file"
//           accept="image/*"
//           multiple
//           className="hidden"
//           onChange={(e) => handleFiles(e.target.files)}
//         />

//         {previews.length > 0 && (
//           <div className="grid grid-cols-4 gap-2 mb-4">
//             {previews.map((src, i) => (
//               <div key={i} className="relative group aspect-square">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={src}
//                   alt={`Photo ${i + 1}`}
//                   className="w-full h-full object-cover rounded-lg border border-border"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removePhoto(i)}
//                   className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-foreground text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => fileInputRef.current?.click()}
//               className="aspect-square rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-brand transition-colors"
//             >
//               <ImageIcon className="w-5 h-5 text-muted-foreground" />
//             </button>
//           </div>
//         )}

//         <button
//           type="button"
//           onClick={() => setSkipPhotos(!skipPhotos)}
//           className={cn(
//             "flex items-start gap-3 w-full text-left p-3 rounded-lg transition-colors mb-4",
//             skipPhotos ? "bg-brand-muted/30" : "hover:bg-muted/50"
//           )}
//         >
//           <span
//             className={cn(
//               "mt-0.5 flex h-4.5 w-4.5 min-w-4.5 items-center justify-center rounded border-[1.5px] transition-colors",
//               skipPhotos ? "bg-brand border-brand" : "bg-white border-input"
//             )}
//             style={{ width: 18, height: 18 }}
//           >
//             {skipPhotos && (
//               <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
//                 <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             )}
//           </span>
//           <div>
//             <p className="text-[13.5px] font-medium text-foreground">Skip photo upload for now</p>
//             <p className="text-xs text-muted-foreground mt-0.5">You can still submit — we may request photos later</p>
//           </div>
//         </button>

//         <div className="flex items-start gap-2.5 rounded-lg bg-emerald-50 border border-emerald-100 px-4 py-3 mb-7">
//           <TrendingUp className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
//           <p className="text-[12.5px] text-emerald-800 leading-relaxed">
//             More photos = more accurate offer. Vehicles with photos typically receive{" "}
//             <strong>12% higher offers</strong>.
//           </p>
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

import { useRef, useState } from "react";
import { Info, X, ImageIcon } from "lucide-react";
import { useFormContext } from "@/components/FormContext";

function cn(...cls: (string | boolean | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

export default function Step5() {
  const { goNext, goBack } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<{ name: string; src: string }[]>([]);
  const [dragging, setDragging] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result)
          setPreviews((p) => [
            ...p,
            { name: file.name, src: e.target!.result as string },
          ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div
      className="w-full rounded-xl border border-gray-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
      style={{ animation: "fadeSlide 0.3s ease forwards" }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-0 sm:px-7 sm:pt-7">
        <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-tight mb-1">
          Photos or video{" "}
          <span className="font-normal text-gray-400">(optional)</span>
        </h2>
        <p className="text-sm text-gray-500">
          Visual documentation helps us provide a more accurate offer.
        </p>
      </div>

      {/* Body */}
      <div className="px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7">

        {/* Drop Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={cn(
            "w-full rounded-xl border-[1.5px] transition-all duration-200 mb-4 overflow-hidden",
            dragging
              ? "border-[#D72638] bg-red-50"
              : "border-gray-200 bg-white"
          )}
        >
          {/* Upload area */}
          <div className="flex flex-col items-center justify-center py-10 px-4">
            {/* Upload Icon */}
            <div className="mb-3 text-gray-400">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 26V14M19 14L14 19M19 14L24 19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 28C4.8 26.5 3 24 3 21C3 17.1 6.1 14 10 14C10.4 14 10.7 14 11 14.1C12.1 10.6 15.3 8 19 8C23.4 8 27 11.6 27 16C27 16.3 27 16.6 26.9 16.9C29.8 17.6 32 20.1 32 23C32 25.5 30.5 27.7 28.3 28.7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="text-[14px] font-medium text-gray-700 mb-1">
              Drag and drop or click to upload
            </p>
            <p className="text-[12px] text-gray-400 mb-4 text-center">
              Photos of exterior, interior, dashboard, and any damage
            </p>

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="px-5 py-2 rounded-lg border-[1.5px] border-gray-300 bg-white text-[13px] font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
            >
              Choose Files
            </button>
          </div>

          {/* Preview grid — shows after upload */}
          {previews.length > 0 && (
            <div className="border-t border-gray-100 px-4 py-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {previews.map((p, i) => (
                  <div key={i} className="relative group aspect-square">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.src}
                      alt={p.name}
                      className="w-full h-full object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setPreviews((prev) => prev.filter((_, j) => j !== i))
                      }
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gray-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <p className="absolute bottom-0 left-0 right-0 text-[9px] text-white bg-black/40 px-1.5 py-0.5 rounded-b-lg truncate">
                      {p.name}
                    </p>
                  </div>
                ))}

                {/* Add more tile */}
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 hover:border-[#D72638] hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <ImageIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-[10px] text-gray-400">Add more</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Hidden input */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        {/* Info Note */}
        <div className="flex items-start gap-2.5 rounded-lg bg-gray-50 px-4 py-3 mb-7">
          <Info className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
          <p className="text-[12.5px] text-gray-500 leading-relaxed">
            Photos are optional but highly recommended for the most accurate
            assessment. You can also text or email them after submission.
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