import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import './styles.css';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'QDOGE',
  description: 'QDOGE AI CYBER SHIBA TRAINER',
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistMono.className} antialiased`}>{children}</body>
    </html>
  );
}
