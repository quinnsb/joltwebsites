import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollTo } from '@/lib/scrollTo';
import { useLocation } from 'wouter';
import { BrandMark } from '@/components/BrandMark';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleNavClick(id: string) {
    setIsMobileMenuOpen(false);
    scrollTo(id);
  }

  function handleLogoClick() {
    setIsMobileMenuOpen(false);
    setLocation('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navLinks = [
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'Packages', id: 'packages' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Examples', id: 'examples' },
    { label: "Who It's For", id: 'who-its-for' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button
          className="cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={handleLogoClick}
          data-testid="link-logo"
          type="button"
          aria-label="Jolt home"
        >
          <BrandMark />
        </button>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.href ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); setLocation(link.href!); setIsMobileMenuOpen(false); }}
                className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                data-testid={`link-portfolio`}
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id!)}
                className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                data-testid={`link-${link.id}`}
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Button
            type="button"
            onClick={() => handleNavClick('free-teardown')}
            data-testid="button-free-teardown-nav"
          >
            Free Teardown
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[56px] bg-black/20 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-2 z-50">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setLocation(link.href!); setIsMobileMenuOpen(false); }}
                  className="text-left py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-mobile-portfolio"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id!)}
                  className="text-left py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-mobile-${link.id}`}
                >
                  {link.label}
                </button>
              )
            )}
            <Button
              type="button"
              className="w-full mt-2"
              onClick={() => handleNavClick('free-teardown')}
              data-testid="button-free-teardown-mobile"
            >
              Free Teardown
            </Button>
          </div>
        </>
      )}
    </header>
  );
}
