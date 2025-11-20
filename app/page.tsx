import { Header } from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from '@/components/about-section';
import { AirdropSection } from "@/components/airdrop-section";
import { TokenomicsSection } from "@/components/tokenomics-section";
import JoinSection from "@/components/join-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AirdropSection />
      <TokenomicsSection />
      <JoinSection />
    </main>
  );
}
