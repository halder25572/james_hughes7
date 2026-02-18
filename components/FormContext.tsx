// "use client";

// import React, { createContext, useContext, useState } from "react";

// export interface FormData {
//   assetType: string;
//   year: string;
//   make: string;
//   model: string;
//   mileage: string;
//   vin: string;
//   condition: string;
//   titleSituation: string;
//   mainGoal: string;
//   sellerUpside: string;
//   fullName: string;
//   phone: string;
//   email: string;
//   notes: string;
//   // extra (kept for compatibility)
//   features: string[];
//   firstName: string;
//   lastName: string;
//   zip: string;
//   contactMethod: string;
// }

// interface FormContextType {
//   currentStep: number;
//   formData: FormData;
//   goNext: () => void;
//   goBack: () => void;
//   goToStep: (step: number) => void;
//   updateFormData: (data: Partial<FormData>) => void;
// }

// const FormContext = createContext<FormContextType | undefined>(undefined);

// const TOTAL_STEPS = 9; // 8 steps + 1 thank you page

// export function FormProvider({ children }: { children: React.ReactNode }) {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState<FormData>({
//     assetType: "Car / Truck / SUV",
//     year: "",
//     make: "",
//     model: "",
//     mileage: "",
//     vin: "",
//     condition: "Excellent Condition",
//     titleSituation: "",
//     mainGoal: "",
//     sellerUpside: "",
//     fullName: "",
//     phone: "",
//     email: "",
//     notes: "",
//     features: [],
//     firstName: "",
//     lastName: "",
//     zip: "",
//     contactMethod: "Phone Call",
//   });

//   const goNext = () => setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
//   const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));
//   const goToStep = (step: number) => setCurrentStep(step);
//   const updateFormData = (data: Partial<FormData>) =>
//     setFormData((prev) => ({ ...prev, ...data }));

//   return (
//     <FormContext.Provider
//       value={{ currentStep, formData, goNext, goBack, goToStep, updateFormData }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// }

// export function useFormContext() {
//   const ctx = useContext(FormContext);
//   if (!ctx) throw new Error("useFormContext must be used within FormProvider");
//   return ctx;
// }

"use client";

import React, { createContext, useContext, useState } from "react";
import { validateCurrentStep } from "@/lib/validation";

export interface FormData {
  // Step 1
  assetType: string;
  // Step 2
  year: string;
  make: string;
  model: string;
  mileage: string;
  vin: string;
  // Step 3
  condition: string;
  // Step 4
  titleSituation: string;
  // Step 5 — photos handled locally in component
  // Step 6
  mainGoal: string;
  // Step 7
  sellerUpside: string;
  // Step 8
  fullName: string;
  phone: string;
  email: string;
  notes: string;
  // extra (kept for compatibility)
  features: string[];
  firstName: string;
  lastName: string;
  zip: string;
  contactMethod: string;
}

interface FormContextType {
  currentStep: number;
  formData: FormData;
  goNext: () => void;
  goBack: () => void;
  goToStep: (step: number) => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const TOTAL_STEPS = 9; // 8 steps + 1 thank you page

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    assetType: "",
    year: "",
    make: "",
    model: "",
    mileage: "",
    vin: "",
    condition: "",
    titleSituation: "",
    mainGoal: "",
    sellerUpside: "",
    fullName: "",
    phone: "",
    email: "",
    notes: "",
    features: [],
    firstName: "",
    lastName: "",
    zip: "",
    contactMethod: "Phone Call",
  });

  const goNext = () => {
    // ✅ Validate before going to next step
    const validation = validateCurrentStep(currentStep, formData);
    
    if (!validation.isValid) {
      // Show error messages
      alert(validation.errors.join("\n"));
      return;
    }
    
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const goToStep = (step: number) => setCurrentStep(step);
  const updateFormData = (data: Partial<FormData>) =>
    setFormData((prev) => ({ ...prev, ...data }));

  return (
    <FormContext.Provider
      value={{ currentStep, formData, goNext, goBack, goToStep, updateFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used within FormProvider");
  return ctx;
}