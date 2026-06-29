import { footer, nav, contact } from "@/lib/site";
import { HorizontalLogo } from "./icons";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <a className="brand brand-logo" href="/" aria-label={`${nav.brandTop} ${nav.brandBottom} — home`}>
              <HorizontalLogo />
            </a>
            <p>{footer.blurb}</p>
          </div>
          {footer.cols.map((col) => (
            <div key={col.title} className="fcol">
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="fbar">
          <span>
            {footer.copyright}
            <span className="abn"> · ABN {contact.abn}</span>
          </span>
          <span className="made">{footer.made}</span>
        </div>
      </div>
    </footer>
  );
}
