// components/Navbar.tsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import Image from "next/image";

// export default function Navbar() {
//     const [open, setOpen] = useState(false);

//     const navLinks = [
//         { name: "Home", href: "/" },
//         { name: "How It Works", href: "/how-it-works" },
//         { name: "Seller Upside", href: "/seller-upside" },
//         { name: "What We Buy", href: "/what-we-buy" },
//     ];

//     return (
//         <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
//             <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
//                 {/* Logo */}
//                 <Link href="/" className="flex items-center gap-2.5">
//                     <div className="relative">
//                         <Image src="/images/logo.png" alt="VintoCash Logo" width={137} height={0} />
//                     </div>
//                     <span className="text-[30px] font-bold tracking-tight text-gray-900">
//                         <span className="text-[#D93E39]">Vinto</span>Cash
//                     </span>
//                 </Link>

//                 <div className="flex items-center gap-6">
//                     {/* Desktop Navigation */}
//                     <nav className="hidden gap-12 md:flex">
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 href={link.href}
//                                 className="text-[16px] font-medium text-[#6D717F] transition-colors hover:text-gray-900"
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </nav>

//                     {/* Desktop CTA Button */}
//                     <div className="hidden md:block">
//                         <Button
//                             asChild
//                             size="lg"
//                             className="bg-red-600 hover:bg-red-700 px-6 py-5 text-base font-medium rounded-full shadow-md transition-all"
//                         >
//                             <Link href="/get-offer">Get A Offer</Link>
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden">
//                     <Sheet open={open} onOpenChange={setOpen}>
//                         <SheetTrigger asChild>
//                             <Button variant="ghost" size="icon" className="h-10 w-10">
//                                 <Menu className="h-6 w-6" />
//                                 <span className="sr-only">Open menu</span>
//                             </Button>
//                         </SheetTrigger>

//                         <SheetContent side="right" className="w-[85%] sm:w-100 pr-0">
//                             <div className="flex items-center justify-between mb-8">
//                                 <Link
//                                     href="/"
//                                     className="flex items-center gap-2.5"
//                                     onClick={() => setOpen(false)}
//                                 >
//                                     <div className="relative h-8 w-10">
//                                         {/* Same SVG as above */}
//                                         <svg
//                                             viewBox="0 0 40 24"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="h-8 w-10"
//                                         >
//                                             <path
//                                                 d="M4 18C4 19.1046 4.89543 20 6 20H34C35.1046 20 36 19.1046 36 18V12C36 10.8954 35.1046 10 34 10H6C4.89543 10 4 10.8954 4 12V18Z"
//                                                 fill="#111827"
//                                             />
//                                             <path
//                                                 d="M8 14C8 15.1046 8.89543 16 10 16C11.1046 16 12 15.1046 12 14C12 12.8954 11.1046 12 10 12C8.89543 12 8 12.8954 8 14Z"
//                                                 fill="white"
//                                             />
//                                             <path
//                                                 d="M28 14C28 15.1046 28.8954 16 30 16C31.1046 16 32 15.1046 32 14C32 12.8954 31.1046 12 30 12C28.8954 12 28 12.8954 28 14Z"
//                                                 fill="white"
//                                             />
//                                             <path d="M6 8H34L36 12H4L6 8Z" fill="#EF4444" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-2xl font-bold text-gray-900">
//                                         VintoCash
//                                     </span>
//                                 </Link>

//                                 <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     onClick={() => setOpen(false)}
//                                 >
//                                     {/* <X className="h-6 w-6" /> */}
//                                 </Button>
//                             </div>

//                             {/* Mobile Links */}
//                             <nav className="flex flex-col gap-6 text-lg">
//                                 {navLinks.map((link) => (
//                                     <Link
//                                         key={link.name}
//                                         href={link.href}
//                                         className="font-medium text-center text-gray-700 hover:text-gray-900 transition-colors"
//                                         onClick={() => setOpen(false)}
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 ))}

//                                 {/* Mobile CTA */}
//                                 <div className="mt-6">
//                                     <Button
//                                         asChild
//                                         size="lg"
//                                         className="w-full bg-red-600 hover:bg-red-700 text-base font-medium rounded-full shadow-md"
//                                     >
//                                         <Link href="/get-offer" onClick={() => setOpen(false)}>
//                                             Get A Offer
//                                         </Link>
//                                     </Button>
//                                 </div>
//                             </nav>
//                         </SheetContent>
//                     </Sheet>
//                 </div>
//             </div>
//         </header>
//     );
// }

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
    { name: "Seller Upside", href: "/seller-upside" },
    { name: "What We Buy", href: "/what-we-buy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
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
              <Link href="/get-offer">Get A Offer</Link>
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
                    <Link href="/get-offer" onClick={() => setOpen(false)}>
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