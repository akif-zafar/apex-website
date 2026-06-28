"use client";

import { Sun, Moon } from "./icons";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const dark = root.classList.toggle("dark");
    try {
      localStorage.setItem("apex-theme", dark ? "dark" : "light");
    } catch {
      /* ignore (e.g. storage disabled) */
    }
  };

  return (
    <button
      className="icon-btn"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      type="button"
    >
      <Sun />
      <Moon />
    </button>
  );
}
