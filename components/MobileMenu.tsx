"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close on Escape for accessibility.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        className={"menu-btn" + (open ? " open" : "")}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <>
          <div className="menu-scrim" onClick={() => setOpen(false)} />
          <div className="mobile-menu" role="menu">
            {nav.links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              className="btn btn-primary"
              href={nav.cta.href}
              onClick={() => setOpen(false)}
            >
              {nav.cta.label}
            </a>
          </div>
        </>
      )}
    </div>
  );
}
