import { Menu, X } from "lucide-react";

interface MobileHeaderProps {
  open: boolean;
  onToggle: () => void;
}

export default function MobileHeader({ open, onToggle }: MobileHeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
      <span className="font-playfair text-lg font-semibold text-ink">
        Portfolio
      </span>
      <button
        type="button"
        onClick={onToggle}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
    </header>
  );
}
