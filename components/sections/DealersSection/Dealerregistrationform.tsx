"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

type ContactMethod = "phone" | "text" | "email";

type VehicleCategory =
  | "cars"
  | "dieselTrucks"
  | "trailers"
  | "trucks"
  | "motorcycles"
  | "commercialVehicles"
  | "suvs"
  | "campersRVs"
  | "workTrucks";

type FormData = {
  dealershipName: string;
  contactName: string;
  phoneNumber: string;
  emailAddress: string;
  city: string;
  state: string;
  licenseNumber: string;
  websiteUrl: string;
  bestContactMethod: ContactMethod;
  vehicleCategories: VehicleCategory[];
  priceRange: string;
  mileagePreference: string;
  titleTolerance: string;
  buyingVolume: string;
  additionalNotes: string;
};

const vehicleCategoryOptions: { value: VehicleCategory; label: string }[] = [
  { value: "cars", label: "Cars" },
  { value: "trucks", label: "Trucks" },
  { value: "suvs", label: "SUVs" },
  { value: "dieselTrucks", label: "Diesel Trucks" },
  { value: "motorcycles", label: "Motorcycles" },
  { value: "campersRVs", label: "Campers/RVs" },
  { value: "trailers", label: "Trailers" },
  { value: "commercialVehicles", label: "Commercial Vehicles" },
  { value: "workTrucks", label: "Work Trucks" },
];

const priceRangeOptions = [
  "Up to $20k",
  "$20k - $40k",
  "$40k - $60k",
  "$60k - $80k",
  "$80k+",
];

const mileageOptions = [
  "Under 50k",
  "50k - 100k",
  "100k - 150k",
  "150k+",
  "Any Mileage",
];

const titleToleranceOptions = [
  "Clean Only",
  "Clean or Salvage",
  "Any Title",
  "Rebuilt Accepted",
];

const buyingVolumeOptions = [
  "1-5 units/mo",
  "6-10 units/mo",
  "11-20 units/mo",
  "21-50 units/mo",
  "50+ units/mo",
];

export default function DealerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      bestContactMethod: "phone",
      vehicleCategories: [],
      priceRange: "Up to $20k",
      mileagePreference: "Under 50k",
      titleTolerance: "Clean Only",
      buyingVolume: "1-5 units/mo",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/dealer-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.message || "Submission failed. Please try again.");
      }

      setSubmitSuccess(true);
      reset();
    } catch (error: unknown) {
      setSubmitError(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
    } finally {
      setIsSubmitting(false);
    }
    console.log("data", data);
  };


  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-500 mb-6">
            Thank you for registering. We'll review your application and reach out soon.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-2xl px-6 py-8 sm:px-10 sm:py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Dealer Registration
          </h1>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Complete the form below to tell us what you actively buy. Approved
            dealers may receive vehicle opportunities that match their criteria.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {/* Row 1: Dealership Name + Contact Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Dealership Name
              </label>
              <input
                {...register("dealershipName", { required: "Required" })}
                placeholder="e.g. Prestige Motors"
                className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                  errors.dealershipName ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                }`}
              />
              {errors.dealershipName && (
                <p className="text-xs text-red-500 mt-1">{errors.dealershipName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Contact Name
              </label>
              <input
                {...register("contactName", { required: "Required" })}
                placeholder="John Doe"
                className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                  errors.contactName ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                }`}
              />
              {errors.contactName && (
                <p className="text-xs text-red-500 mt-1">{errors.contactName.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Phone + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                {...register("phoneNumber", {
                  required: "Required",
                  pattern: { value: /^[\d\s\-().+]+$/, message: "Invalid phone" },
                })}
                placeholder="(555) 000-0000"
                type="tel"
                className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                  errors.phoneNumber ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-xs text-red-500 mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                {...register("emailAddress", {
                  required: "Required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                })}
                placeholder="john@dealership.com"
                type="email"
                className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                  errors.emailAddress ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                }`}
              />
              {errors.emailAddress && (
                <p className="text-xs text-red-500 mt-1">{errors.emailAddress.message}</p>
              )}
            </div>
          </div>

          {/* Row 3: City + State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">City</label>
              <input
                {...register("city", { required: "Required" })}
                className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                  errors.city ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                }`}
              />
              {errors.city && (
                <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">State</label>
              <input
                {...register("state", { required: "Required" })}
                className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                  errors.state ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                }`}
              />
              {errors.state && (
                <p className="text-xs text-red-500 mt-1">{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* Row 4: License + Website */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                License Number
              </label>
              <input
                {...register("licenseNumber", { required: "Required" })}
                className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                  errors.licenseNumber ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                }`}
              />
              {errors.licenseNumber && (
                <p className="text-xs text-red-500 mt-1">{errors.licenseNumber.message}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Website URL
              </label>
              <input
                {...register("websiteUrl")}
                placeholder="https://"
                type="url"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
            </div>
          </div>

          {/* Best Contact Method */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">
              Best Contact Method
            </label>
            <div className="flex flex-wrap gap-4">
              {(["phone", "text", "email"] as ContactMethod[]).map((method) => (
                <label key={method} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={method}
                    {...register("bestContactMethod")}
                    className="w-4 h-4 accent-red-600"
                  />
                  <span className="text-sm text-gray-700 capitalize">{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Vehicle Categories */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">
              Vehicle Categories Interested In
            </label>
            <Controller
              name="vehicleCategories"
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4">
                  {vehicleCategoryOptions.map(({ value, label }) => (
                    <label key={value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={value}
                        checked={field.value.includes(value)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            field.onChange([...field.value, value]);
                          } else {
                            field.onChange(field.value.filter((v) => v !== value));
                          }
                        }}
                        className="w-4 h-4 accent-red-600 rounded"
                      />
                      <span className="text-sm text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              )}
            />
          </div>

          {/* Row 5: Price Range + Mileage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Price Range
              </label>
              <select
                {...register("priceRange")}
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition appearance-none cursor-pointer"
              >
                {priceRangeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Mileage Preference
              </label>
              <select
                {...register("mileagePreference")}
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition appearance-none cursor-pointer"
              >
                {mileageOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 6: Title Tolerance + Buying Volume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Title Tolerance
              </label>
              <select
                {...register("titleTolerance")}
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition appearance-none cursor-pointer"
              >
                {titleToleranceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Buying Volume
              </label>
              <select
                {...register("buyingVolume")}
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition appearance-none cursor-pointer"
              >
                {buyingVolumeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Additional Notes
            </label>
            <textarea
              {...register("additionalNotes")}
              rows={4}
              placeholder="Tell us more about your specific needs..."
              className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition resize-none"
            />
          </div>

          {/* Submit Error */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              <p className="text-sm text-red-600">{submitError}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#C4312C] cursor-pointer shadow-[0_10px_15px_-3px_rgba(161,20,22,0.2),0_4px_6px_-4px_rgba(161,20,22,0.2)] disabled:bg-red-400 text-white font-semibold py-3 rounded-xl text-sm tracking-wide transition-colors duration-200 flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Submitting...
              </>
            ) : (
              "Apply for Access"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}