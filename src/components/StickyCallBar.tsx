import { Phone, MessageCircle } from "lucide-react";

const StickyCallBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
    <div className="grid grid-cols-2 shadow-2xl">
      <a
        href="tel:0868447778"
        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-semibold text-sm active:opacity-80 transition-opacity"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <a
        href="https://wa.me/353868447778"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-semibold text-sm active:opacity-80 transition-opacity"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  </div>
);

export default StickyCallBar;
