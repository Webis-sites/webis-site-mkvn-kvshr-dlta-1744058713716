'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="מכון כושר דלתא"
          fill
          priority
          className="object-cover object-center brightness-50"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-white md:px-8">
        <div className="max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            מכון כושר מוביל בישראל
          </h1>
          <p className="mb-8 text-lg md:text-xl lg:text-2xl">
            חווית לקוח מושלמת בכל ביקור
          </p>
          <button
            onClick={onCtaClick}
            className="transform rounded-lg bg-primary px-8 py-3 text-lg font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 md:text-xl"
          >
            קבע תור עכשיו
          </button>
        </div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
}