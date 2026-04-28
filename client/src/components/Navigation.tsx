import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/nuovoconnect-logo.png";

const industrySubPages = [
  { name: "Overview", href: "/who-we-serve", bold: true },
  { name: "Retail Merchants", href: "/who-we-serve/retail-merchants" },
  { name: "Telecommunications", href: "/who-we-serve/telecommunications" },
  { name: "eWallets", href: "/who-we-serve/ewallets" },
  { name: "Relocation Providers", href: "/who-we-serve/banking" },
  { name: "Forex", href: "/who-we-serve/forex" },
  { name: "Super Apps", href: "/who-we-serve/super-apps" },
  { name: "Gaming", href: "/who-we-serve/gaming" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serveOpen, setServeOpen] = useState(false);
  const [mobileServeOpen, setMobileServeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServeOpen(false);
    setMobileServeOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Who We Serve", href: "/who-we-serve", hasDropdown: true },
    { name: "Products", href: "/products" },
    { name: "Network", href: "/network" },
  ];

  return (
    <header 
      data-testid="navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer shrink-0" data-testid="link-home">
            <img
              src={logoImg}
              alt="NuovoConnect"
              className="w-[36px] h-[36px] object-contain"
              style={{ filter: "hue-rotate(220deg) saturate(0.95)" }}
            />
            <span
              className="text-[1.9rem] tracking-tight text-foreground"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                WebkitTextStroke: "0.5px currentColor",
              }}
            >
              NuovoConnect
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.name} className="relative" ref={dropdownRef}>
                <button
                  data-testid="button-serve-dropdown"
                  className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                    location === "/who-we-serve" || industrySubPages.some(s => location === s.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setServeOpen(!serveOpen)}
                >
                  {link.name}
                  <ChevronDown size={14} className={`transition-transform ${serveOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl shadow-xl border border-border/50 py-2 transition-all ${
                    serveOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {industrySubPages.map((sub) => (
                    <Link key={sub.href} href={sub.href}>
                      <span
                        className={`block px-4 py-2.5 text-sm cursor-pointer transition-colors text-center ${
                          sub.bold ? "font-bold" : ""
                        } ${
                          location === sub.href ? "text-primary bg-orange-50/50" : "text-muted-foreground hover:text-foreground hover:bg-orange-50/50"
                        }`}
                        data-testid={`link-serve-${sub.href.split('/').pop()}`}
                      >
                        {sub.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className={`text-sm font-medium transition-colors cursor-pointer ${
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}>
                  {link.name}
                </span>
              </Link>
            )
          ))}
          <Link href="/contact">
            <Button data-testid="button-contact-nav" className="btn-gradient rounded-full px-6">
              Contact Us
            </Button>
          </Link>
        </nav>

        <button
          data-testid="button-mobile-menu"
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-4 lg:hidden shadow-xl max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    className={`text-base font-medium py-2 border-b border-border/50 w-full text-left flex items-center justify-between ${
                      location === "/who-we-serve" || industrySubPages.some(s => location === s.href) ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setMobileServeOpen(!mobileServeOpen)}
                  >
                    {link.name}
                    <ChevronDown size={16} className={`transition-transform ${mobileServeOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServeOpen && (
                    <div className="pl-4 py-1">
                      {industrySubPages.map((sub) => (
                        <Link key={sub.href} href={sub.href}>
                          <span
                            className={`block py-2 text-sm cursor-pointer ${
                              location === sub.href ? "text-primary" : "text-muted-foreground"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} href={link.href}>
                  <span
                    className={`text-base font-medium py-2 border-b border-border/50 block cursor-pointer ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </span>
                </Link>
              )
            ))}
            <Link href="/contact">
              <Button className="btn-gradient w-full mt-2 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
