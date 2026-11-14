import { Award, CarFront, MapPin, Star, Users } from 'lucide-react';
import { BUSINESS_INFO, MEDIA_ASSETS } from '../data/services';
import { ResilientImage } from './ResilientImage';

const TRUST_POINTS = [
  {
    icon: Users,
    title: '1–2 man specialist team',
    detail:
      'Focused, unhurried craftsmanship from the same experienced hands on every visit.',
  },
  {
    icon: Award,
    title: 'Years of experience',
    detail:
      'Proven care across daily drivers, prestige bodywork, commercial fleets, and tourers.',
  },
  {
    icon: Star,
    title: `${BUSINESS_INFO.recommendRate} Recommend (${BUSINESS_INFO.reviewsCount} reviews)`,
    detail:
      'Trusted by repeat customers who rely on punctual arrival and spotless attention to detail.',
  },
  {
    icon: MapPin,
    title: 'Mobile service – we come to you',
    detail:
      'Convenient driveway or workplace valeting so your schedule stays completely uninterrupted.',
  },
  {
    icon: CarFront,
    title: 'Fully equipped for cars, vans & caravans',
    detail:
      'Self-contained mobile setup carrying onboard water, power, and safe pH-neutral chemistry.',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#161616] border-y border-white/10 py-20 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        {/* Left Column: About Prose & Trust Points */}
        <div className="lg:col-span-6 min-w-0 flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-[#BDCA6E] mb-2">
              About Luxury Approved Valeting Ltd
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Why Drivers Trust Our Mobile Team
            </h2>
            <p className="text-base text-[#E5E5E5] leading-relaxed mb-8">
              Mobile valeting and detailing with years of experience. From small valets to full detailed valets, ceramic protected coatings, caravan cleanings, jet washing and more — we offer practical, high-standard packages for everyone.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {TRUST_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="py-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#BDCA6E]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#E5E5E5]/85 mt-1 leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Balanced Mobile Unit Showcase */}
        <div className="lg:col-span-6 min-w-0 flex">
          <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] min-h-[340px]">
            <ResilientImage
              src={MEDIA_ASSETS.mobileSetup}
              alt="Luxury Approved Valeting mobile detailing van parked beside an SUV on a residential driveway"
              fallbackLabel="Fully Equipped Mobile Valeting Unit"
              className="w-full h-full lg:h-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"
            />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <p className="font-display text-lg font-bold text-white">
                Self-Contained Mobile Workshop
              </p>
              <p className="text-sm text-[#E5E5E5] mt-1">
                Onboard purified water, power &amp; pro-grade detailing gear at your home or workplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
