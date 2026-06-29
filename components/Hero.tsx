import { hero } from "@/lib/site";

export default function Hero() {
  return (
    <div className="wrap">
      <section className="hero">
        <div className="copy">
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
        {/* Image / product visual goes here later, below the copy. */}
      </section>
    </div>
  );
}
