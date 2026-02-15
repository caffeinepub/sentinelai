import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    try {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  };

  const getAppIdentifier = () => {
    if (typeof window !== 'undefined') {
      return encodeURIComponent(window.location.hostname || 'nexusforgeai-app');
    }
    return 'nexusforgeai-app';
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/generated/nexusforgeai-logo-light.dim_512x512.png"
                alt="Nexus Forge AI Logo"
                className="h-8 w-8 dark:hidden"
              />
              <img
                src="/assets/generated/nexusforgeai-logo-dark.dim_512x512.png"
                alt="Nexus Forge AI Logo"
                className="h-8 w-8 hidden dark:block"
              />
              <span className="text-lg font-bold">Nexus Forge AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional AI solutions for all types of companies. Safe, secure, and powerful.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('capabilities')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('safety-security')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
                >
                  Safety & Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('use-cases')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
                >
                  Use Cases
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="https://nexusforgeai.base44.app/Chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Try Demo
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground mb-4">
              <a
                href="mailto:SentinelAI@usa.com"
                className="hover:text-foreground transition-colors"
              >
                Contact Us
              </a>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nexus Forge AI. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-success fill-success" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hover:text-foreground transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
