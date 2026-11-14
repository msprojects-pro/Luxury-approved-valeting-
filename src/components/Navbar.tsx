import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleBookClick = () => {
    setMobileMenuOpen(false);
    onBookClick();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/92 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-base sm:text-xl font-bold tracking-tight text-white whitespace-nowrap truncate min-w-0 hover:text-[#BDCA6E] transition-colors duration-200"
        >
          {BUSINESS_INFO.shortName}
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#E5E5E5]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#BDCA6E] transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#BDCA6E] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleBookClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#BDCA6E] text-[#0A0A0A] hover:bg-[#cdd982] active:scale-[0.98] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-[#E5E5E5] hover:border-[#BDCA6E] hover:text-[#BDCA6E] transition-colors duration-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-white/10 px-4 py-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-3 text-base font-medium text-[#E5E5E5] hover:text-[#BDCA6E] hover:bg-white/5 rounded-lg transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleBookClick}
              className="mt-2 w-full py-3 px-4 text-base font-semibold rounded-lg bg-[#BDCA6E] text-[#0A0A0A] hover:bg-[#cdd982] transition-colors duration-150 cursor-pointer"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
