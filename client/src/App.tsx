import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Network from "@/pages/Network";
import WhoWeServe from "@/pages/WhoWeServe";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Banking from "@/pages/Banking";
import CreatorEconomy from "@/pages/products/CreatorEconomy";
import SuperApps from "@/pages/products/SuperApps";
import RetailNetworks from "@/pages/products/RetailNetworks";
import MobileOperators from "@/pages/products/MobileOperators";
import MoneyTransferOperators from "@/pages/products/MoneyTransferOperators";
import Ewallets from "@/pages/products/Ewallets";
import EsimServices from "@/pages/products/EsimServices";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/who-we-serve/banking" component={Banking} />
      <Route path="/who-we-serve/creator-economy" component={CreatorEconomy} />
      <Route path="/who-we-serve/super-apps" component={SuperApps} />
      <Route path="/who-we-serve/retail-networks" component={RetailNetworks} />
      <Route path="/who-we-serve/mobile-operators" component={MobileOperators} />
      <Route path="/who-we-serve/money-transfer-operators" component={MoneyTransferOperators} />
      <Route path="/who-we-serve/ewallets" component={Ewallets} />
      <Route path="/who-we-serve/esim-services" component={EsimServices} />
      <Route path="/network" component={Network} />
      <Route path="/who-we-serve" component={WhoWeServe} />
      <Route path="/solutions" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsConditions} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
