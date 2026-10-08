import React from 'react';
import { NavbarCapsule } from '@/components/NavbarCapsule';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-primary flex flex-col">
      <NavbarCapsule />
      <main className="flex-1 flex flex-col">
        <HeroSection />
      </main>
    </div>
  );
}
