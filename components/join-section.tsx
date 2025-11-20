/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef } from 'react';

const DOMAIN = 'https://garthonqubic.com';

export default function JoinSection() {
  const mainRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

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

    const refs = [mainRef.current, bottomRef.current];

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className='page__join join'>
      <div className='join__top'>
        <picture>
          <source
            media='(min-width: 1920.98px)'
            srcSet={`${DOMAIN}/assets/img/join/top.webp`}
            type='image/webp'
          />
          <source
            media='(min-width: 767.98px)'
            srcSet={`${DOMAIN}/assets/img/join/top-1920.webp`}
            type='image/webp'
          />
          <img
            data-fls-image-ignore=''
            alt='TOP'
            src={`${DOMAIN}/assets/img/join/top-mob.webp`}
          />
        </picture>
      </div>
      <div className='join__bg'>
        <picture>
          <source
            media='(min-width: 1920.98px)'
            srcSet={`${DOMAIN}/assets/img/join/bg.webp`}
            type='image/webp'
          />
          <source
            media='(min-width: 767.98px)'
            srcSet={`${DOMAIN}/assets/img/join/bg-1920.webp`}
            type='image/webp'
          />
          <img
            data-fls-image-ignore=''
            alt='TOP'
            src={`${DOMAIN}/assets/img/join/bg-mob.webp`}
          />
        </picture>
      </div>
      <div className='join__container'>
        <div ref={mainRef} className='join__main'>
          <h2 className='join__title'>
            <span
              style={{
                color: '#74e3ff',
                textShadow: 'none',
                fontWeight: 'bold',
                fontSize: '3.5rem',
                lineHeight: 1.1,
              }}
            >
              QDOGE
            </span>
            <br />
            <span
              style={{
                color: '#fff',
                textShadow: 'none',
                letterSpacing: '0.04em',
                fontWeight: 700,
                fontSize: '2.3rem',
                lineHeight: 1.1,
              }}
            >
              BUILT ON{' '}
              <span
                style={{
                  color: '#74e3ff',
                  textShadow: 'none',
                  fontSize: '2.7rem',
                  lineHeight: 1.1,
                  fontWeight: 800,
                }}
              >
                QUBIC
              </span>
            </span>
          </h2>
          <div className='join__actions'>
            <a
              href='#'
              data-fls-scrollto='.how'
              className='join__button button black'
            >
              <span className='text'>buy now</span>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 23 23'
                  fill='none'
                >
                  <path
                    d='M11.2988 1.13184C6.41543 1.13184 2.44238 5.10488 2.44238 9.98827V16.5808L5.93386 17.9778L6.6526 21.5698H8.57376V18.8447H9.93629V21.5698H10.6176V18.8447H11.9801V21.5698H12.6613V18.8447H14.0239V21.5698H15.945L16.6638 17.9778L20.1553 16.5808V9.98827C20.1553 5.10488 16.1822 1.13184 11.2988 1.13184ZM7.55186 14.7571C7.08027 14.7571 6.61927 14.6173 6.22715 14.3553C5.83503 14.0933 5.52941 13.7209 5.34894 13.2852C5.16847 12.8495 5.12125 12.3701 5.21326 11.9075C5.30526 11.445 5.53235 11.0201 5.86582 10.6867C6.19929 10.3532 6.62415 10.1261 7.08669 10.0341C7.54922 9.94208 8.02865 9.9893 8.46434 10.1698C8.90004 10.3502 9.27244 10.6559 9.53444 11.048C9.79645 11.4401 9.93629 11.9011 9.93629 12.3727C9.93561 13.0049 9.68418 13.611 9.23716 14.058C8.79014 14.505 8.18405 14.7564 7.55186 14.7571ZM9.74511 17.4822L10.7879 14.0759H11.8098L12.8525 17.4822H9.74511ZM15.0458 14.7571C14.5742 14.7571 14.1132 14.6173 13.7211 14.3553C13.3289 14.0933 13.0233 13.7209 12.8428 13.2852C12.6624 12.8495 12.6152 12.3701 12.7072 11.9075C12.7992 11.445 13.0263 11.0201 13.3597 10.6867C13.6932 10.3532 14.1181 10.1261 14.5806 10.0341C15.0431 9.94208 15.5226 9.9893 15.9583 10.1698C16.3939 10.3502 16.7663 10.6559 17.0283 11.048C17.2904 11.4401 17.4302 11.9011 17.4302 12.3727C17.4295 13.0049 17.1781 13.611 16.7311 14.058C16.284 14.505 15.678 14.7564 15.0458 14.7571Z'
                    fill='white'
                  ></path>
                </svg>
              </span>
            </a>
            <div className='join__social social'>
              <a
                href='https://t.me/garthonqubic'
                target='_blank'
                rel='noopener noreferrer'
                className='join__social-item social-item social-item--black'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 23 23'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18.608 4.56422C18.8325 4.46974 19.0782 4.43716 19.3195 4.46986C19.5608 4.50256 19.789 4.59934 19.9802 4.75015C20.1715 4.90095 20.3188 5.10025 20.4069 5.32731C20.4949 5.55437 20.5205 5.80089 20.481 6.0412L18.4209 18.5374C18.221 19.7428 16.8985 20.434 15.793 19.8336C14.8683 19.3313 13.4949 18.5574 12.2595 17.7499C11.6418 17.3456 9.74974 16.0512 9.98228 15.1302C10.1821 14.3426 13.3613 11.3832 15.1781 9.62374C15.8911 8.93249 15.5659 8.53372 14.7239 9.16957C12.6329 10.7483 9.27558 13.1491 8.16557 13.8249C7.18637 14.4208 6.67588 14.5225 6.06546 14.4208C4.95182 14.2354 3.91903 13.9484 3.07608 13.5987C1.937 13.1263 1.99241 11.5603 3.07517 11.1044L18.608 4.56422Z'
                    fill='white'
                  ></path>
                </svg>
              </a>
              <a
                href='https://x.com/garthonqubic'
                target='_blank'
                rel='noopener noreferrer'
                className='join__social-item social-item social-item--black'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='23'
                  viewBox='0 0 22 23'
                  fill='none'
                >
                  <path
                    d='M15.3328 4.52539H17.6731L12.5609 10.3832L18.5756 18.3556H13.8667L10.1759 13.5213L5.95752 18.3556H3.61506L9.08262 12.088L3.31531 4.52648H8.14411L11.4752 8.94434L15.3328 4.52539ZM14.5098 16.9516H15.807L7.43559 5.85631H6.04472L14.5098 16.9516Z'
                    fill='white'
                  ></path>
                </svg>
              </a>
              <a
                href='https://discord.gg/Pryekk4akE'
                target='_blank'
                rel='noopener noreferrer'
                className='join__social-item social-item social-item--black'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 23 23'
                  fill='none'
                >
                  <path
                    d='M8.02182 3.05468C7.29293 3.18371 6.10743 3.49597 5.33453 3.76178C4.76791 3.95533 3.93174 4.29339 3.86573 4.35533C3.78596 4.42759 3.2551 5.23275 2.98005 5.69726C1.61027 8.00178 0.870367 10.1953 0.576058 12.8327C0.504543 13.4805 0.518296 15.7411 0.598062 16.2211C0.617316 16.3347 0.719087 16.4147 1.42598 16.8534C2.82877 17.7308 4.13253 18.3398 5.66734 18.8353L6.1762 19.0005L6.23946 18.9282C6.443 18.696 6.99862 17.8573 7.23241 17.4263C7.29843 17.305 7.36444 17.194 7.37819 17.176C7.40845 17.1398 7.38094 17.1244 7.11139 17.0263C6.81983 16.9179 6.15694 16.616 5.82138 16.4405L5.52156 16.2831L5.60133 16.2289C5.64534 16.1979 5.74711 16.1256 5.82688 16.0637L5.96991 15.9553L6.10193 16.0173C6.34673 16.1334 7.19391 16.4379 7.634 16.5695C9.03953 16.9876 10.357 17.1656 11.8093 17.1347C13.1681 17.1063 14.2766 16.9256 15.5914 16.5205C15.9847 16.3992 16.7411 16.1179 16.9776 16.0044L17.0822 15.9553L17.2885 16.1102C17.404 16.1927 17.5003 16.2702 17.503 16.2779C17.5195 16.314 16.6311 16.7502 16.1607 16.936C16.0095 16.9953 15.8334 17.0676 15.7674 17.0934L15.6491 17.1398L15.8059 17.4186C16.0837 17.9089 16.4715 18.4998 16.7576 18.8637L16.8621 18.9979L17.4315 18.8173C18.2154 18.5644 18.7325 18.3605 19.5989 17.9553C20.5644 17.5063 21.4473 17.0056 22.2037 16.4792C22.4403 16.314 22.443 16.314 22.4595 16.1798C22.531 15.576 22.553 14.1437 22.5008 13.3876C22.2835 10.2315 21.285 7.41855 19.4036 4.66242L19.1726 4.32694L18.8233 4.17984C17.8138 3.76436 16.7108 3.41855 15.5969 3.17081C15.2475 3.09597 14.7332 3.00049 14.6617 3.00049C14.5984 3.00049 14.4774 3.1992 14.2271 3.70759C14.1308 3.90629 14.04 4.08178 14.0263 4.09468C14.0153 4.10758 13.853 4.09984 13.6385 4.07404C12.8793 3.98629 12.728 3.97855 11.8424 3.96307C10.7586 3.945 10.3158 3.96823 9.18256 4.09984L9.02578 4.11791L8.86625 3.79791C8.77823 3.62242 8.64895 3.37468 8.58019 3.24565C8.42891 2.9721 8.44266 2.97726 8.02182 3.05468ZM8.22812 9.72049C9.81794 10.0379 10.3818 12.154 9.18806 13.3308C8.86625 13.6508 8.49217 13.8211 8.00532 13.8727C7.78253 13.896 7.71101 13.8934 7.52947 13.8547C6.74831 13.6895 6.12944 13.0573 5.95615 12.2418C5.89289 11.9502 5.91214 11.4031 5.99466 11.145C6.18445 10.5463 6.58603 10.0818 7.11689 9.84952C7.47171 9.6921 7.85954 9.64823 8.22812 9.72049ZM15.5281 9.72307C15.6519 9.74371 15.8417 9.80565 15.9792 9.86759C16.1772 9.95791 16.2598 10.0173 16.4798 10.2237C16.7026 10.4353 16.7604 10.5076 16.8704 10.7166C17.0794 11.1166 17.1234 11.3024 17.1234 11.7876C17.1234 12.1463 17.1152 12.2263 17.0574 12.4069C16.8704 13.0031 16.488 13.4573 15.9682 13.6998C15.4291 13.9502 14.9175 13.9502 14.3729 13.6973C14.0345 13.5398 13.6632 13.176 13.4707 12.8198C13.2781 12.4586 13.1791 11.9011 13.2314 11.496C13.3304 10.7682 13.765 10.1592 14.4004 9.86242C14.7662 9.6921 15.1155 9.64823 15.5281 9.72307Z'
                    fill='white'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div ref={bottomRef} className='join__bottom'>
          <div className='join__bottom-top'>
            <picture>
              <source
                media='(min-width: 767.98px)'
                srcSet={`${DOMAIN}/assets/img/join/bottom-top.svg`}
                type='image/svg+xml'
              />
              <img
                alt='TOP'
                src={`${DOMAIN}/assets/img/join/bottom-top-mob.svg`}
              />
            </picture>
          </div>
          <div className='join__bottom-body'>
            <div className='join__bottom-body-top'>
              <div className='join__bottom-body-top-menu'>
                <div className='join__bottom-body-top-menu-column'>
                  <a
                    href='#'
                    data-fls-scrollto='.about'
                    data-fls-scrollto-top-mob='10'
                    data-fls-scrollto-top-pc='40'
                    className='join__bottom-body-top-menu-item'
                    data-fls-scrollto-top='40'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='18'
                      viewBox='0 0 14 18'
                      fill='none'
                    >
                      <path
                        d='M3.67531 17.3327L4.50865 11.4993H0.34198L7.84198 0.666016H9.50865L8.67531 7.33268H13.6753L5.34198 17.3327H3.67531Z'
                        fill='#C2F4FF'
                      ></path>
                    </svg>
                    <span>About QDoge</span>
                  </a>
                  <a
                    href='#'
                    data-fls-scrollto='.how'
                    className='join__bottom-body-top-menu-item'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='18'
                      viewBox='0 0 14 18'
                      fill='none'
                    >
                      <path
                        d='M3.67531 17.3327L4.50865 11.4993H0.34198L7.84198 0.666016H9.50865L8.67531 7.33268H13.6753L5.34198 17.3327H3.67531Z'
                        fill='#C2F4FF'
                      ></path>
                    </svg>
                    <span>How to QDoge</span>
                  </a>
                </div>
                <div className='join__bottom-body-top-menu-column'>
                  <a
                    href='#'
                    data-fls-scrollto='.tokenomics__bottom'
                    data-fls-scrollto-top-mob='60'
                    data-fls-scrollto-top-pc='70'
                    className='join__bottom-body-top-menu-item'
                    data-fls-scrollto-top='70'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='18'
                      viewBox='0 0 14 18'
                      fill='none'
                    >
                      <path
                        d='M3.67531 17.3327L4.50865 11.4993H0.34198L7.84198 0.666016H9.50865L8.67531 7.33268H13.6753L5.34198 17.3327H3.67531Z'
                        fill='#C2F4FF'
                      ></path>
                    </svg>
                    <span>Tokenomics</span>
                  </a>
                  <a
                    href='#'
                    data-fls-scrollto='.community'
                    data-fls-scrollto-top-mob='10'
                    data-fls-scrollto-top-pc='60,20'
                    className='join__bottom-body-top-menu-item'
                    data-fls-scrollto-top='28.33'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='18'
                      viewBox='0 0 14 18'
                      fill='none'
                    >
                      <path
                        d='M3.67531 17.3327L4.50865 11.4993H0.34198L7.84198 0.666016H9.50865L8.67531 7.33268H13.6753L5.34198 17.3327H3.67531Z'
                        fill='#C2F4FF'
                      ></path>
                    </svg>
                    <span>Community</span>
                  </a>
                </div>
                <div className='join__bottom-body-top-menu-column'>
                  <a
                    href='#'
                    data-fls-scrollto='.airdrop'
                    data-fls-scrollto-top-mob='40'
                    data-fls-scrollto-top-pc='80,-160'
                    className='join__bottom-body-top-menu-item'
                    data-fls-scrollto-top='-110.00'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='18'
                      viewBox='0 0 14 18'
                      fill='none'
                    >
                      <path
                        d='M3.67531 17.3327L4.50865 11.4993H0.34198L7.84198 0.666016H9.50865L8.67531 7.33268H13.6753L5.34198 17.3327H3.67531Z'
                        fill='#C2F4FF'
                      ></path>
                    </svg>
                    <span>Airdrop</span>
                  </a>
                  <a
                    href='/whitepaper'
                    className='join__bottom-body-top-menu-item'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='18'
                      viewBox='0 0 14 18'
                      fill='none'
                    >
                      <path
                        d='M3.67531 17.3327L4.50865 11.4993H0.34198L7.84198 0.666016H9.50865L8.67531 7.33268H13.6753L5.34198 17.3327H3.67531Z'
                        fill='#C2F4FF'
                      ></path>
                    </svg>
                    <span>Whitepaper</span>
                  </a>
                </div>
              </div>
              <div className='join__bottom-body-top-actions'>
                <div
                  className='join__bottom-body-top-actions-social'
                  data-fls-dynamic='.join__bottom-body-bottom-top-mobile, 767.98,1'
                >
                  <a
                    href='https://t.me/QDogeCoin'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='join__bottom-body-top-actions-social-item'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M19.7867 4.42997C20.0338 4.32596 20.3043 4.29008 20.57 4.32608C20.8356 4.36208 21.0868 4.46863 21.2974 4.63465C21.5079 4.80067 21.6701 5.02008 21.767 5.27005C21.864 5.52002 21.8922 5.79141 21.8487 6.05597L19.5807 19.813C19.3607 21.14 17.9047 21.901 16.6877 21.24C15.6697 20.687 14.1577 19.835 12.7977 18.946C12.1177 18.501 10.0347 17.076 10.2907 16.062C10.5107 15.195 14.0107 11.937 16.0107 9.99997C16.7957 9.23897 16.4377 8.79997 15.5107 9.49997C13.2087 11.238 9.51266 13.881 8.29066 14.625C7.21266 15.281 6.65066 15.393 5.97866 15.281C4.75266 15.077 3.61566 14.761 2.68766 14.376C1.43366 13.856 1.49466 12.132 2.68666 11.63L19.7867 4.42997Z'
                        fill='#C2F4FF'
                      ></path>
                    </svg>
                  </a>
                  <a
                    href='https://x.com/QDogeCoin'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='join__bottom-body-top-actions-social-item'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M16.8396 4.3877H19.416L13.788 10.8365L20.4096 19.6133H15.2256L11.1624 14.2913L6.51842 19.6133H3.93962L9.95882 12.7133L3.60962 4.3889H8.92562L12.5928 9.2525L16.8396 4.3877ZM15.9336 18.0677H17.3616L8.14562 5.8529H6.61442L15.9336 18.0677Z'
                        fill='#C2F4FF'
                      ></path>
                    </svg>
                  </a>
                  <a
                    href='https://discord.gg/QDoge'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='join__bottom-body-top-actions-social-item'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M8.50034 5.05419C7.77144 5.18323 6.58595 5.49548 5.81304 5.76129C5.24643 5.95484 4.41026 6.2929 4.34424 6.35484C4.26448 6.4271 3.73362 7.23226 3.45856 7.69677C2.08878 10.0013 1.34888 12.1948 1.05457 14.8323C0.983059 15.48 0.996811 17.7406 1.07658 18.2206C1.09583 18.3342 1.1976 18.4142 1.9045 18.8529C3.30728 19.7303 4.61105 20.3394 6.14586 20.8348L6.65471 21L6.71798 20.9277C6.92152 20.6955 7.47713 19.8568 7.71093 19.4258C7.77694 19.3045 7.84296 19.1935 7.85671 19.1755C7.88696 19.1394 7.85946 19.1239 7.5899 19.0258C7.29834 18.9174 6.63546 18.6155 6.29989 18.44L6.00008 18.2826L6.07985 18.2284C6.12386 18.1974 6.22563 18.1252 6.30539 18.0632L6.44842 17.9548L6.58045 18.0168C6.82525 18.1329 7.67242 18.4374 8.11251 18.569C9.51805 18.9871 10.8356 19.1652 12.2879 19.1342C13.6466 19.1058 14.7551 18.9252 16.0699 18.52C16.4632 18.3987 17.2196 18.1174 17.4562 18.0039L17.5607 17.9548L17.767 18.1097C17.8825 18.1923 17.9788 18.2697 17.9815 18.2774C17.998 18.3135 17.1096 18.7497 16.6392 18.9355C16.488 18.9948 16.3119 19.0671 16.2459 19.0929L16.1276 19.1394L16.2844 19.4181C16.5622 19.9084 16.9501 20.4994 17.2361 20.8632L17.3406 20.9974L17.91 20.8168C18.6939 20.5639 19.211 20.36 20.0774 19.9548C21.0429 19.5058 21.9258 19.0052 22.6822 18.4787C22.9188 18.3135 22.9215 18.3135 22.938 18.1794C23.0095 17.5755 23.0315 16.1432 22.9793 15.3871C22.762 12.231 21.7635 9.41807 19.8822 6.66194L19.6511 6.32645L19.3018 6.17935C18.2923 5.76387 17.1894 5.41807 16.0754 5.17032C15.7261 5.09548 15.2117 5 15.1402 5C15.0769 5 14.9559 5.19871 14.7056 5.7071C14.6093 5.90581 14.5186 6.08129 14.5048 6.09419C14.4938 6.1071 14.3315 6.09936 14.117 6.07355C13.3578 5.98581 13.2065 5.97806 12.3209 5.96258C11.2371 5.94452 10.7943 5.96774 9.66108 6.09936L9.50429 6.11742L9.34476 5.79742C9.25674 5.62194 9.12747 5.37419 9.0587 5.24516C8.90742 4.97161 8.92118 4.97677 8.50034 5.05419Z'
                        fill='#C2F4FF'
                      ></path>
                    </svg>
                  </a>
                </div>
                <a
                  href='https://t.me/buildersofqdoge'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='join__bottom-body-top-actions-osnovo'
                  data-fls-dynamic='.join__bottom-body-bottom-bottom-mobile, 767.98, 2'
                >
                  <span>Built by QDoge Team</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='20'
                    viewBox='0 0 22 20'
                    fill='none'
                  >
                    <path
                      d='M7.74206 6.08398L13.0263 14.928H2.45785L7.74206 6.08398Z'
                      fill='#C2F4FF'
                    ></path>
                    <path
                      d='M16.5184 10.6084L12.1842 3.4612L20.8527 3.4612L16.5184 10.6084Z'
                      fill='#C2F4FF'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className='join__bottom-body-bottom'>
              <div className='join__bottom-body-bottom-top-mobile'></div>
              <div className='join__bottom-body-bottom-bottom-mobile'></div>
              <div
                className='join__bottom-body-bottom-text'
                data-fls-dynamic='.join__bottom-body-bottom-bottom-mobile, 767.98, 1'
              >
                QDoge is a fun and community-driven meme project on Qubic,
                celebrating the power of memes and the Qubic ecosystem. Not
                financial advice. DYOR. 2025 © All rights reserved.
              </div>
              <a
                href='#'
                className='join__bottom-body-bottom-logo'
                data-fls-dynamic='.join__bottom-body-bottom-top-mobile, 767.98,2'
              >
                <img
                  src='/qdoge-logo-small.png'
                  alt='QDoge Logo'
                  width={42}
                  height={42}
                  style={{ display: 'block' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
