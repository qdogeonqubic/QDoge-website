 'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      id='hero'
      className='relative min-h-[80vh] lg:min-h-screen overflow-hidden flex items-center'
    >
      {/* Background image */}
      <div className='absolute inset-0 -z-10'>
        <img
          src='/kennel_club.jpeg'
          alt='QDOGE Kennel Club Background'
          className='h-full w-full object-cover'
        />
        {/* Dark + neon overlays for readability */}
        <div className='absolute inset-0 bg-linear-to-b from-black/85 via-black/50 to-black/95' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(0,243,255,0.25),transparent_60%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(188,19,254,0.25),transparent_60%)]' />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16'>
          {/* Left: Title + description */}
          <div className='space-y-6 text-center lg:text-left font-mono'>
            <p className='inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-black/70 px-4 py-1 text-[11px] tracking-[0.28em] uppercase text-cyan-300'>
              <span className='h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse' />
              QDOGE PROTOCOL
            </p>

            <img
              src='/main-text.png'
              alt='QDOGE AI CYBER SHIBA TRAINER'
              className='w-full max-w-2xl mx-auto lg:mx-0 h-auto drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]'
            />

            <p className='max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-cyan-100/85 leading-relaxed font-bold'>
              Sent from the future by Anna, QDoge is the AI robotic Shiba Inu
              that scouts Dogecoin, trains Qubic miners, and rewards the most
              obedient with generational treats.
            </p>
          </div>

          {/* Right: Dog image */}
          <div className='flex justify-center lg:justify-end'>
            <div className='relative w-full max-w-sm rounded-2xl border border-cyan-400/60 bg-black/60 backdrop-blur-md shadow-[0_0_45px_rgba(34,211,238,0.5)] overflow-hidden'>
              <div className='absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_0%,rgba(0,243,255,0.25),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(188,19,254,0.25),transparent_55%)]' />
              <img
                src='/qdoge_bark.webp'
                alt='QDOGE Barking Cyber Shiba'
                className='relative z-10 w-full h-full object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


