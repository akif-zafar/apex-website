import { nav } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { HorizontalLogo } from "./icons";

export default function Nav() {
  return (
    <header className="nav" id="nav">
      <div className="inner">
        <a className="brand brand-logo" href="/" aria-label={`${nav.brandTop} ${nav.brandBottom} — home`}>
          <HorizontalLogo />
        </a>
        <nav className="links">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="actions">
          <ThemeToggle />
          <a className="btn btn-primary nav-cta" href={nav.cta.href}>
            {nav.cta.label}
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
