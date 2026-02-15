import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

export function HeroSection() {
  const handleContactScroll = () => {
    try {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error scrolling to contact section:', error);
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/sentinelai-hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-border bg-card">
            <Shield className="h-4 w-4 text-success" />
            <span className="text-sm font-semibold tracking-wide uppercase">Enterprise-Grade AI Security</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Professional AI Solutions for{' '}
            <span className="text-foreground">
              All Companies
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SentinelAI delivers powerful, secure AI capabilities designed for businesses of all types—from startups to enterprises, government agencies to private companies. Test safely, deploy confidently.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 font-semibold group"
            >
              <a
                href="https://nexusforgeai.base44.app/Chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 font-semibold border-2"
              onClick={handleContactScroll}
            >
              Contact Sales
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center space-y-2 p-4 border border-border bg-card">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Secure Testing</div>
            </div>
            <div className="text-center space-y-2 p-4 border border-border bg-card">
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Availability</div>
            </div>
            <div className="text-center space-y-2 p-4 border border-border bg-card">
              <div className="text-3xl font-bold text-foreground">All Industries</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
