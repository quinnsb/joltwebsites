import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/Portfolio";
import { SeoLandingPage } from "@/pages/SeoLandingPage";
import { seoPages } from "@/data/seoPages";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemCards } from "@/components/ProblemCards";
import { SolutionCards } from "@/components/SolutionCards";
import { IndustryGrid } from "@/components/IndustryGrid";
import { PricingCards } from "@/components/PricingCards";
import { PortfolioBanner } from "@/components/PortfolioBanner";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TeardownForm } from "@/components/TeardownForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();
const seoRoutes = [...seoPages].sort((a, b) => b.slug.length - a.slug.length);

function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans text-foreground bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PortfolioBanner />
        <ProblemCards />
        <SolutionCards />
        <IndustryGrid />
        <PricingCards />
        <ProcessSteps />
        <TeardownForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      {seoRoutes.map((page) => (
        <Route key={page.slug} path={page.slug}>
          <SeoLandingPage page={page} />
        </Route>
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
