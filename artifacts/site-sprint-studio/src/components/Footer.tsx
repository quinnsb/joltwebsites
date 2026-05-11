import { scrollTo } from '@/lib/scrollTo';
import { useLocation } from 'wouter';
import { BrandMark } from '@/components/BrandMark';

export function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 border-b border-background/10 pb-10">
          <div className="lg:col-span-2">
            <BrandMark inverted className="mb-4" />
            <p className="text-background/65 max-w-sm mb-5 text-sm leading-relaxed">
              Websites and landing pages for local service businesses.
            </p>
            <p className="text-xs text-background/40">Built locally in Central Illinois.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-foreground text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'How it Works', id: 'how-it-works' },
                { label: 'Packages', id: 'packages' },
                { label: 'Examples', id: 'examples' },
                { label: 'Free Teardown', id: 'free-teardown' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-background/65 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-background/30 rounded"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setLocation('/portfolio')}
                  className="text-background/65 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-background/30 rounded"
                  data-testid="footer-link-portfolio"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-foreground text-sm uppercase tracking-wider">Contact</h4>
            <a
              href="mailto:hello@joltwebsites.com"
              className="text-background/65 hover:text-background transition-colors text-sm block mb-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-background/30 rounded"
              data-testid="footer-link-email"
            >
              hello@joltwebsites.com
            </a>
            <p className="text-background/40 text-xs mt-4">Central Illinois</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-background/30 gap-2">
          <p>&copy; {new Date().getFullYear()} Jolt. All rights reserved.</p>
          <p>joltwebsites.com</p>
        </div>
      </div>
    </footer>
  );
}
