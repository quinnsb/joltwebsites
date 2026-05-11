export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-background/10 pb-12">
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-2xl mb-4 text-primary-foreground">Site Sprint Studio</h3>
            <p className="text-background/70 max-w-sm mb-6">
              Websites and landing pages for Bloomington-Normal service businesses.
            </p>
            <p className="text-sm text-background/50">Built locally in Central Illinois.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-foreground">Menu</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="text-background/70 hover:text-primary transition-colors text-sm" data-testid="footer-link-how">
                  How it Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="text-background/70 hover:text-primary transition-colors text-sm" data-testid="footer-link-packages">
                  Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('examples')} className="text-background/70 hover:text-primary transition-colors text-sm" data-testid="footer-link-examples">
                  Examples
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('free-teardown')} className="text-background/70 hover:text-primary transition-colors text-sm" data-testid="footer-link-teardown">
                  Free Teardown
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary-foreground">Contact</h4>
            <a href="mailto:hello@sitesprintstudio.com" className="text-background/70 hover:text-primary transition-colors text-sm block mb-2" data-testid="footer-link-email">
              hello@sitesprintstudio.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-background/40">
          <p>© {new Date().getFullYear()} Site Sprint Studio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Bloomington-Normal, IL</p>
        </div>
      </div>
    </footer>
  );
}
