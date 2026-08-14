'use client';

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'simple';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light';
  const isSimple = variant === 'simple';

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Accurate Alvero A Symbol based on provided images */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main A - Right Side (Gradient) */}
          <path
            d="M50 10L90 90H65L50 55L50 10Z"
            fill="url(#logo-gradient-blue)"
          />
          {/* Main A - Left Side (Navy) */}
          <path
            d="M50 10L10 90H35L50 55L50 10Z"
            fill="#0B1320"
          />
          {/* Integrated Arrow (Blue Gradient) */}
          <path
            d="M25 90L45 50L55 70L40 70L40 90H25Z"
            fill="url(#logo-gradient-arrow)"
          />
          
          <defs>
            <linearGradient id="logo-gradient-blue" x1="50" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#149BFF" />
            </linearGradient>
            <linearGradient id="logo-gradient-arrow" x1="25" y1="90" x2="55" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#149BFF" />
              <stop offset="1" stopColor="#00C2A8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {!isSimple && (
        <div className="flex flex-col">
          <span className={`text-2xl font-semibold tracking-[0.16em] font-poppins leading-none ${isLight ? 'text-white' : 'text-navy'}`}>
            ALVERO
          </span>
          <span className={`text-[10px] font-medium tracking-[0.32em] font-poppins mt-1.5 ${isLight ? 'text-bright-blue/90' : 'text-primary-blue'}`}>
            TECNOLOGIA
          </span>
        </div>
      )}
    </div>
  );
}
