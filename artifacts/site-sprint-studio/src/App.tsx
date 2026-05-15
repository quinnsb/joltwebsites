import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/Portfolio";
import { SeoLandingPage } from "@/pages/SeoLandingPage";
import { seoPages } from "@/data/seoPages";

import { HomeLanding } from "@/components/HomeLanding";

const queryClient = new QueryClient();
const seoRoutes = [...seoPages].sort((a, b) => b.slug.length - a.slug.length);

function Home() {
  return <HomeLanding />;
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
