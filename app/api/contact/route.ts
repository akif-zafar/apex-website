import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const message = (body.message || "").trim();

  // Honeypot — silently accept (don't tip off bots) but send nothing.
  if (body._gotcha) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  // Until your domain is verified in Resend, the sandbox sender below works.
  const from = process.env.CONTACT_FROM || "Apex Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact form not configured: set RESEND_API_KEY and CONTACT_TO.");
    return NextResponse.json(
      { error: "Our contact form isn't live yet — please email us directly for now." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
        text:
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Company: ${company || "—"}\n\n` +
          `${message}\n`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error", res.status, detail);
      return NextResponse.json(
        { error: "Couldn't send right now. Please try again, or email us directly." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Contact route error", err);
    return NextResponse.json(
      { error: "Couldn't send right now. Please try again, or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
