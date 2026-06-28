import type { IconName } from "@/lib/site";

export function Sun() {
  return (
    <svg className="sun" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

export function Moon() {
  return (
    <svg className="moon" viewBox="0 0 24 24">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function Mail() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function Phone() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z" />
    </svg>
  );
}

function Dashboard() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function Assets() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
      <path d="M3.3 7.3 12 12l8.7-4.7M12 12v9.5" />
    </svg>
  );
}

function Tickets() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z" />
      <path d="M13 6v12" />
    </svg>
  );
}

function Clients() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 7.5a3 3 0 0 1 0 5.6M20.5 20a5 5 0 0 0-3.5-4.7" />
    </svg>
  );
}

function Billing() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19" />
    </svg>
  );
}

function Shield() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2.5 4 5.5v5c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11v-5z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Wrench() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2z" />
    </svg>
  );
}

export function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "dashboard":
      return <Dashboard />;
    case "assets":
      return <Assets />;
    case "tickets":
      return <Tickets />;
    case "clients":
      return <Clients />;
    case "billing":
      return <Billing />;
    case "shield":
      return <Shield />;
    case "wrench":
      return <Wrench />;
    default:
      return null;
  }
}
