import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">This page could not be found.</p>
        <Link href="/">
          <Button className="btn-gradient rounded-full px-8">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
