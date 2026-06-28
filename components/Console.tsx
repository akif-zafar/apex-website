import { consoleData } from "@/lib/site";
import { Icon, Mark } from "./icons";

export default function Console() {
  const d = consoleData;
  return (
    <div className="mock">
      <aside className="mk-side">
        <div className="mk-brand">
          <span className="l">
            <Mark />
          </span>
          <span>
            <b>{d.brand}</b>
            <small>{d.tag}</small>
          </span>
        </div>
        <div className="mk-seg">Overview</div>
        {d.nav.map((it) => (
          <div key={it.label} className={"mk-item" + (it.active ? " on" : "")}>
            <Icon name={it.icon} />
            {it.label}
            {it.count && <span className="ct">{it.count}</span>}
          </div>
        ))}
        <div className="mk-seg">Finance</div>
        {d.navFinance.map((it) => (
          <div key={it.label} className="mk-item">
            <Icon name={it.icon} />
            {it.label}
          </div>
        ))}
      </aside>

      <section className="mk-main">
        <div className="mk-head">
          <h3>Operations</h3>
          <span className="add">+ New ticket</span>
        </div>
        <div className="mk-stats">
          {d.stats.map((s) => (
            <div key={s.k} className="mk-card">
              <div className="k">{s.k}</div>
              <div className="v">
                {s.v}
                {s.unit && <small>{s.unit}</small>}
              </div>
            </div>
          ))}
        </div>
        <div className="mk-table">
          <div className="mk-tr h">
            <div>Client</div>
            <div>Service</div>
            <div>Status</div>
          </div>
          {d.rows.map((r) => (
            <div key={r.client} className="mk-tr">
              <div className="cl">{r.client}</div>
              <div className="sv">{r.service}</div>
              <span className={"pill " + r.status}>
                <span className="dot" />
                {r.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mk-foot">{d.footer}</div>
      </section>
    </div>
  );
}
