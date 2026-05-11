import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'Packages', id: 'packages' },
    { label: 'Examples', id: 'examples' },
    { label: "Who It's For", id: 'who-its-for' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="font-display font-bold text-xl tracking-tight cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-testid="link-logo"
        >
          Site Sprint Studio
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => scrollTo('free-teardown')} data-testid="button-free-teardown-nav">
            Free Teardown
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left py-2 text-lg font-medium text-muted-foreground hover:text-foreground"
              data-testid={`link-mobile-${link.id}`}
            >
              {link.label}
            </button>
          ))}
          <Button className="w-full mt-2" onClick={() => scrollTo('free-teardown')} data-testid="button-free-teardown-mobile">
            Free Teardown
          </Button>
        </div>
      )}
    </header>
  );
}
