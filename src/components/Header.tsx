import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-white/85 hidden sm:block">
            Your Trusted Building & Civil Experts
          </p>
          <a
            href="tel:0868447778"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-accent transition-colors ml-auto"
          >
            <Phone className="h-3.5 w-3.5 flex-shrink-0" />
            <span>086 844 7778</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="MSC Building & Civil"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 relative ${
                    isActive
                      ? "text-accent border-b-2 border-accent pb-[7px]"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Button
              asChild
              className="bg-accent text-accent-foreground px-7 py-3 font-bold rounded-lg shadow-lg hover:opacity-90 transition-all duration-200 text-sm tracking-wide"
            >
              <a href="tel:0868447778" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Get a Free Quote
              </a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2.5 rounded-lg text-foreground hover:text-accent hover:bg-muted transition-all duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-1.5">
            {navLinks.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-accent bg-accent/10 border-l-4 border-accent pl-3"
                      : "text-foreground hover:text-accent hover:bg-muted"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border mt-3">
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground font-bold rounded-lg shadow-lg hover:opacity-90 transition-all duration-200 py-3 text-sm tracking-wide"
              >
                <a
                  href="tel:0868447778"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  086 844 7778 — Call Now
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}