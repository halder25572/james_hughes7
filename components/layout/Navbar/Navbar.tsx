"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ← Add this import
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ← Get current URL path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/howItWorks" },
    { name: "Seller Upside", href: "/SellerUpsides" },
    { name: "What We Buy", href: "/whatWeBuy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-25">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative">
            <Image src="/images/logo.png" alt="VintoCash Logo" width={137} height={0} />
          </div>
          <span className="text-[30px] font-bold tracking-tight text-gray-900">
            <span className="text-[#D93E39]">Vinto</span>Cash
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden gap-12 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[16px] font-medium transition-colors ${
                    isActive
                      ? "text-[#D93E39] font-semibold" // Active: red color + bold
                      : "text-[#6D717F] hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 px-6 py-5 text-base font-medium rounded-full shadow-md transition-all"
            >
              <Link href="/getAOffer">Get A Offer</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85%] sm:w-95 pr-0">
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setOpen(false)}
                >
                  <div className="relative">
                    <Image src="/images/logo.png" alt="VintoCash Logo" width={137} height={0} />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    <span className="text-[#D93E39]">Vinto</span>Cash
                  </span>
                </Link>

                <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                  {/* You can uncomment this if you add X icon import */}
                  {/* <X className="h-6 w-6" /> */}
                </Button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-6 text-lg">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`font-medium text-center transition-colors ${
                        isActive
                          ? "text-[#D93E39] font-semibold"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Mobile CTA */}
                <div className="mt-6">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-base font-medium rounded-full shadow-md"
                  >
                    <Link href="/getAOffer" onClick={() => setOpen(false)}>
                      Get A Offer
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}