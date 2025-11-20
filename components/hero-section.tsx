'use client';

import { useEffect, useRef } from 'react';

const BASE_IMAGE_URL = 'https://garthonqubic.com/';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mountainsRef = useRef<HTMLDivElement>(null);
  const explosionRef = useRef<HTMLDivElement>(null);
  const rocksRef = useRef<HTMLDivElement>(null);
  const human1Ref = useRef<HTMLDivElement>(null);
  const human2Ref = useRef<HTMLDivElement>(null);
  const human3Ref = useRef<HTMLDivElement>(null);
  const human4Ref = useRef<HTMLDivElement>(null);
  const human5Ref = useRef<HTMLDivElement>(null);
  const human6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;

    const updateTransforms = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress more accurately
      const scrollTop = window.scrollY || window.pageYOffset;
      const heroTop = heroRef.current.offsetTop;
      const scrollDistance = heroHeight - viewportHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (scrollTop - heroTop) / scrollDistance)
      );

      // Enable overflow-x when scrolling in hero section
      if (scrollProgress > 0 && scrollProgress < 1) {
        document.documentElement.style.overflowX = 'auto';
      } else {
        document.documentElement.style.overflowX = 'hidden';
      }

      // Use transform3d for hardware acceleration
      // Update hero__bg transform (parallax effect)
      if (bgRef.current) {
        const translateY = scrollProgress * -0.3;
        bgRef.current.style.transform = `translate3d(0, ${translateY}%, 0)`;
      }

      // Update mountains transform - translateY only (move upward when scrolling)
      if (mountainsRef.current) {
        const translateY = 5 - scrollProgress * 10; // Start at 5%, move up towards the top
        mountainsRef.current.style.transform = `translate3d(0, ${translateY}%, 0)`;
      }

      // Update explosion transform - scale only
      if (explosionRef.current) {
        const scale = 1 + scrollProgress * 0.1;
        explosionRef.current.style.transform = `scale(${scale})`;
      }

      // Update rocks transform - scale only
      if (rocksRef.current) {
        const scale = 0.8 + scrollProgress * 0.2;
        rocksRef.current.style.transform = `scale3d(${scale}, ${scale}, 1)`;
      }

      // Human-1: Move right only (no overlap)
      if (human1Ref.current) {
        const translateX = -25 + scrollProgress * 30;
        const scale = 0.6 + scrollProgress * 0.2;
        human1Ref.current.style.transform = `translate3d(${translateX}%, -25%, 0) rotate(10deg) scale(${scale})`;
      }

      // Human-2: Move left only (no overlap)
      if (human2Ref.current) {
        const translateX = scrollProgress * -20;
        const translateY = -80 + scrollProgress * 10;
        const scale = 0.75 + scrollProgress * 0.15;
        human2Ref.current.style.transform = `translate3d(${translateX}%, ${translateY}%, 0) rotate(20deg) scale(${scale})`;
      }

      // Human-3: Move right only (no overlap)
      if (human3Ref.current) {
        const translateX = 25 + scrollProgress * 25;
        const translateY = -50 + scrollProgress * 10;
        const scale = 0.6 + scrollProgress * 0.2;
        human3Ref.current.style.transform = `translate3d(${translateX}%, ${translateY}%, 0) rotate(15deg) scale(${scale})`;
      }

      // Human-4: Move left only (no overlap)
      if (human4Ref.current) {
        const translateX = 80 - scrollProgress * 25;
        const translateY = -10 + scrollProgress * 5;
        const scale = 1 + scrollProgress * 0.1;
        human4Ref.current.style.transform = `translate3d(${translateX}%, ${translateY}%, 0) rotate(30deg) scale(${scale})`;
      }

      // Human-5: Move right only (no overlap)
      if (human5Ref.current) {
        const translateX = -15 + scrollProgress * 20;
        const scale = 1 + scrollProgress * 0.1;
        human5Ref.current.style.transform = `translate3d(${translateX}%, 0%, 0) rotate(-15deg) scale(${scale})`;
      }

      // Human-6: Move left only (no overlap)
      if (human6Ref.current) {
        const translateX = 50 - scrollProgress * 20;
        const translateY = 20 + scrollProgress * 5;
        const scale = 0.8 + scrollProgress * 0.2;
        human6Ref.current.style.transform = `translate3d(${translateX}%, ${translateY}%, 0) rotate(-30deg) scale(${scale})`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateTransforms);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateTransforms(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      // Reset overflow on cleanup
      document.documentElement.style.overflowX = '';
    };
  }, []);

  return (
    <section ref={heroRef} className='page__hero hero'>
      <div className='hero__scroll-box'>
        <div ref={bgRef} className='hero__bg'>
          <div className='hero__bg-bg'>
            <picture>
              <source
                media='(min-width: 1920.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/bg.webp'}
                type='image/webp'
              />
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/bg-1920.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='BG'
                src={BASE_IMAGE_URL + 'assets/img/hero/bg-mob.webp'}
              />
            </picture>
          </div>
          <div ref={mountainsRef} className='hero__bg-mountains'>
            <picture>
              <source
                media='(min-width: 1920.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Mountains.webp'}
                type='image/webp'
              />
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Mountains-1920.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='Mountains'
                src={BASE_IMAGE_URL + 'assets/img/hero/Mountains-1920.webp'}
              />
            </picture>
          </div>
          <div ref={explosionRef} className='hero__bg-explosion'>
            <picture>
              <source
                media='(min-width: 1920.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Explosion.webp'}
                type='image/webp'
              />
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Explosion.webp'}
                type='image/jpeg'
              />
              <img
                data-fls-image-ignore=''
                alt='Explosion'
                src={BASE_IMAGE_URL + 'assets/img/hero/Explosion-1920.webp'}
              />
            </picture>
          </div>
          <div className='hero__bg-robot'>
            <picture>
              <source
                media='(min-width: 1920.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Robot.webp'}
                type='image/webp'
              />
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Robot-1920.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='Robot'
                src={BASE_IMAGE_URL + 'assets/img/hero/Robot-1920.webp'}
              />
            </picture>
          </div>
          <div ref={rocksRef} className='hero__bg-rocks'>
            <picture>
              <source
                media='(min-width: 1920.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Rocks.webp'}
                type='image/webp'
              />
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Rocks-1920.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='Rocks'
                src={BASE_IMAGE_URL + 'assets/img/hero/Rocks-1920.webp'}
              />
            </picture>
          </div>
          <div ref={human1Ref} className='hero__bg-human-1'>
            <picture>
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Human1.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='Human1'
                src={BASE_IMAGE_URL + 'assets/img/hero/Human1.webp'}
              />
            </picture>
          </div>
          <div ref={human2Ref} className='hero__bg-human-2'>
            <picture>
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Human2.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='Human2'
                src={BASE_IMAGE_URL + 'assets/img/hero/Human2.webp'}
              />
            </picture>
          </div>
          <div ref={human3Ref} className='hero__bg-human-3'>
            <picture>
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Human3.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='Human3'
                src={BASE_IMAGE_URL + 'assets/img/hero/Human3.webp'}
              />
            </picture>
          </div>
          <div ref={human4Ref} className='hero__bg-human-4'>
            <picture>
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Human4.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='Human4'
                src={BASE_IMAGE_URL + 'assets/img/hero/Human4.webp'}
              />
            </picture>
          </div>
          <div ref={human5Ref} className='hero__bg-human-5'>
            <picture>
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Human5.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='Human5'
                src={BASE_IMAGE_URL + 'assets/img/hero/Human5.webp'}
              />
            </picture>
          </div>
          <div ref={human6Ref} className='hero__bg-human-6'>
            <picture>
              <source
                media='(min-width: 767.98px)'
                srcSet={BASE_IMAGE_URL + 'assets/img/hero/Human6.webp'}
                type='image/webp'
              />
              <img
                data-fls-image-ignore=''
                alt='Human6'
                src={BASE_IMAGE_URL + 'assets/img/hero/Human6.webp'}
              />
            </picture>
          </div>
        </div>

        <div className='hero__container'>
          <div className='hero__body'>
            <h1 className='hero__title text-center flex flex-col items-center'>
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
            </h1>
            <div className='hero__actions'>
              <a
                href='#'
                data-fls-scrollto='.how'
                className='hero__button button white large'
              >
                <span className='text'>buy now</span>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='19'
                    height='22'
                    viewBox='0 0 19 22'
                    fill='none'
                  >
                    <path
                      d='M9.36327 0.939392C4.47988 0.939392 0.506836 4.91244 0.506836 9.79583V16.3883L3.99832 17.7854L4.71705 21.3773H6.63821V18.6523H8.00074V21.3773H8.68201V18.6523H10.0445V21.3773H10.7258V18.6523H12.0883V21.3773H14.0095L14.7282 17.7854L18.2197 16.3883V9.79583C18.2197 4.91244 14.2467 0.939392 9.36327 0.939392ZM5.61632 14.5647C5.14472 14.5647 4.68372 14.4248 4.2916 14.1628C3.89949 13.9008 3.59387 13.5284 3.4134 13.0927C3.23292 12.657 3.18571 12.1776 3.27771 11.7151C3.36971 11.2525 3.59681 10.8277 3.93027 10.4942C4.26374 10.1607 4.68861 9.93365 5.15114 9.84164C5.61367 9.74964 6.0931 9.79686 6.5288 9.97733C6.96449 10.1578 7.33689 10.4634 7.59889 10.8555C7.8609 11.2477 8.00074 11.7087 8.00074 12.1803C8.00007 12.8124 7.74863 13.4185 7.30161 13.8655C6.85459 14.3126 6.2485 14.564 5.61632 14.5647ZM7.80956 17.2897L8.85232 13.8834H9.87422L10.917 17.2897H7.80956ZM13.1102 14.5647C12.6386 14.5647 12.1776 14.4248 11.7855 14.1628C11.3934 13.9008 11.0878 13.5284 10.9073 13.0927C10.7268 12.657 10.6796 12.1776 10.7716 11.7151C10.8636 11.2525 11.0907 10.8277 11.4242 10.4942C11.7576 10.1607 12.1825 9.93365 12.645 9.84164C13.1076 9.74964 13.587 9.79686 14.0227 9.97733C14.4584 10.1578 14.8308 10.4634 15.0928 10.8555C15.3548 11.2477 15.4946 11.7087 15.4946 12.1803C15.494 12.8124 15.2425 13.4185 14.7955 13.8655C14.3485 14.3126 13.7424 14.564 13.1102 14.5647Z'
                      fill='black'
                    />
                  </svg>
                </span>
              </a>
              <div className='hero__social social'>
                <a
                  href='https://x.com/garthonqubic'
                  target='_blank'
                  className='hero__social-item social-item social-item--white-border large'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='23'
                    viewBox='0 0 22 23'
                    fill='none'
                  >
                    <path
                      d='M15.4664 4.33313H17.8067L12.6945 10.1909L18.7092 18.1633H14.0003L10.3095 13.3291L6.09113 18.1633H3.74867L9.21622 11.8957L3.44891 4.33422H8.27771L11.6088 8.75208L15.4664 4.33313ZM14.6434 16.7594H15.9406L7.5692 5.66405H6.17833L14.6434 16.7594Z'
                      fill='white'
                    />
                  </svg>
                </a>
                <a
                  href='https://t.me/garthonqubic'
                  target='_blank'
                  className='hero__social-item social-item social-item--white-border large'
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
                      d='M18.5442 4.37159C18.7687 4.27712 19.0144 4.24453 19.2557 4.27723C19.497 4.30993 19.7252 4.40672 19.9164 4.55752C20.1077 4.70832 20.255 4.90762 20.3431 5.13468C20.4312 5.36174 20.4568 5.60826 20.4172 5.84857L18.3571 18.3448C18.1573 19.5502 16.8347 20.2414 15.7292 19.641C14.8045 19.1387 13.4311 18.3648 12.1957 17.5572C11.5781 17.153 9.68596 15.8586 9.9185 14.9375C10.1183 14.15 13.2976 11.1906 15.1143 9.43111C15.8273 8.73986 15.5021 8.34109 14.6601 8.97694C12.5691 10.5557 9.2118 12.9564 8.10179 13.6322C7.12259 14.2281 6.61209 14.3299 6.00168 14.2281C4.88804 14.0428 3.85524 13.7558 3.01229 13.4061C1.87322 12.9337 1.92863 11.3677 3.01139 10.9117L18.5442 4.37159Z'
                      fill='white'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  target='_blank'
                  className='hero__social-item social-item social-item--white-border large'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    viewBox='0 0 23 23'
                    fill='none'
                  >
                    <path
                      d='M11.884 2.16418C10.6911 2.16418 9.50995 2.39914 8.40788 2.85563C7.30582 3.31212 6.30446 3.9812 5.46098 4.82469C3.75749 6.52818 2.80048 8.83861 2.80048 11.2477C2.80048 15.2626 5.40745 18.6689 9.01361 19.8771C9.46778 19.9497 9.61312 19.6681 9.61312 19.4229V17.8878C7.09698 18.4328 6.56105 16.6706 6.56105 16.6706C6.14321 15.6169 5.55278 15.3353 5.55278 15.3353C4.72618 14.7721 5.61637 14.7903 5.61637 14.7903C6.52472 14.8539 7.00615 15.7259 7.00615 15.7259C7.79641 17.1066 9.13169 16.6978 9.64945 16.4798C9.7312 15.8894 9.96738 15.4897 10.2217 15.2626C8.20517 15.0355 6.08871 14.2544 6.08871 10.7935C6.08871 9.78526 6.43389 8.97683 7.02431 8.3319C6.93348 8.10481 6.61556 7.16012 7.11515 5.93385C7.11515 5.93385 7.87817 5.68859 9.61312 6.86037C10.3307 6.66053 11.1119 6.56061 11.884 6.56061C12.6561 6.56061 13.4373 6.66053 14.1549 6.86037C15.8898 5.68859 16.6528 5.93385 16.6528 5.93385C17.1524 7.16012 16.8345 8.10481 16.7437 8.3319C17.3341 8.97683 17.6793 9.78526 17.6793 10.7935C17.6793 14.2634 15.5537 15.0265 13.5281 15.2535C13.8551 15.5351 14.1549 16.0892 14.1549 16.934V19.4229C14.1549 19.6681 14.3002 19.9588 14.7635 19.8771C18.3696 18.6599 20.9675 15.2626 20.9675 11.2477C20.9675 10.0548 20.7326 8.87366 20.2761 7.77159C19.8196 6.66953 19.1505 5.66817 18.307 4.82469C17.4635 3.9812 16.4622 3.31212 15.3601 2.85563C14.258 2.39914 13.0769 2.16418 11.884 2.16418Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
