import { hero } from "@/lib/site";
import Console from "./Console";

export default function Hero() {
  return (
    <div className="wrap">
      <section className="hero">
        <div className="copy">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1>
            {hero.titleLine1}
            <br />
            <span className="accent">{hero.titleLine2}</span>
          </h1>
          <p className="sub">{hero.sub}</p>
          <div className="ctas">
            <a className="btn btn-primary btn-lg" href={hero.primary.href}>
              {hero.primary.label}
            </a>
            <a className="btn btn-ghost btn-lg" href={hero.secondary.href}>
              {hero.secondary.label}
            </a>
          </div>
          <div className="trust">
            <span className="av">
              <span />
              <span />
              <span />
            </span>
            {hero.trust}
          </div>
        </div>

        <div className="visual">
          <Console />
        </div>
      </section>
    </div>
  );
}
