import { HeroSection } from './components/HeroSection';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { TryDemoSection } from './components/TryDemoSection';
import { AssistantSection } from './components/AssistantSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { UseCasesSection } from './components/UseCasesSection';
import { SafetySecuritySection } from './components/SafetySecuritySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { BackendHealthBanner } from './components/BackendHealthBanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <BackendHealthBanner />
      <main className="flex-1">
        <HeroSection />
        <AssistantSection />
        <TryDemoSection />
        <CapabilitiesSection />
        <HowItWorksSection />
        <SafetySecuritySection />
        <UseCasesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
