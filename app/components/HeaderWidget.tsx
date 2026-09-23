'use client';
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

export default function HeaderWidget() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname()

  const headerNav = (pathname ===  "/resources") ? " " :

    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white font-bold">
            A
          </div>

          <span className="text-lg font-semibold tracking-tight">
            Akauntbook
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            About
          </Link>

          <Link
            href="/about/mark"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            About Mark
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            Pricing
          </Link>

          <Link href="/resources" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black">
            Resources
            <ChevronDown size={15} />
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black"
          >
            Log in
          </a>

          <a
            href="/signup"
            className="group flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Get started
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <a href="#product">Product</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>

            <div className="mt-3 flex flex-col gap-3 border-t pt-5">
              <a href="/login">Log in</a>

              <a
                href="/signup"
                className="rounded-full bg-black px-5 py-3 text-center text-white"
              >
                Get started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>;

    return headerNav;


    
  
}
