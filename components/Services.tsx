import { services } from "@/lib/site";
import { Icon, Check } from "./icons";

export default function Services() {
  const s = services;
  return (
    <div className="wrap">
      <section className="section" id="services">
        <div className="shead reveal">
          <div className="tag">{s.tag}</div>
          <h2>{s.title}</h2>
          <p>{s.intro}</p>
          <div className="chips">
            {s.chips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>

        <div className="split">
          {s.cards.map((card) => (
            <div key={card.title} className="scard reveal">
              <div className="ic">
                <Icon name={card.icon} />
              </div>
              <div className="kicker">{card.kicker}</div>
              <h3>{card.title}</h3>
              <p className="desc">{card.desc}</p>
              <ul className="feat">
                {card.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a className="more" href={card.more.href}>
                {card.more.label}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
