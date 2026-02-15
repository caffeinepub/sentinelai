import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    try {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
    } finally {
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Overview', id: 'hero' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Safety & Security', id: 'safety-security' },
    { label: 'Use Cases', id: 'use-cases' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-background border-b-2 border-border shadow-sm' : 'bg-background/95 border-b border-border'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="SentinelAI Home"
          >
            <img
              src="/assets/generated/sentinelai-logo-light.dim_512x512.png"
              alt="SentinelAI Logo"
              className="h-8 w-8 dark:hidden"
            />
            <img
              src="/assets/generated/sentinelai-logo-dark.dim_512x512.png"
              alt="SentinelAI Logo"
              className="h-8 w-8 hidden dark:block"
            />
            <span className="text-xl font-bold tracking-tight">SentinelAI</span>
          </button>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              size="default"
              className="font-semibold"
            >
              <a
                href="https://nexusforgeai.base44.app/Chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the Demo
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors text-left focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {item.label}
                </button>
              ))}
              <Button
                asChild
                size="default"
                className="w-full font-semibold mt-2"
              >
                <a
                  href="https://nexusforgeai.base44.app/Chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try the Demo
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
