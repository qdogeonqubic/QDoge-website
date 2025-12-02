/* eslint-disable @next/next/no-img-element */
'use client';

import { MagicCard } from '@/components/ui/magic-card';
import { motion } from 'framer-motion';
import React from 'react';

const AboutSection: React.FC = () => {
  const socialButtons = [
    { icon: '𝕏', label: 'X', href: 'https://x.com/QDogeOnQubic' },
    { icon: '✈', label: 'Telegram', href: 'https://t.me/qdoge' },
    { icon: '💀', label: 'Discord', href: 'https://discord.gg/rZd5JW4Vjt' },
  ];

  return (
    <section id='about' className='relative py-20 lg:py-32 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Cyberpunk Terminal Layout */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
            {/* Left Panel - Terminal Interface */}
            <motion.div
              className='relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -60, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  x: 0,
                  filter: 'blur(0px)',
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                    duration: 0.4,
                  },
                },
              }}
            >
              <MagicCard className='border-2 border-cyan-400/60 bg-black/80 backdrop-blur-sm relative h-full'>
                {/* Terminal Header */}
                <motion.div
                  className='border-b border-cyan-400/40 p-3 bg-cyan-400/10'
                  initial={{ opacity: 0, y: -15, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                    duration: 0.3,
                    delay: 0.05,
                  }}
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      {['red', 'yellow', 'green'].map((color, index) => (
                        <motion.div
                          key={color}
                          className={`w-3 h-3 bg-${color}-400 rounded-full`}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 15,
                            delay: 0.1 + index * 0.05,
                          }}
                        />
                      ))}
                    </div>
                    <motion.div
                      className='text-cyan-400 font-mono text-xs tracking-wider'
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      ▲ QUBIC DIVISION UNIT ▲
                    </motion.div>
                  </div>
                </motion.div>

                {/* Terminal Content */}
                <div className='p-6 lg:p-8'>
                  <motion.h2
                    className='text-4xl lg:text-5xl font-black text-cyan-400 mb-6 tracking-wider font-mono'
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      duration: 0.35,
                      delay: 0.1,
                    }}
                  >
                    ABOUT QDOGE
                  </motion.h2>

                  <div className='space-y-4 text-cyan-300 font-mono text-sm lg:text-base leading-relaxed'>
                    {[
                      "a futuristic ai robotic shiba inu, sent from the future by anna's consciousness. born from qubic's overclocked mining rigs in aigarth's yard. mission: prepare the qubic community for the ultimate dogecoin mining conquest.",
                      "after monero, qubic's eyes turned toward dogecoin. doge is a giant defended by massive hashpower and entrenched asic miners. success requires more than brute force: preparation, unity, and strategy.",
                      'join the kennel club. train for 56 weeks. fetch, stay, bark. earn treats and rewards. prepare for the 2026 doge mining revolution.',
                    ].map((text, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -40, filter: 'blur(5px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{
                          type: 'spring',
                          stiffness: 250,
                          damping: 22,
                          duration: 0.35,
                          delay: 0.15 + index * 0.08,
                        }}
                      >
                        {text}
                      </motion.p>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    className='mt-8 flex flex-wrap gap-4'
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      duration: 0.4,
                      delay: 0.35,
                    }}
                  >
                    <motion.button
                      className='bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 px-6 py-2 rounded font-mono text-sm hover:bg-cyan-400/30 transition-all duration-300 flex items-center space-x-2'
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <span>buy now</span>
                      <motion.span
                        className='text-white'
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        💀
                      </motion.span>
                    </motion.button>

                    <div className='flex space-x-2'>
                      {socialButtons.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='w-10 h-10 border border-cyan-400/50 bg-cyan-400/10 text-cyan-400 rounded flex items-center justify-center hover:bg-cyan-400/20 transition-all duration-300 text-lg'
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 18,
                            delay: 0.4 + index * 0.05,
                          }}
                          whileHover={{ scale: 1.15, rotate: 10, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </MagicCard>
            </motion.div>

            {/* Right Panel - Holographic Portrait */}
            
            <video
              src='https://cb9j9fxetpmnxx5v.public.blob.vercel-storage.com/qdoge-promo.mp4'
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-full object-cover'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
