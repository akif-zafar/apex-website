import { nav } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Mark } from "./icons";

export default function Nav() {
  return (
    <header className="nav" id="nav">
      <div className="inner">
        <a className="brand" href="/">
          <span className="logo">
            <Mark />
          </span>
          {nav.brandTop}&nbsp;<span className="light">{nav.brandBottom}</span>
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
