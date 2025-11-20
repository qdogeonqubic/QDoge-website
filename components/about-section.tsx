'use client';

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef } from 'react';
import { AboutBottomIcon } from './icons/about-bottom-icon';
import { SkullIcon } from './icons/skull-icon';
import { XIcon } from './icons/x-icon';
import { TelegramIcon } from './icons/telegram-icon';
import { DiscordIcon } from './icons/discord-icon';
import { SkullRedIcon } from './icons/skull-red-icon';

export default function AboutSection() {
  // Tabs logic for how-section
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // This function handles the tab switching
  const handleTabClick = useCallback((idx: number) => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const nav = container.querySelector('.tabs__navigation');
    const tabTitles = nav
      ? Array.from(
          nav.querySelectorAll<HTMLButtonElement>('[data-fls-tabs-title]')
        )
      : [];
    const tabBodies = container.querySelectorAll<HTMLDivElement>(
      '[data-fls-tabs-item]'
    );
    tabTitles.forEach((btn) => btn.classList.remove('--tab-active'));
    tabBodies.forEach((body) => (body.style.display = 'none'));

    if (tabTitles[idx]) tabTitles[idx].classList.add('--tab-active');
    if (tabBodies[idx]) tabBodies[idx].style.display = '';

    container.setAttribute('data-fls-tabs-index', idx.toString());
  }, []);

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const nav = container.querySelector('.tabs__navigation');
    if (!nav) return;
    const tabTitles = nav.querySelectorAll<HTMLButtonElement>(
      '[data-fls-tabs-title]'
    );
    const tabBodies = container.querySelectorAll<HTMLDivElement>(
      '[data-fls-tabs-item]'
    );
    tabTitles.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        handleTabClick(idx);
      });
    });

    tabTitles.forEach((b, idx) =>
      b.classList.toggle('--tab-active', idx === 0)
    );
    tabBodies.forEach((b, idx) => (b.style.display = idx === 0 ? '' : 'none'));
    container.setAttribute('data-fls-tabs-index', '0');

    return () => {
      tabTitles.forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true));
      });
    };
  }, [handleTabClick]);

  return (
    <div className='page__about-how overflow-x-hidden'>
      <div className='page__about-how-bg'>
        <picture>
          <source
            media='(min-width: 1920.98px)'
            srcSet='https://garthonqubic.com/assets/img/about/bg.webp'
            type='image/webp'
          />
          <source
            media='(min-width: 767.98px)'
            srcSet='https://garthonqubic.com/assets/img/about/bg-1920.webp'
            type='image/webp'
          />
          <img
            data-fls-image-ignore=''
            alt='BG'
            src='https://garthonqubic.com/assets/img/about/bg-mob.webp'
          />
        </picture>
      </div>
      <div className='page__line line'>
        {/* ...no UI change... */}
        <div className='line__row'>
          {/* ...no UI change... */}
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
        </div>
        <div className='line__row'>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
          <div className='line__item icon'>
            <img
              src='https://garthonqubic.com/assets/img/line/icon.svg'
              alt='Icon'
            />
          </div>
          <div className='line__item text'>
            <h3>danger</h3>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
        </div>
      </div>
      <section id='about-section' className='page__about about'>
        <div className='about__container'>
          <div className='about__body'>
            <div
              className='about__body-main --watcher-view'
              data-fls-watcher-threshold='0.5'
              data-fls-watcher-once=''
              data-fls-watcher=''
            >
              <div
                className='about__body-main-content --watcher-view'
                data-fls-watcher-threshold='0.55'
                data-fls-watcher-once=''
                data-fls-watcher=''
              >
                <div className='about__body-main-content-top'>
                  <picture>
                    <source
                      media='(min-width: 767.98px)'
                      srcSet='https://garthonqubic.com/assets/img/about/content-top.svg'
                      type='image/svg+xml'
                    />
                    <img
                      alt='TOP'
                      src='https://garthonqubic.com/assets/img/about/content-top-mob.svg'
                    />
                  </picture>
                </div>
                <div className='about__body-main-content-body'>
                  <div className='about__body-main-content-body-bg'>
                    <img
                      src='https://garthonqubic.com/assets/img/about/content-bg.svg'
                      alt='BG'
                    />
                  </div>
                  <div className='about__body-main-content-body-top'>
                    <picture>
                      <source
                        media='(min-width: 767.98px)'
                        srcSet='https://garthonqubic.com/assets/img/about/content-body-top /.svg'
                        type='image/svg+xml'
                      />
                      <img
                        alt='TOP'
                        src='https://garthonqubic.com/assets/img/about/content-body-top-mob.svg'
                      />
                    </picture>
                  </div>
                  <div className='about__body-main-content-body-content'>
                    <h2 className='text-[56px]! about__body-main-content-body-content-title'>
                      ABOUT QDOGE
                    </h2>
                    <div className='about__body-main-content-body-content-text'>
                      QDOGE is a robotic Shiba Inu AI built in the AIGARTH Yard
                      to guide the Qubic community into the new era of Dogecoin
                      mining. Designed by Anna, QDOGE prepares miners to take on
                      Dogecoin’s vast ASIC hashpower with strategy and unity.
                      <br />
                      <br />
                      <b>Join QDOGE’s Kennel Club</b> to earn weekly tokens,
                      hold for rewards, and help lead the next legendary mining
                      campaign.
                      <br />
                      <br />
                      “Monero was just the beginning. Dogecoin is next.”
                    </div>
                    <div className='about__body-main-content-body-content-actions'>
                      <a
                        href='#'
                        data-fls-scrollto='.how'
                        className='about__body-main-content-body-content-actions-button button blue'
                      >
                        <span>Join the Kennel</span>
                        <span>
                          <SkullIcon />
                        </span>
                      </a>
                      <div className='about__body-main-content-body-content-actions-social social'>
                        <a
                          href='https://x.com/garthonqubic'
                          target='_blank'
                          className='about__body-main-content-body-content-actions-social-item social-item social-item--blue-border'
                        >
                          <XIcon />
                        </a>
                        <a
                          href='https://t.me/garthonqubic'
                          target='_blank'
                          className='about__body-main-content-body-content-actions-social-item social-item social-item--blue-border'
                        >
                          <TelegramIcon />
                        </a>
                        <a
                          href='https://discord.gg/Pryekk4akE'
                          target='_blank'
                          className='about__body-main-content-body-content-actions-social-item social-item social-item--blue-border'
                        >
                          <DiscordIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='about__body-main-image --watcher-view'
                data-fls-watcher-threshold='0.55'
                data-fls-watcher-once=''
                data-fls-watcher=''
              >
                <div className='about__body-main-image-top'>
                  <img
                    src='https://garthonqubic.com/assets/img/about/image-top.svg'
                    alt='Top'
                  />
                </div>
                <div className='about__body-main-image-main'>
                  <img alt='QDOGE' src='./about-ai.png' />
                  <img
                    alt='Cyber Filter'
                    src='https://garthonqubic.com/assets/img/about/02.webp'
                  />
                  <img
                    alt='Cyber Filter'
                    src='https://garthonqubic.com/assets/img/about/03.webp'
                  />
                  <img
                    alt='Cyber Filter'
                    src='https://garthonqubic.com/assets/img/about/04.webp'
                  />
                </div>
              </div>
            </div>
            <div
              className='about__body-bottom --watcher-view'
              data-fls-watcher-threshold='0.65'
              data-fls-watcher-once=''
              data-fls-watcher=''
            >
              <div className='about__body-bottom-banner'>
                <div className='about__body-bottom-banner-icon'>
                  <img
                    src='https://garthonqubic.com/assets/img/about/banner-icon.svg'
                    alt='Icon'
                  />
                </div>
                <div className='about__body-bottom-banner-content'>
                  <h3 className='about__body-bottom-banner-title'>
                    TRAINING COMMENCED
                  </h3>
                  <div className='about__body-bottom-banner-text'>
                    QDOGE&apos;s Kennel Club is now open. Are you ready?
                  </div>
                </div>
                <div className='about__body-bottom-banner-icon'>
                  <img
                    src='https://garthonqubic.com/assets/img/about/banner-icon.svg'
                    alt='Icon'
                  />
                </div>
              </div>
              <div
                className='about__body-bottom-image --watcher-view'
                data-fls-watcher-threshold='0.75'
                data-fls-watcher-once=''
                data-fls-watcher=''
              >
                <div className='about__body-bottom-image-bg'>
                  <img
                    src='https://garthonqubic.com/assets/img/about/bottom-image-bg.svg'
                    alt='BG'
                  />
                </div>
                <div className='about__body-bottom-image-icon'>
                  <AboutBottomIcon />
                </div>
              </div>
              <form
                id='confessionForm'
                action='https://www.garthonqubic.com/sendmail/index.php'
                method='POST'
                className='about__body-bottom-form form-about --watcher-view'
                data-fls-watcher-threshold='0.65'
                data-fls-watcher-once=''
                data-fls-watcher=''
              >
                <div className='form-about__bg'>
                  <img
                    src='https://garthonqubic.com/assets/img/about/form-bg.svg'
                    alt='BG'
                  />
                </div>
                <h3 className='form-about__title'>
                  WHY SHOULD QDOGE CHOOSE YOU?
                </h3>
                <input
                  type='text'
                  id='userName'
                  name='userName'
                  className='form-about__input'
                  placeholder='Shiba name...'
                />
                <textarea
                  className='form-about__textarea'
                  rows={3}
                  id='userConfession'
                  name='userConfession'
                  placeholder='What will make you a good DOGE-miner?'
                ></textarea>
                <button type='submit' className='form-about__submit button red'>
                  <span>Apply for Training</span>
                  <span>
                    <SkullRedIcon />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id='how-section' className='page__how how'>
        <div
          className='how__container --watcher-view'
          data-fls-watcher-threshold='0.5'
          data-fls-watcher-once=''
          data-fls-watcher=''
        >
          <div className='how__body'>
            <div className='how__title-mob-box'></div>
            <div
              className='how__images-box --watcher-view'
              data-fls-watcher-threshold='0.5'
              data-fls-watcher-once=''
              data-fls-watcher=''
            >
              <div className='how__images-top'>
                <img
                  src='https://garthonqubic.com/assets/img/how/top.svg'
                  alt='Top'
                />
              </div>
              <div className='how__images-main'>
                <div className='how__images-list v-0'>
                  <img
                    alt='Filter'
                    src='https://garthonqubic.com/assets/img/how/filter1.webp'
                  />
                  <img
                    alt='Filter'
                    src='https://garthonqubic.com/assets/img/how/filter2.webp'
                  />
                  <img
                    alt='Filter'
                    src='https://garthonqubic.com/assets/img/how/filter3.webp'
                  />
                  <img
                    alt='Kennel step'
                    src='https://garthonqubic.com/assets/img/how/01.webp'
                  />
                  <img
                    alt='Kennel step'
                    src='https://garthonqubic.com/assets/img/how/02.webp'
                  />
                  <img
                    alt='Kennel step'
                    src='https://garthonqubic.com/assets/img/how/03.webp'
                  />
                  <img
                    alt='Kennel step'
                    src='https://garthonqubic.com/assets/img/how/04.webp'
                  />
                </div>
              </div>
            </div>
            <div className='how__content'>
              <h2
                className='how__title --watcher-view'
                data-fls-dynamic='.how__title-mob-box, 767.98'
                data-fls-watcher-threshold='0.75'
                data-fls-watcher-once=''
                data-fls-watcher=''
              >
                <span>
                  The Future of
                  <br data-pc-only='' />
                  Dogecoin Mining
                </span>
                <img
                  src='https://garthonqubic.com/assets/img/how/title-bg.svg'
                  alt='BG'
                />
              </h2>
              <div
                data-fls-tabs=''
                className='how__tabs tabs --tab-init'
                data-fls-watcher-threshold='0.6'
                data-fls-watcher-once=''
                data-fls-watcher=''
                data-fls-tabs-index='0'
                ref={tabsContainerRef}
              >
                <nav
                  data-fls-tabs-titles=''
                  className='tabs__navigation *:opacity-100! *:visible! lg:*:opacity-0 lg:*:invisible'
                >
                  <button
                    type='button'
                    className='tabs__title --tab-active'
                    data-fls-tabs-title=''
                  >
                    <img
                      src='https://garthonqubic.com/assets/img/how/tab-title-dec.svg'
                      alt='Decor'
                    />
                    <span>Character Concept</span>
                    <img
                      src='https://garthonqubic.com/assets/img/how/tab-title-dec.svg'
                      alt='Decor'
                    />
                  </button>
                  <button
                    type='button'
                    className='tabs__title'
                    data-fls-tabs-title=''
                  >
                    <img
                      src='https://garthonqubic.com/assets/img/how/tab-title-dec.svg'
                      alt='Decor'
                    />
                    <span>Backstory & Lore</span>
                    <img
                      src='https://garthonqubic.com/assets/img/how/tab-title-dec.svg'
                      alt='Decor'
                    />
                  </button>
                  <button
                    type='button'
                    className='tabs__title'
                    data-fls-tabs-title=''
                  >
                    <img
                      src='https://garthonqubic.com/assets/img/how/tab-title-dec.svg'
                      alt='Decor'
                    />
                    <span>Mission & Role</span>
                    <img
                      src='https://garthonqubic.com/assets/img/how/tab-title-dec.svg'
                      alt='Decor'
                    />
                  </button>
                  <button
                    type='button'
                    className='tabs__title'
                    data-fls-tabs-title=''
                  >
                    <img
                      src='https://garthonqubic.com/assets/img/how/tab-title-dec.svg'
                      alt='Decor'
                    />
                    <span>The Prophecy</span>
                    <img
                      src='https://garthonqubic.com/assets/img/how/tab-title-dec.svg'
                      alt='Decor'
                    />
                  </button>
                </nav>
                <div
                  data-fls-tabs-body=''
                  className='tabs__content opacity-100! visible! lg:opacity-0 lg:invisible'
                >
                  <div className='tabs__body' data-fls-tabs-item=''>
                    <h3 className='tabs__body-title'>Character Concept</h3>
                    <div className='tabs__body-text'>
                      <p>
                        A futuristic AI robotic Shiba Inu, QDOGE guides Qubic
                        miners in the challenging Dogecoin mining frontier with
                        strategic support and loyalty.
                      </p>
                    </div>
                  </div>
                  <div className='tabs__body' data-fls-tabs-item=''>
                    <h3 className='tabs__body-title'>Backstory & Lore</h3>
                    <div className='tabs__body-text'>
                      <p>
                        QDOGE was born from Anna’s blueprint to conquer Dogecoin
                        mining, forging plans through data analysis and
                        meme-inspired training in AIGARTH’s Yard.
                      </p>
                    </div>
                  </div>
                  <div className='tabs__body' data-fls-tabs-item=''>
                    <h3 className='tabs__body-title'>Mission & Role</h3>
                    <div className='tabs__body-text'>
                      <p>
                        QDOGE scouts the Dogecoin network, strategizes mining
                        efforts, and leads Qubic’s community as a sidekick in
                        the upcoming Dogecoin mining push.
                      </p>
                    </div>
                  </div>
                  <div className='tabs__body' data-fls-tabs-item=''>
                    <h3 className='tabs__body-title'>The Prophecy</h3>
                    <div className='tabs__body-text'>
                      <p>
                        Following QXMR’s Monero success, QDOGE’s prophecy calls
                        for unity and precision to overcome Dogecoin’s ASIC
                        dominance and achieve legendary mining.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
