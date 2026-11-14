import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO, MEDIA_ASSETS } from '../data/services';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0A0A0A] border-b border-white/10"
    >
      {/* Full-bleed atmospheric detailing backdrop */}
      <div className="absolute inset-0">
        <ResilientImage
          src={MEDIA_ASSETS.hero}
          alt="Obsidian black luxury coupe finished with mirror gloss paintwork by Luxury Approved Valeting"
          loading="eager"
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-14 md:pt-28 md:pb-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#BDCA6E] tracking-wide mb-4">
            Mobile Valeting &amp; Detailing
          </p>

          <h1
            className="font-display font-bold tracking-tight text-white leading-[1.06] mb-5"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.15rem)',
              textWrap: 'balance',
            }}
          >
            Luxury Mobile Valeting &amp; Detailing
          </h1>

          <p className="text-base sm:text-lg text-[#E5E5E5] leading-relaxed max-w-xl mb-8">
            Professional results at your doorstep. From quick valets to full ceramic coatings.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-base font-semibold rounded-lg bg-[#BDCA6E] text-[#0A0A0A] hover:bg-[#cdd982] active:scale-[0.98] transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Book a Valet
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-base font-semibold rounded-lg border border-white/30 text-white hover:border-[#BDCA6E] hover:text-[#BDCA6E] transition-colors duration-200 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#BDCA6E]" aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* Direct Phone Number Callout */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm sm:text-base text-[#E5E5E5]">
            <span className="text-white/60">Direct mobile booking line:</span>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="font-semibold text-white hover:text-[#BDCA6E] underline decoration-[#BDCA6E]/60 underline-offset-4 transition-colors duration-200 tabular-nums"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Full-Width Quantitative Proof Strip */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <p className="font-display text-2xl sm:text-3xl font-bold text-[#BDCA6E] tabular-nums">
              100%
            </p>
            <p className="text-sm text-[#E5E5E5] mt-1">Client recommendation rate</p>
          </div>
          <div>
            <p className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
              164 Reviews
            </p>
            <p className="text-sm text-[#E5E5E5] mt-1">Verified local feedback</p>
          </div>
          <div>
            <p className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
              1–2 Man Team
            </p>
            <p className="text-sm text-[#E5E5E5] mt-1">Dedicated specialist care</p>
          </div>
          <div>
            <p className="font-display text-2xl sm:text-3xl font-bold text-white">
              Fully Mobile
            </p>
            <p className="text-sm text-[#E5E5E5] mt-1">Cars, vans &amp; caravans</p>
          </div>
        </div>
      </div>
    </section>
  );
}
