"use client";

import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useFormContext } from "@/components/FormContext";

const ASSET_TYPES = [
  { label: "Car / Truck / SUV", desc: "Sedans, coupes, trucks, SUVs" },
  { label: "Motorcycle", desc: "Street, sport, cruiser bikes" },
  { label: "ATV / UTV", desc: "All-terrain and utility vehicles" },
  { label: "Camper / RV", desc: "Motorhomes, travel trailers" },
  { label: "Trailer", desc: "Cargo, utility, specialty trailers" },
  { label: "Commercial Asset", desc: "Work trucks, equipment, fleet" },
];

export function Step1() {
  const { formData, updateFormData, goNext } = useFormContext();

  return (
    <Card className="max-w-7xl mx-auto animate-fade-slide-in">
      <CardHeader>
        <CardTitle>What type of asset are you selling?</CardTitle>
        <CardDescription>Select the category that best describes your vehicle or asset.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {ASSET_TYPES.map((type) => {
            const selected = formData.assetType === type.label;
            return (
              <button
                key={type.label}
                type="button"
                onClick={() => updateFormData({ assetType: type.label })}
                className={cn(
                  "relative text-left cursor-pointer rounded-lg border-[1.5px] px-4 py-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
                  selected
                    ? "border-[#D93E39]   bg-[#FFF0F1]"
                    : "border-border bg-white hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                {selected && (
                  <span className="absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#D93E39] text-white text-[10px] font-bold">
                    ✓
                  </span>
                )}
                <p className="text-[13.5px] font-semibold text-foreground mb-0.5">{type.label}</p>
                <p className="text-[12px] text-muted-foreground">{type.desc}</p>
              </button>
            );
          })}
        </div>

        <div className="flex items-start gap-2.5 rounded-lg bg-muted px-4 py-3 mb-7">
          <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <p className="text-[12.5px] text-muted-foreground leading-relaxed">
            Your information is kept confidential. No obligation to proceed.
          </p>
        </div>

        <Button className="w-full bg-[#D93E39] cursor-pointer text-white" onClick={goNext}>
          Continue
        </Button>
      </CardContent>
    </Card>
  );
}
