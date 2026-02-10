import {
  Car,
  Truck,
  Bike,
  Mountain,
  Caravan,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { icon: Car, title: "Cars" },
  { icon: Truck, title: "Trucks & SUVs" },
  { icon: Bike, title: "Motorcycles" },
  { icon: Mountain, title: "ATVs & Power Sports" },
  { icon: Caravan, title: "Campers & RVs" },
  { icon: Package, title: "Commercial Assets" },
];

export default function WhatWeBuy() {
  return (
    <section className=" py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-2xl font-semibold">
          WHAT WE BUY
        </h2>

        <p className="mt-2 text-gray-500 text-[20px] md:text-base">
          From everyday vehicles to specialized commercial assets
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl py-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition"
              >
                <Icon
                  className="text-[#D93E39] mb-3"
                  size={40}
                />
                <p className="text-sm text-[#6D717F]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-8">
          <Button
            variant="outline"
            className="rounded-full mt-9 py-2.5 px-6 border-[#D93E39] text-red-500"
          >
            See Full List
          </Button>
        </div>

      </div>
    </section>
  );
}
