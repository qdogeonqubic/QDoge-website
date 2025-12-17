'use client';

import React from 'react';
import { Marquee } from './ui/marquee';

const items = [
  "IT'S A DOG'S WORLD",
  'THE YARD AWAITS',
  'THE REVOLUTION HAS BEGUN',
  'QDOGE PROTOCOL INITIALIZED',
  'THE PACK IS READY',
  'JOIN THE KENNEL',
  'KENNEL CLUB',
  '52 WEEK TRAINING PROGRAM',
  'FETCH • STAY • BARK',
  'PREPARE FOR DOGECOIN MINING',
];

const MarqueeBanner: React.FC = () => {
  return (
    <div className='relative w-full border-y border-cyan-400/60 bg-black/90 overflow-hidden'>
      <div className='pointer-events-none absolute inset-0 bg-linear-to-r from-cyan-500/20 via-sky-400/10 to-transparent' />
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan-300/60 blur-sm' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-px bg-cyan-300/60 blur-sm' />

      <div className='relative z-10 flex items-center gap-4 px-4 sm:px-6 lg:px-10 py-3 bg-black/60 backdrop-blur'>
        <div className='hidden sm:flex items-center gap-2 pr-4 border-r border-cyan-400/40'>
          <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
          <span className='text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-cyan-200'>
            Kennel Broadcast
          </span>
        </div>

        <Marquee className='[--duration:32s] [--gap:3rem]'>
          <div className='flex items-center gap-10'>
            {items.map((text, idx) => (
              <React.Fragment key={text + idx}>
                <span className='text-cyan-100 text-xs sm:text-sm md:text-base font-black uppercase whitespace-nowrap tracking-[0.2em]'>
                  {text}
                </span>
                <span className='text-cyan-300 text-lg md:text-xl font-black'>
                  •
                </span>
              </React.Fragment>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeBanner;

