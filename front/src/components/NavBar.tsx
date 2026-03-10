import { MonitorPlay, Instagram, TypeOutline } from "lucide-react";
import { NavLink } from "./NavLink";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo esquerda */}
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold text-primary">
            Imperador Bey
          </span>
        </div>

        {/* Centro */}
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className="font-display text-muted-foreground text-lg font-bold hover:text-primary transition"
            activeClassName="text-primary"
          >
            Recomendações
          </NavLink>
        </nav>

        {/* Direita */}
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-primary transition"
          >
            <MonitorPlay size={32} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Instagram size={32} />
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            className="hover:text-primary transition"
          >
            <TypeOutline size={32} />
          </a>
        </div>
      </div>
    </header>
  );
}
