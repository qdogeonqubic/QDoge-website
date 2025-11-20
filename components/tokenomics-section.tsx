'use client';

import { useEffect, useRef, useState } from 'react';

const IMAGE_BASE_URL = 'https://garthonqubic.com/assets/img/tokenomics';
const QDOGE_TOKEN_ADDRESS = 'QDOGECAQTOKENDUMMYADDRESSHERE';

export function TokenomicsSection() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const { current: bottom } = bottomRef;
    const { current: main } = mainRef;
    const { current: image } = imageRef;
    const observer45 = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('--watcher-view');
          }
        });
      },
      { threshold: 0.45 }
    );
    const observer65 = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('--watcher-view');
          }
        });
      },
      { threshold: 0.65 }
    );

    if (bottom) observer45.observe(bottom);
    if (main) observer45.observe(main);
    if (image) observer65.observe(image);

    return () => {
      observer45.disconnect();
      observer65.disconnect();
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(QDOGE_TOKEN_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {}
  };

  return (
    <div className='page__tokenomics tokenomics'>
      <div className='tokenomics__bg'>
        <picture>
          <source
            media='(min-width: 1920.98px)'
            srcSet={`${IMAGE_BASE_URL}/bg.webp`}
            type='image/webp'
          />
          <source
            media='(min-width: 767.98px)'
            srcSet={`${IMAGE_BASE_URL}/bg-1920.webp`}
            type='image/webp'
          />
          <img
            src={`${IMAGE_BASE_URL}/bg-mob.webp`}
            alt='BG'
            className='w-full h-full object-cover object-top'
          />
        </picture>
      </div>
      <div
        id='tokenomics-section'
        className='tokenomics__bottom relative z-10'
        data-fls-watcher-threshold='0.45'
        data-fls-watcher-once=''
        data-fls-watcher=''
        ref={bottomRef}
      >
        <div
          className='tokenomics__bottom-main'
          data-fls-watcher-threshold='0.45'
          data-fls-watcher-once=''
          data-fls-watcher=''
          ref={mainRef}
        >
          <h2 className='tokenomics__bottom-main-title'>QDoge Tokenomics</h2>
          <ul className='tokenomics__bottom-main-list'>
            <li className='tokenomics__bottom-main-list-item'>
              <div className='tokenomics__bottom-main-list-item-main'>
                <span>Team</span>
                <span>[ 15% ]</span>
              </div>
            </li>
            <li className='tokenomics__bottom-main-list-item'>
              <div className='tokenomics__bottom-main-list-item-main'>
                <span>Airdrop</span>
                <span>[ 15% ]</span>
              </div>
            </li>
            <li className='tokenomics__bottom-main-list-item'>
              <div className='tokenomics__bottom-main-list-item-main'>
                <span>Liquidity Pools</span>
                <span>[ 20% ]</span>
              </div>
            </li>
            <li className='tokenomics__bottom-main-list-item'>
              <div className='tokenomics__bottom-main-list-item-main'>
                <span>Epoch Drops</span>
                <span>[ 20% ]</span>
              </div>
            </li>
            <li className='tokenomics__bottom-main-list-item'>
              <div className='tokenomics__bottom-main-list-item-main'>
                <span>Marketing</span>
                <span>[ 7.5% ]</span>
              </div>
            </li>
            <li className='tokenomics__bottom-main-list-item'>
              <div className='tokenomics__bottom-main-list-item-main'>
                <span>Rewards</span>
                <span>[ 22.5% ]</span>
              </div>
            </li>
          </ul>
          <div className='tokenomics__bottom-main-total'>
            <span>Total Supply:</span>
            <span>[ 21,000,000,000 QDOGE ]</span>
          </div>
          <div className='tokenomics__bottom-main-bottom'>
            <div className='tokenomics__bottom-main-ca'>
              <div className='tokenomics__bottom-main-ca-value'>
                <span id='tokenValue'>{QDOGE_TOKEN_ADDRESS}</span>
              </div>
              <button
                type='button'
                className='tokenomics__bottom-main-ca-button copy-ca-btn button blue'
                onClick={handleCopy}
              >
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                  >
                    <path
                      d='M4.99935 15.833V0.833008H12.4993L17.4993 5.83301V15.833H4.99935ZM11.666 6.66634V2.49967H6.66602V14.1663H15.8327V6.66634H11.666ZM1.66602 19.1663V5.83301H3.33268V17.4997H12.4993V19.1663H1.66602Z'
                      fill='#172A36'
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className='tokenomics__bottom-main-social social'>
              <a
                href='https://x.com/garthonqubic'
                target='_blank'
                className='tokenomics__bottom-main-social-item social-item social-item--blue-border'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <path
                    d='M14.025 3.65625H16.172L11.482 9.03025L17 16.3442H12.68L9.294 11.9093L5.424 16.3442H3.275L8.291 10.5942L3 3.65725H7.43L10.486 7.71025L14.025 3.65625ZM13.27 15.0562H14.46L6.78 4.87725H5.504L13.27 15.0562Z'
                    fill='#74E3FF'
                  />
                </svg>
              </a>
              <a
                href='https://t.me/garthonqubic'
                target='_blank'
                className='tokenomics__bottom-main-social-item social-item social-item--blue-border'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16.4809 3.69164C16.6868 3.60496 16.9122 3.57507 17.1336 3.60507C17.355 3.63507 17.5643 3.72386 17.7398 3.86221C17.9152 4.00056 18.0504 4.1834 18.1312 4.39171C18.212 4.60001 18.2355 4.82617 18.1992 5.04664L16.3092 16.5108C16.1259 17.6166 14.9125 18.2508 13.8984 17.7C13.05 17.2391 11.79 16.5291 10.6567 15.7883C10.09 15.4175 8.3542 14.23 8.56754 13.385C8.75087 12.6625 11.6675 9.94747 13.3342 8.3333C13.9884 7.69914 13.69 7.3333 12.9175 7.91664C10.9992 9.36497 7.9192 11.5675 6.90087 12.1875C6.00254 12.7341 5.5342 12.8275 4.9742 12.7341C3.95254 12.5641 3.00504 12.3008 2.2317 11.98C1.1867 11.5466 1.23754 10.11 2.23087 9.69164L16.4809 3.69164Z'
                    fill='#74E3FF'
                  />
                </svg>
              </a>
              <a
                href='https://discord.gg/Pryekk4akE'
                target='_blank'
                className='tokenomics__bottom-main-social-item social-item social-item--blue-border'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <path
                    d='M6.81117 3.04742C6.14853 3.16032 5.07081 3.43355 4.36817 3.66613C3.85306 3.83548 3.09291 4.13129 3.0329 4.18548C2.96038 4.24871 2.47778 4.95323 2.22773 5.35968C0.982479 7.37613 0.309842 9.29548 0.0422877 11.6032C-0.0227255 12.17 -0.010223 14.1481 0.0622918 14.5681C0.0797954 14.6674 0.172314 14.7374 0.814945 15.1213C2.0902 15.889 3.27545 16.4219 4.67073 16.8555L5.13332 17L5.19084 16.9368C5.37587 16.7335 5.88098 15.9997 6.09352 15.6226C6.15353 15.5165 6.21354 15.4194 6.22605 15.4035C6.25355 15.3719 6.22855 15.3584 5.9835 15.2726C5.71844 15.1777 5.11582 14.9135 4.81076 14.76L4.5382 14.6223L4.61072 14.5748C4.65073 14.5477 4.74325 14.4845 4.81576 14.4303L4.94579 14.3355L5.06581 14.3897C5.28836 14.4913 6.05851 14.7577 6.45859 14.8729C7.73635 15.2387 8.9341 15.3945 10.2544 15.3674C11.4896 15.3426 12.4973 15.1845 13.6926 14.83C14.0501 14.7239 14.7378 14.4777 14.9528 14.3784L15.0478 14.3355L15.2354 14.471C15.3404 14.5432 15.4279 14.611 15.4304 14.6177C15.4454 14.6494 14.6378 15.031 14.2102 15.1935C14.0726 15.2455 13.9126 15.3087 13.8526 15.3313L13.7451 15.3719L13.8876 15.6158C14.1402 16.0448 14.4927 16.5619 14.7528 16.8803L14.8478 16.9977L15.3654 16.8397C16.0781 16.6184 16.5481 16.44 17.3358 16.0855C18.2135 15.6926 19.0162 15.2545 19.7038 14.7939C19.9188 14.6494 19.9213 14.6494 19.9363 14.5319C20.0014 14.0035 20.0214 12.7503 19.9738 12.0887C19.7763 9.3271 18.8686 6.86581 17.1583 4.4542L16.9482 4.16065L16.6307 4.03194C15.713 3.66839 14.7103 3.36581 13.6976 3.14903C13.38 3.08355 12.9124 3 12.8474 3C12.7899 3 12.6799 3.17387 12.4523 3.61871C12.3648 3.79258 12.2823 3.94613 12.2698 3.95742C12.2598 3.96871 12.1122 3.96194 11.9172 3.93936C11.2271 3.86258 11.0895 3.85581 10.2844 3.84226C9.29917 3.82645 8.89659 3.84678 7.86638 3.96194L7.72385 3.97774L7.57882 3.69774C7.49881 3.54419 7.38128 3.32742 7.31877 3.21452C7.18124 2.97516 7.19374 2.97968 6.81117 3.04742ZM6.9987 8.88C8.444 9.15774 8.9566 11.0094 7.87138 12.039C7.57882 12.319 7.23875 12.4681 6.79616 12.5132C6.59362 12.5335 6.52861 12.5313 6.36358 12.4974C5.65343 12.3529 5.09082 11.7997 4.93328 11.0861C4.87577 10.831 4.89328 10.3523 4.96829 10.1265C5.14083 9.60258 5.5059 9.19613 5.9885 8.9929C6.31106 8.85516 6.66364 8.81678 6.9987 8.88ZM13.6351 8.88226C13.7476 8.90032 13.9201 8.95452 14.0451 9.00871C14.2252 9.08774 14.3002 9.13968 14.5002 9.32032C14.7028 9.50548 14.7553 9.56871 14.8553 9.75161C15.0453 10.1016 15.0854 10.2642 15.0854 10.6887C15.0854 11.0026 15.0778 11.0726 15.0253 11.2306C14.8553 11.7523 14.5077 12.1497 14.0351 12.3619C13.545 12.581 13.0799 12.581 12.5848 12.3597C12.2773 12.2219 11.9397 11.9035 11.7647 11.5919C11.5896 11.2758 11.4996 10.7881 11.5471 10.4335C11.6371 9.79677 12.0322 9.26387 12.6098 9.00419C12.9424 8.85516 13.26 8.81677 13.6351 8.88226Z'
                    fill='#74E3FF'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className='tokenomics__bottom-image'
          data-fls-watcher-threshold='0.65'
          data-fls-watcher-once=''
          data-fls-watcher=''
          ref={imageRef}
        >
          <div className='tokenomics__bottom-image-top'>
            <img src={`${IMAGE_BASE_URL}/bottom-image-top.svg`} alt='TOP' />
          </div>
          <div className='tokenomics__bottom-image-main'>
            <img src={`${IMAGE_BASE_URL}/bottom-image-main.webp`} alt='QDoge' />
          </div>
        </div>
      </div>
    </div>
  );
}
