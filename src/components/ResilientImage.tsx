import { useState } from 'react';
import { Car } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Luxury Approved Valeting',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] border border-white/10 text-[#E5E5E5] p-6 ${className}`}
      >
        <Car className="w-8 h-8 text-[#BDCA6E] mb-2" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide text-[#E5E5E5]/80 text-center">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
