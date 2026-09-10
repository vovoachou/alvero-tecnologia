'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark' | 'simple';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light';
  const isSimple = variant === 'simple';

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Alvero Icon matching Favicon */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <Image
          src="/icon.png"
          alt="Alvero Tecnologia"
          width={40}
          height={40}
          className="w-full h-full object-contain rounded-xl"
          priority
        />
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
