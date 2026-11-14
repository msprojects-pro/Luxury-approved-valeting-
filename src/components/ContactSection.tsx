import { useEffect, useState, type FormEvent } from 'react';
import { Check, CheckCircle2, Copy, Mail, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, VEHICLE_TYPES } from '../data/services';

interface ContactSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

interface FormState {
  name: string;
  phone: string;
  vehicleType: string;
  preferredService: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export function ContactSection({ selectedService, onServiceChange }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    vehicleType: VEHICLE_TYPES[0],
    preferredService: selectedService || SERVICES[0].title,
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedBooking, setSubmittedBooking] = useState<FormState | null>(null);
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, preferredService: selectedService }));
    }
  }, [selectedService]);

  const handleCopy = async (value: string, field: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts; clickable links still work
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }
    const cleanPhone = form.phone.replace(/[\s()-]/g, '');
    if (!cleanPhone || !/^\+?\d{9,15}$/.test(cleanPhone)) {
      nextErrors.phone = 'Please enter a valid phone number (e.g. 07498 033738).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedBooking({ ...form });
  };

  const buildMailtoHref = (booking: FormState) => {
    const subject = encodeURIComponent(
      `Valeting Quote Request: ${booking.preferredService} (${booking.vehicleType})`
    );
    const body = encodeURIComponent(
      `Name: ${booking.name}\nPhone: ${booking.phone}\nVehicle Type: ${booking.vehicleType}\nPreferred Service: ${booking.preferredService}\nNotes: ${booking.notes || 'None provided'}`
    );
    return `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#0A0A0A] py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-[#BDCA6E] mb-2">
            Direct Mobile Enquiries
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Book Your Valet or Request a Quote
          </h2>
          <p className="text-base text-[#E5E5E5] mt-3 leading-relaxed">
            Share your vehicle type and preferred service below. Our 1–2 man team will confirm availability and a clear quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Booking Form */}
          <div className="lg:col-span-7 min-w-0 bg-[#161616] border border-white/10 rounded-xl p-5 sm:p-8">
            {submittedBooking ? (
              <div className="h-full flex flex-col justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-[#BDCA6E] font-medium text-sm mb-3">
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    <span>Enquiry Prepared</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Thank you, {submittedBooking.name}
                  </h3>
                  <p className="text-sm text-[#E5E5E5] leading-relaxed mb-6">
                    Your booking details for <strong className="text-white">{submittedBooking.preferredService}</strong> ({submittedBooking.vehicleType}) are ready. Send them directly via email or call us for immediate scheduling.
                  </p>

                  <dl className="divide-y divide-white/10 border-y border-white/10 text-sm">
                    <div className="py-3 flex justify-between gap-4">
                      <dt className="text-white/60">Phone</dt>
                      <dd className="text-white font-medium tabular-nums">{submittedBooking.phone}</dd>
                    </div>
                    <div className="py-3 flex justify-between gap-4">
                      <dt className="text-white/60">Vehicle Type</dt>
                      <dd className="text-white font-medium">{submittedBooking.vehicleType}</dd>
                    </div>
                    <div className="py-3 flex justify-between gap-4">
                      <dt className="text-white/60">Service</dt>
                      <dd className="text-[#BDCA6E] font-semibold">{submittedBooking.preferredService}</dd>
                    </div>
                    {submittedBooking.notes && (
                      <div className="py-3 flex justify-between gap-4">
                        <dt className="text-white/60">Notes</dt>
                        <dd className="text-[#E5E5E5] text-right">{submittedBooking.notes}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={buildMailtoHref(submittedBooking)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-[#BDCA6E] text-[#0A0A0A] hover:bg-[#cdd982] transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    Send Enquiry via Email
                  </a>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg border border-white/25 text-white hover:border-[#BDCA6E] hover:text-[#BDCA6E] transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 text-[#BDCA6E]" aria-hidden="true" />
                    Call {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedBooking(null);
                      setForm({
                        name: '',
                        phone: '',
                        vehicleType: VEHICLE_TYPES[0],
                        preferredService: selectedService || SERVICES[0].title,
                        notes: '',
                      });
                    }}
                    className="px-4 py-3 text-sm font-medium text-[#E5E5E5] hover:text-white transition-colors cursor-pointer"
                  >
                    New Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="booking-name" className="block text-sm font-medium text-[#E5E5E5] mb-2">
                      Name
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/15 text-white placeholder:text-white/40 focus:border-[#BDCA6E] focus:outline-none transition-colors text-sm"
                    />
                    {errors.name && (
                      <p className="text-xs text-amber-300 mt-1.5" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="booking-phone" className="block text-sm font-medium text-[#E5E5E5] mb-2">
                      Phone
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="+44 7XXX XXXXXX"
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/15 text-white placeholder:text-white/40 focus:border-[#BDCA6E] focus:outline-none transition-colors text-sm tabular-nums"
                    />
                    {errors.phone && (
                      <p className="text-xs text-amber-300 mt-1.5" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="booking-vehicle" className="block text-sm font-medium text-[#E5E5E5] mb-2">
                      Vehicle type
                    </label>
                    <select
                      id="booking-vehicle"
                      value={form.vehicleType}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, vehicleType: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/15 text-white focus:border-[#BDCA6E] focus:outline-none transition-colors text-sm"
                    >
                      {VEHICLE_TYPES.map((vehicle) => (
                        <option key={vehicle} value={vehicle}>
                          {vehicle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="booking-service" className="block text-sm font-medium text-[#E5E5E5] mb-2">
                      Preferred service
                    </label>
                    <select
                      id="booking-service"
                      value={form.preferredService}
                      onChange={(e) => {
                        const value = e.target.value;
                        setForm((prev) => ({ ...prev, preferredService: value }));
                        onServiceChange(value);
                      }}
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/15 text-white focus:border-[#BDCA6E] focus:outline-none transition-colors text-sm"
                    >
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Custom / Multiple Vehicles">
                        Custom / Multiple Vehicles
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-notes" className="block text-sm font-medium text-[#E5E5E5] mb-2">
                    Location &amp; vehicle details <span className="text-white/50">(optional)</span>
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
                    placeholder="Postcode, preferred day, or condition notes..."
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/15 text-white placeholder:text-white/40 focus:border-[#BDCA6E] focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-[#BDCA6E] text-[#0A0A0A] hover:bg-[#cdd982] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Get a Quote / Book Now
                </button>
              </form>
            )}
          </div>

          {/* Right: Business Contact Details */}
          <aside className="lg:col-span-5 min-w-0 bg-[#161616] border border-white/10 rounded-xl p-5 sm:p-8 flex flex-col justify-between gap-8">
            <div className="min-w-0">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Direct Contact Details
              </h3>
              <p className="text-sm text-[#E5E5E5]/85 leading-relaxed mb-6">
                Prefer to speak directly or send photos of your vehicle? Call or email our mobile team anytime.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#0A0A0A] border border-white/10 min-w-0">
                  <div className="flex items-center justify-between gap-3 min-w-0">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <Phone className="w-5 h-5 text-[#BDCA6E] shrink-0" aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-white/60">Phone</p>
                        <a
                          href={BUSINESS_INFO.phoneHref}
                          className="text-base font-semibold text-white hover:text-[#BDCA6E] transition-colors tabular-nums block truncate"
                        >
                          {BUSINESS_INFO.phoneDisplay}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(BUSINESS_INFO.phoneDisplay, 'phone')}
                      aria-label="Copy phone number"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-white/15 text-[#E5E5E5] hover:border-[#BDCA6E] hover:text-[#BDCA6E] transition-colors shrink-0 cursor-pointer"
                    >
                      {copiedField === 'phone' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#BDCA6E]" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#0A0A0A] border border-white/10 min-w-0">
                  <div className="flex items-center justify-between gap-3 min-w-0">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <Mail className="w-5 h-5 text-[#BDCA6E] shrink-0" aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-white/60">Email</p>
                        <a
                          href={BUSINESS_INFO.emailHref}
                          className="text-sm sm:text-base font-semibold text-white hover:text-[#BDCA6E] transition-colors block truncate"
                        >
                          {BUSINESS_INFO.email}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(BUSINESS_INFO.email, 'email')}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-white/15 text-[#E5E5E5] hover:border-[#BDCA6E] hover:text-[#BDCA6E] transition-colors shrink-0 cursor-pointer"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#BDCA6E]" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-[#E5E5E5]">
                <ShieldCheck className="w-4 h-4 text-[#BDCA6E] shrink-0" aria-hidden="true" />
                <span className="tabular-nums">
                  {BUSINESS_INFO.recommendRate} Recommend across {BUSINESS_INFO.reviewsCount} reviews
                </span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Mobile 1–2 man specialist team equipped for cars, vans, and caravans at your home or workplace.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
