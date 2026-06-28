import { closing, contact } from "@/lib/site";
import ContactForm from "./ContactForm";
import { Mail, Phone } from "./icons";

export default function Contact() {
  const c = closing;
  return (
    <div className="wrap">
      <section className="section" id="contact">
        <div className="cta-band reveal">
          <h2>
            {c.titleLine1}
            <br />
            <span className="accent">{c.titleLine2}</span>
          </h2>
          <p>{c.sub}</p>

          <div className="contact-grid">
            <div className="contact-methods">
              <a className="cm" href={`mailto:${contact.email}`}>
                <span className="cm-ic">
                  <Mail />
                </span>
                <span>
                  <small>Email us</small>
                  <b>{contact.email}</b>
                </span>
              </a>
              <a className="cm" href={`tel:${contact.phone}`}>
                <span className="cm-ic">
                  <Phone />
                </span>
                <span>
                  <small>Call us</small>
                  <b>{contact.phoneDisplay}</b>
                </span>
              </a>
              <div className="cm-note">{c.note}</div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
