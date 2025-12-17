/* eslint-disable @next/next/no-img-element */
'use client';

import { Dock, DockIcon } from '@/components/ui/dock';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { TextAnimate } from '@/components/ui/text-animate';
import { cn } from '@/lib/utils';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { Menu, MessageCircle, X, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Navigation items
const navigationItems = [
  { label: 'About', scrollTo: '#about' },
  { label: 'Kennel Club', scrollTo: '#kennel-club' },
  { label: 'Tokenomics', scrollTo: '#tokenomics' },
  { label: 'Airdrop', scrollTo: '#airdrop-mechanisms' },
  { label: 'Roadmap', scrollTo: '#roadmap' },
  { label: 'Faq', scrollTo: '#faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const joinDiscord = () => {
    window.open('https://discord.gg/rZd5JW4Vjt', '_blank');
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        )}
      >
        <div className='max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20'>
            {/* Enhanced Logo */}
            <Link
              href='/'
              className='flex items-center space-x-1 sm:space-x-2 z-50 group'
            >
              <div className='relative shrink-0'>
                <div className='relative p-0.5 sm:p-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm'>
                  <img
                    src='/logo.png'
                    alt='QDOGE'
                    className='h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 object-contain relative z-10'
                    onError={(e) => {
                      e.currentTarget.src = '/logo.png';
                    }}
                  />
                </div>
                <div className='absolute inset-0 bg-cyan-400/20 rounded-full blur-lg animate-pulse group-hover:bg-cyan-400/30 transition-colors' />
              </div>
              <div className='hidden xs:block'>
                <TextAnimate
                  animation='fadeIn'
                  className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-linear-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent'
                >
                  QDOGE
                </TextAnimate>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8'>
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.scrollTo)}
                  className='text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium text-xs md:text-sm uppercase tracking-wider whitespace-nowrap'
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className='hidden md:flex items-center'>
              <ShimmerButton
                className='px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2 text-xs md:text-sm font-bold uppercase tracking-wider relative overflow-hidden'
                shimmerColor='#00f3ff'
                background='linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
                onClick={joinDiscord}
              >
                <span className='relative z-10 flex items-center gap-2'>
                  <DiscordLogoIcon width={16} height={16} />
                  <span className='hidden sm:inline'>Join Discord</span>
                  <span className='sm:hidden'>Discord</span>
                </span>
              </ShimmerButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden p-1.5 sm:p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 z-50 rounded-md border border-gray-700/50 hover:border-cyan-400/50'
              aria-label='Toggle navigation'
            >
              {isMobileMenuOpen ? (
                <X className='w-5 h-5 sm:w-6 sm:h-6' />
              ) : (
                <Menu className='w-5 h-5 sm:w-6 sm:h-6' />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-40 md:hidden'>
          <div className='absolute inset-0 bg-black/90 backdrop-blur-xl' />
          <div className='relative flex flex-col h-full pt-16 sm:pt-20 px-4 sm:px-6'>
            {/* Mobile Navigation */}
            <nav className='flex-1 space-y-4 sm:space-y-6 mt-4'>
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.scrollTo)}
                  className='block w-full text-left text-lg sm:text-xl font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 sm:py-3 border-b border-gray-800/50 hover:border-cyan-400/30'
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className='space-y-4 sm:space-y-6 pb-6 sm:pb-8'>
              {/* Discord Button */}
              <ShimmerButton
                className='w-full py-3 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wider'
                shimmerColor='#00f3ff'
                background='linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
                onClick={joinDiscord}
              >
                <MessageCircle className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                Join Discord
              </ShimmerButton>

              {/* Footer Text */}
              <div className='text-center text-xs sm:text-sm text-gray-500 leading-relaxed px-2'>
                QDOGE is a parody project created for maximum fun. Not financial
                advice. 2025 © All rights reserved.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Dock for Desktop (Optional Enhancement) */}
      <div className='hidden 2xl:block fixed bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-40'>
        <Dock className='bg-black/20 border-white/10 backdrop-blur-md'>
          <DockIcon>
            <button
              onClick={joinDiscord}
              className='p-1.5 lg:p-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200'
              aria-label='Join Discord'
            >
              <MessageCircle className='w-4 h-4 lg:w-5 lg:h-5' />
            </button>
          </DockIcon>
          <DockIcon>
            <button
              onClick={() => scrollToSection('#the-yard')}
              className='p-1.5 lg:p-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200'
              aria-label='Back to Top'
            >
              <Zap className='w-4 h-4 lg:w-5 lg:h-5' />
            </button>
          </DockIcon>
        </Dock>
      </div>
    </>
  );
}
