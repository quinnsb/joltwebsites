import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemCards } from "@/components/ProblemCards";
import { SolutionCards } from "@/components/SolutionCards";
import { IndustryGrid } from "@/components/IndustryGrid";
import { PricingCards } from "@/components/PricingCards";
import { ExampleRefreshes } from "@/components/ExampleRefreshes";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TeardownForm } from "@/components/TeardownForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans text-foreground bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemCards />
        <SolutionCards />
        <IndustryGrid />
        <PricingCards />
        <ExampleRefreshes />
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
