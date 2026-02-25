import { Link } from "wouter";
import { SiLinkedin } from "react-icons/si";
import logoImg from "@/assets/nuovoconnect-logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 mb-12">
          <div className="lg:flex-1">
            <div className="flex items-center gap-2 mb-5">
              <img src={logoImg} alt="NuovoConnect" className="w-[36px] h-[36px] object-contain" />
              <span className="text-[1.9rem] tracking-tight text-white" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 900 }}>
                NuovoConnect
              </span>
            </div>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-6" data-testid="text-footer-description">
              Worldwide B2B platform for digital value services, mobile top-ups, incentives, and connectivity solutions. Activate. Grow. Engage. Reward.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/nuovoconnect" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all" data-testid="link-linkedin">
                <SiLinkedin size={16} />
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Who We Serve</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><Link href="/who-we-serve/retail-networks" className="hover:text-white transition-colors cursor-pointer">Retail Networks</Link></li>
                <li><Link href="/who-we-serve/mobile-operators" className="hover:text-white transition-colors cursor-pointer">Mobile Operators</Link></li>
                <li><Link href="/who-we-serve/ewallets" className="hover:text-white transition-colors cursor-pointer">eWallets</Link></li>
                <li><Link href="/who-we-serve/banking" className="hover:text-white transition-colors cursor-pointer">Relocation Providers</Link></li>
                <li><Link href="/who-we-serve/money-transfer-operators" className="hover:text-white transition-colors cursor-pointer">Money Transfer Operators</Link></li>
                <li><Link href="/who-we-serve/super-apps" className="hover:text-white transition-colors cursor-pointer">Super Apps</Link></li>
                <li><Link href="/who-we-serve/creator-economy" className="hover:text-white transition-colors cursor-pointer">Creator Economy</Link></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4 text-sm pt-[2.125rem]">
                <li><Link href="/products" className="hover:text-white transition-colors cursor-pointer font-semibold text-white uppercase tracking-wider">Products</Link></li>
                <li><Link href="/network" className="hover:text-white transition-colors cursor-pointer font-semibold text-white uppercase tracking-wider">Network</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors cursor-pointer font-semibold text-white uppercase tracking-wider">SOLUTIONS</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer font-semibold text-white uppercase tracking-wider">CONTACT</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NuovoConnect. All Rights Reserved.</p>
          <div className="flex gap-6 flex-wrap">
            <Link href="/privacy-policy" className="hover:text-gray-300 cursor-pointer" data-testid="link-privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-gray-300 cursor-pointer" data-testid="link-terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
