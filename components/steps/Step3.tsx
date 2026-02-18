"use client";

import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useFormContext } from "@/components/FormContext";

const CONDITIONS = [
  {
    label: "Excellent Condition",
    desc: "Well-maintained, minimal wear, ready to sell retail",
  },
  {
    label: "Good Condition",
    desc: "Normal wear, minor cosmetic issues, mechanically sound",
  },
  {
    label: "Fair Condition",
    desc: "Some repairs needed, cosmetic damage, runs but needs work",
  },
  {
    label: "Poor Condition",
    desc: "Significant issues, major repairs needed, may not run",
  },
  {
    label: "Not Running",
    desc: "Non-operational, parts value, project vehicles",
  },
];

export function Step3() {
  const { formData, updateFormData, goNext, goBack } = useFormContext();

  return (
    <Card className="max-w-7xl mx-auto animate-fade-slide-in">
      <CardHeader>
        <CardTitle>What&apos;s the current condition?</CardTitle>
        <CardDescription>Be honest—it helps us give you the best offer possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2.5 mb-4">
          {CONDITIONS.map((cond) => {
            const selected = formData.condition === cond.label;
            return (
              <button
                key={cond.label}
                type="button"
                onClick={() => updateFormData({ condition: cond.label })}
                className={cn(
                  "relative text-left rounded-lg border-[1.5px] px-4 py-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
                  selected
                    ? "border-brand bg-brand-light"
                    : "border-border bg-white hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                {selected && (
                  <span className="absolute top-1/2 right-3.5 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white text-[10px] font-bold">
                    ✓
                  </span>
                )}
                <p className="text-[13.5px] font-semibold text-foreground mb-0.5 pr-8">{cond.label}</p>
                <p className="text-[12px] text-muted-foreground">{cond.desc}</p>
              </button>
            );
          })}
        </div>

        <div className="flex items-start gap-2.5 rounded-lg bg-muted px-4 py-3 mb-7">
          <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <p className="text-[12.5px] text-muted-foreground leading-relaxed">
            Even non-running vehicles can have value. We buy in all conditions.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 border-[#D93E39] hover:bg-[#FFF0F1] text-[#D93E39] cursor-pointer" onClick={goBack}>
            Back
          </Button>
          <Button className="flex-1 bg-[#D93E39] cursor-pointer text-white" onClick={goNext}>
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
