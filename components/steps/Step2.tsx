"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useFormContext } from "@/components/FormContext";

export function Step2() {
  const { formData, updateFormData, goNext, goBack } = useFormContext();

  return (
    <Card className="animate-fade-slide-in">
      <CardHeader>
        <CardTitle>Tell us about your car / truck / suv</CardTitle>
        <CardDescription>Basic details help us provide an accurate assessment.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-1.5">
            <Label htmlFor="year">
              Year <span className="text-[#D93E39]">*</span>
            </Label>
            <Input
              id="year"
              placeholder="2020"
              value={formData.year}
              onChange={(e) => updateFormData({ year: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="make">
              Make <span className="text-[#D93E39]">*</span>
            </Label>
            <Input
              id="make"
              placeholder="Honda"
              value={formData.make}
              onChange={(e) => updateFormData({ make: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-1.5 mb-4">
          <Label htmlFor="model">
            Model <span className="text-[#D93E39]">*</span>
          </Label>
          <Input
            id="model"
            placeholder="Accord"
            value={formData.model}
            onChange={(e) => updateFormData({ model: e.target.value })}
          />
        </div>

        <div className="space-y-1.5 mb-4">
          <Label htmlFor="mileage">
            Mileage{" "}
            <span className="text-muted-foreground font-normal text-xs">(if applicable)</span>
          </Label>
          <Input
            id="mileage"
            placeholder="75,000"
            value={formData.mileage}
            onChange={(e) => updateFormData({ mileage: e.target.value })}
          />
        </div>

        <div className="space-y-1.5 mb-7">
          <Label htmlFor="vin">
            VIN{" "}
            <span className="text-muted-foreground font-normal text-xs">(optional - helps with accuracy)</span>
          </Label>
          <Input
            id="vin"
            placeholder="1HGBH41JXMN109186"
            value={formData.vin}
            onChange={(e) => updateFormData({ vin: e.target.value })}
          />
          <p className="text-[11.5px] text-muted-foreground mt-1.5">
            VIN helps us provide the most accurate offer. Usually found on dashboard or door jamb.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 border border-[#D93E39] hover:bg-[#FFF0F1] text-[#D93E39] cursor-pointer" onClick={goBack}>
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