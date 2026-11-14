import { useState } from 'react';
import { ArrowUpRight, Check, Droplets, Sparkles, ShieldCheck, Caravan, Waves, Disc } from 'lucide-react';
import { SERVICES, type ServiceCategory, type ServicePackage } from '../data/services';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const CATEGORY_FILTERS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Packages' },
  { id: 'valeting', label: 'Valeting & Paint' },
  { id: 'specialist', label: 'Caravans & Jet Wash' },
];

function getServiceIcon(id: string) {
  switch (id) {
    case 'ceramic-coatings':
      return ShieldCheck;
    case 'full-detail':
      return Sparkles;
    case 'exterior-valet':
      return Droplets;
    case 'machine-polishing':
      return Disc;
    case 'caravan-cleaning':
      return Caravan;
    case 'jet-washing':
    default:
      return Waves;
  }
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');

  const visibleServices =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeFilter);

  return (
    <section
      id="services"
      className="bg-[#0A0A0A] py-20 md:py-24 px-4 sm:px-6"
    >
      {/* Anchor for the Packages navigation link inside the same section */}
      <span id="packages" className="sr-only" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header & Interactive Package Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#BDCA6E] mb-2">
              Tailored Mobile Packages
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Our Services
            </h2>
            <p className="text-base text-[#E5E5E5] mt-3 leading-relaxed">
              From quick maintenance valets to full detailed restorations, ceramic protected coatings, caravan cleanings, and jet washing. Packages for everyone.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter service packages"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#161616] border border-white/10 rounded-lg self-start lg:self-auto max-w-full"
          >
            {CATEGORY_FILTERS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#BDCA6E] text-[#0A0A0A] font-semibold'
                      : 'text-[#E5E5E5] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => onSelectService(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: ServicePackage;
  onSelect: () => void;
}

function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const Icon = getServiceIcon(service.id);

  return (
    <article className="group min-w-0 flex flex-col justify-between bg-[#161616] border border-white/10 hover:border-[#BDCA6E]/60 rounded-xl overflow-hidden transition-colors duration-200">
      <div>
        {service.image && (
          <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10">
            <ResilientImage
              src={service.image}
              alt={service.imageAlt || service.title}
              fallbackLabel={service.title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-70"
            />
          </div>
        )}

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="font-display text-sm font-semibold text-[#BDCA6E] tabular-nums">
              {service.number}.
            </span>
            <Icon className="w-5 h-5 text-[#BDCA6E] shrink-0" aria-hidden="true" />
          </div>

          <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2.5">
            {service.title}
          </h3>

          <p className="text-sm text-[#E5E5E5]/90 leading-relaxed mb-5">
            {service.summary}
          </p>

          <ul className="space-y-2.5 border-t border-white/10 pt-4">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[#E5E5E5]">
                <Check className="w-4 h-4 text-[#BDCA6E] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 flex items-center justify-between gap-3 border-t border-white/5 mt-auto min-w-0">
        <span className="text-xs text-white/60 truncate min-w-0">{service.idealFor}</span>
        <button
          type="button"
          onClick={onSelect}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BDCA6E] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer py-1"
        >
          Book Service
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
