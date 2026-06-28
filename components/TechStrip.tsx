import { techStrip } from "@/lib/site";

export default function TechStrip() {
  return (
    <div className="strip">
      <div className="wrap">
        <div className="row">
          {techStrip.map((t) => (
            <b key={t}>{t}</b>
          ))}
        </div>
      </div>
    </div>
  );
}
