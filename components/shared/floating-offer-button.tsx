import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FloatingOfferButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <Button
        asChild
        size="lg"
        className="h-13 rounded-full bg-wine px-6 text-white hover:bg-[#a82f53]"
      >
        <Link href="/#pricing-inquiry" className="text-white">
          Cere ofertă
        </Link>
      </Button>
    </div>
  );
}
