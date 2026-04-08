import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FloatingOfferButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <Button
        asChild
        size="lg"
        className="h-13 rounded-full bg-olive-deep px-6 text-ivory shadow-[0_18px_40px_rgba(96,74,54,0.22)] hover:bg-olive"
      >
        <Link href="/#pricing-inquiry">Cere ofertă</Link>
      </Button>
    </div>
  );
}
