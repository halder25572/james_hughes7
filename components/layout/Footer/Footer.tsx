// components/Footer.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">VintoCash</h3>
            <p className="text-sm leading-relaxed">
              Operated by VintoCash.NY
              <br />
              Motor Vehicle Dealer, Licensed Dealer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/howItWorks" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/seller-update" className="hover:text-white transition-colors">
                  Seller Update
                </Link>
              </li>
              <li>
                <Link href="/whatWeBuy" className="hover:text-white transition-colors">
                  What We Buy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col items-start md:items-end justify-center">
            <Button
              size="lg"
              className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-8 py-6 text-base font-medium rounded-full shadow-lg transition-all"
            >
              Get an Offer
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p className="text-gray-500">
              demore@vintocash.com
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-gray-500">
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms & conditions
              </Link>
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}