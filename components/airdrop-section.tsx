/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef } from 'react';

const IMAGE_BASE_URL = 'https://garthonqubic.com/assets/img/airdrop';

export function AirdropSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('--watcher-view');
          }
        });
      },
      { threshold: 0.55 }
    );

    const refs = [containerRef.current, mainRef.current, timerRef.current];

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id='airdrop-section' className='airdrop'>
      {/* Background */}
      <div className='airdrop__bg'>
        <img
          src='/airdrop.jpeg'
          alt='Airdrop Background'
          className='w-full h-full object-cover'
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        />
      </div>

      {/* Container */}
      <div ref={containerRef} className='airdrop__container'>
        {/* Main Content */}
        <div ref={mainRef} className='airdrop__main'>
          <div className='airdrop__main-label'>
            <img
              src={`${IMAGE_BASE_URL}/timer-icon.svg`}
              alt='Icon'
              className='shrink-0'
            />
            <span>QDOGE KENNEL CLUB AIRDROP</span>
            <img
              src={`${IMAGE_BASE_URL}/timer-icon.svg`}
              alt='Icon'
              className='shrink-0'
            />
          </div>
          <h2 className='airdrop__main-title'>
            Join the Kennel Club: Train for Dogecoin Mining with QDOGE!
          </h2>
          {/* <div className='airdrop__main-buttons'>
            <a
              href='https://zealy.io/cw/qdoge'
              target='_blank'
              rel='noopener noreferrer'
              className='airdrop__main-button button blue'
            >
              <span>register wallet for training & rewards</span>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <rect width='20' height='20' fill='#6FE2FF' />
                  <path
                    d='M10 0.625C5.51992 0.625 1.875 4.26992 1.875 8.75V14.798L5.07812 16.0797L5.7375 19.375H7.5V16.875H8.75V19.375H9.375V16.875H10.625V19.375H11.25V16.875H12.5V19.375H14.2625L14.9219 16.0797L18.125 14.798V8.75C18.125 4.26992 14.4801 0.625 10 0.625ZM6.5625 13.125C6.12985 13.125 5.70692 12.9967 5.34719 12.7563C4.98746 12.516 4.70708 12.1743 4.54151 11.7746C4.37595 11.3749 4.33263 10.9351 4.41703 10.5107C4.50144 10.0864 4.70978 9.69663 5.0157 9.3907C5.32163 9.08478 5.71141 8.87644 6.13574 8.79203C6.56007 8.70763 6.99991 8.75095 7.39962 8.91651C7.79933 9.08208 8.14097 9.36246 8.38134 9.72219C8.62171 10.0819 8.75 10.5049 8.75 10.9375C8.74938 11.5175 8.51871 12.0735 8.10861 12.4836C7.69851 12.8937 7.14247 13.1244 6.5625 13.125ZM8.57461 15.625L9.53125 12.5H10.4688L11.4254 15.625H8.57461ZM13.4375 13.125C13.0049 13.125 12.5819 12.9967 12.2222 12.7563C11.8625 12.516 11.5821 12.1743 11.4165 11.7746C11.2509 11.3749 11.2076 10.9351 11.292 10.5107C11.3764 10.0864 11.5848 9.69663 11.8907 9.3907C12.1966 9.08478 12.5864 8.87644 13.0107 8.79203C13.4351 8.70763 13.8749 8.75095 14.2746 8.91651C14.6743 9.08208 15.016 9.36246 15.2563 9.72219C15.4967 10.0819 15.625 10.5049 15.625 10.9375C15.6244 11.5175 15.3937 12.0735 14.9836 12.4836C14.5735 12.8937 14.0175 13.1244 13.4375 13.125Z'
                    fill='#172A36'
                  />
                </svg>
              </span>
            </a>
            <a href='#' className='airdrop__main-button button blue-border'>
              <span>Weekly Kennel Airdrop</span>
            </a>
            <a href='#' className='airdrop__main-button button blue-border'>
              <span>Epoch Bark Rewards</span>
            </a>
          </div> */}
          <div
            className='airdrop__main-lore'
            style={{
              marginTop: '2rem',
              fontSize: '1rem',
              color: '#74e3ff',
              textShadow: '0 0 10px #172A36, 0 0 4px #53d7ff', // Added text shadow for easy reading
            }}
          >
            <p style={{ textShadow: '0 0 10px #172A36, 0 0 4px #53d7ff' }}>
              <b>QDOGE</b> is a futuristic AI Shiba Inu, sidekick to QXMR
              Pac-Man Miner and guide for Qubic&rsquo;s Dogecoin quest.
              <br />
              Trained by Anna&apos;s blueprint and forged in AIGARTH,
              QDOGE&rsquo;s Kennel Club prepares you for the biggest mining
              frontier yet: <b>Dogecoin</b>.<br />
            </p>
            <ul
              style={{
                marginTop: '1em',
                marginBottom: '1em',
                paddingLeft: '1.3em',
                color: '#74e3ff',
                textShadow: '0 0 10px #172A36, 0 0 4px #53d7ff',
              }}
            >
              <li>
                <b>&ldquo;Fetch&rdquo;</b> - Buy required amount of QDOGE weekly
              </li>
              <li>
                <b>&ldquo;Stay&rdquo;</b> - Hold tokens in your wallet
              </li>
              <li>
                <b>&ldquo;Bark&rdquo;</b> - Post on X to earn bonus treats
              </li>
            </ul>
            <p style={{ textShadow: '0 0 10px #172A36, 0 0 4px #53d7ff' }}>
              Obedience earns you weekly airdrops, social rewards, and a spot
              among QDOGE&rsquo;s most faithful when Doge mining begins.
            </p>
            <p style={{ textShadow: '0 0 10px #172A36, 0 0 4px #53d7ff' }}>
              <b>
                Members who train for all 56 weeks get maximum rewards.
                <br />
                The Kennel Club is open &ndash; become a QDOGE Trainee!
              </b>
            </p>
          </div>
        </div>

        {/* Timer */}
        <div ref={timerRef} className='airdrop__timer'>
          <div className='airdrop__timer-main'>
            <div className='airdrop__timer-main-bg'>
              <img
                src={`${IMAGE_BASE_URL}/timer-bg.svg`}
                alt='BG'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='airdrop__timer-main-top'>
              <img
                src={`${IMAGE_BASE_URL}/timer-icon.svg`}
                alt='Icon'
                className='shrink-0'
              />
              <span>TRAINING EPOCH COUNTDOWN:</span>
            </div>
            <div className='airdrop__timer-main-value' id='timer-box'>
              1:1:13:13:06
            </div>
          </div>
          <div className='airdrop__timer-bottom'>
            <img
              src={`${IMAGE_BASE_URL}/timer-icon.svg`}
              alt='Icon'
              className='shrink-0'
            />
            <span>FETCH - STAY - BARK</span>
            <img
              src={`${IMAGE_BASE_URL}/timer-icon.svg`}
              alt='Icon'
              className='shrink-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
