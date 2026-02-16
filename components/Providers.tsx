"use client";

import { FormProvider } from "@/components/FormContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <FormProvider>{children}</FormProvider>;
}