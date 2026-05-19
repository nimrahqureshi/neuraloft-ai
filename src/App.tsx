import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Loader } from "@/components/effects/Loader";
import { Background } from "@/components/effects/Background";
import { ParticleField } from "@/components/effects/ParticleField";
import { CursorGlow } from "@/components/effects/CursorGlow";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Dashboard } from "@/components/sections/Dashboard";
import { Workflow } from "@/components/sections/Workflow";
import { ChatDemo } from "@/components/sections/ChatDemo";
import { Results } from "@/components/sections/Results";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

/**
 * NeuroFlow AI — single-page AI automation agency website.
 * Loader gates the first paint; all sections render behind it.
 */
export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* atmosphere */}
      <Background />
      <ParticleField />
      <CursorGlow />
      <div className="grain" aria-hidden="true" />

      {/* content */}
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustStrip />
        <Services />
        <Dashboard />
        <Workflow />
        <ChatDemo />
        <Results />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
