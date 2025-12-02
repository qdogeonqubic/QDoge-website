'use client';

import { MagicCard } from '@/components/ui/magic-card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react';

const stepData = [
  {
    id: 1,
    title: 'Register',
    description:
      'Register your Qubic wallet and X account with Zealy to enter the Kennel.',
    image: '/qdoge_sit.webp',
  },
  {
    id: 2,
    title: 'Fetch',
    description:
      'Every week, Kennel trainees fetch a required amount of QDOGE from the market.',
    image: '/qdoge_stand_pose.webp',
  },
  {
    id: 3,
    title: 'Stay',
    description:
      'Hold your QDOGE. Positive balance, no panic dumping – obedience over noise.',
    image: '/qdoge_run.webp',
  },
  {
    id: 4,
    title: 'Bark',
    description:
      'Post on X, amplify the mission, and make QDoge echo across the crypto space.',
    image: '/qdoge_bark.webp',
  },
];

const KennelClubSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedStep, setSelectedStep] = useState(stepData[0]);

  const animation = useScrollAnimation({
    animationType: 'mainAnim2',
    threshold: 0.2,
  });

  useLayoutEffect(() => {
    if (sectionRef.current) animation.elementRef(sectionRef.current);
  }, [animation]);

  return (
    <section
      id='kennel-club'
      ref={sectionRef}
      className={`relative py-20 lg:py-28 overflow-hidden ${animation.animationClass}`}
    >
      <div
        className='absolute inset-0 bg-center bg-cover opacity-40'
        style={{ backgroundImage: "url('/kennel_club.jpeg')" }}
        aria-hidden='true'
      />
      <div className='absolute inset-0 bg-linear-to-tr from-black via-black/70 to-cyan-900/40' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <MagicCard className='border-2 border-cyan-400/60 bg-black/70 backdrop-blur-md shadow-[0_0_60px_rgba(6,182,212,0.3)]'>
        <div className='border-b border-cyan-400/40 p-4 bg-cyan-400/10'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <span className='text-cyan-400 font-mono text-sm uppercase tracking-wider'>
                    56-Week Training Program
                  </span>
                </div>
              </div>
            </div>
          <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 p-8 lg:p-12'>
            <div className='space-y-6'>
              <h2 className='text-3xl lg:text-4xl font-black text-white font-mono'>
                QDoge Kennel Club
              </h2>
              <p className='text-cyan-100/80 font-mono text-sm leading-relaxed'>
                The Top 100 trainees, 56 weeks, exponentially declining
                requirements. The ones who fetch, stay, and bark without fail
                become the elite Doge miners.
              </p>
              <p className='text-cyan-100/80 font-mono text-sm leading-relaxed'>
                The Kennel Club is QDoge&apos;s core training ground. Top 100
                wallets enter a 56-week discipline arc. Each week the required
                fetch amount and the rewards both decline so the earliest, most
                obedient trainees earn the fattest treats.
              </p>
              <p className='text-cyan-100/80 font-mono text-sm leading-relaxed'>
                Trainees register their wallet on Zealy, follow weekly
                instructions, and let the smart obedience do the talking when
                Doge mining begins.
              </p>
            </div>

            <div className='flex flex-col gap-6'>
              <div className='grid grid-cols-4 gap-3'>
                {stepData.map((step) => (
                  <button
                    key={step.id}
                    type='button'
                    className={`py-3 rounded-lg border text-sm font-mono font-black transition-all ${
                      step.id === selectedStep.id
                        ? 'border-cyan-400 bg-cyan-400/20 text-white shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                        : 'border-cyan-400/30 text-cyan-200 hover:border-cyan-400/70 hover:bg-cyan-400/10'
                    }`}
                    onClick={() => setSelectedStep(step)}
                  >
                    STEP {step.id}
                  </button>
                ))}
              </div>

              <div className='relative flex-1 border border-cyan-400/40 bg-black/80 rounded-2xl overflow-hidden'>
                <div className='relative z-10 flex flex-col md:flex-row'>
                  <div className='flex-1 p-6 space-y-3'>
                    <p className='text-cyan-300 font-mono text-xs tracking-[0.3em] uppercase'>
                      Step {selectedStep.id}
                    </p>
                    <h3 className='text-2xl font-black text-white font-mono'>
                      {selectedStep.title}
                    </h3>
                    <p className='text-cyan-100/80 font-mono text-sm leading-relaxed'>
                      {selectedStep.description}
                    </p>
                  </div>
                  <div className='relative w-full h-48 md:w-64 md:h-auto min-h-[260px] border-t md:border-t-0'>
                    <Image
                      src={selectedStep.image}
                      alt={`${selectedStep.title} illustration`}
                      fill
                      sizes='(max-width: 1024px) 100vw, 50vw'
                      className='object-cover'
                      priority={selectedStep.id === 1}
                    />
                    <div className='absolute inset-0 bg-linear-to-tr from-black/40 via-black/10 to-transparent' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MagicCard>
      </div>
    </section>
  );
};

export default KennelClubSection;


