import { BUSINESS_INFO } from '../data/services';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-base font-bold text-white">
            {BUSINESS_INFO.name}
          </p>
          <p className="text-xs text-white/60 mt-1">
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-[#E5E5E5]">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="hover:text-[#BDCA6E] transition-colors tabular-nums"
          >
            {BUSINESS_INFO.phoneDisplay}
          </a>
          <span className="hidden sm:inline text-white/25" aria-hidden="true">
            ·
          </span>
          <a
            href={BUSINESS_INFO.emailHref}
            className="hover:text-[#BDCA6E] transition-colors break-all sm:break-normal"
          >
            {BUSINESS_INFO.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
