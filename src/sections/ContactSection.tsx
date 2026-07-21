import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import SectionSideDecorations from "../components/effects/SectionSideDecorations";
import { contact, profile } from "../data/profile";

const socialIcons = {
  email: Mail,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  github: Github,
} as const;

export default function ContactSection() {
  return (
    <section id="contact" className="section-wrap relative overflow-hidden bg-sidebar/85 backdrop-blur-[2px]">
      <SectionSideDecorations variant={5} />
      <div className="content-inner relative z-10">
        <SectionHeading
          eyebrow={contact.eyebrow}
          heading={contact.heading}
        />
        <p className="mb-10 max-w-xl text-[15px] leading-relaxed">
          {contact.intro}
        </p>

        <div className="mb-10 space-y-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-ink/70 transition-colors hover:text-primary"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Phone</p>
              <a
                href={`tel:${profile.phone}`}
                className="text-sm text-ink/70 transition-colors hover:text-primary"
              >
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Address</p>
              <p className="text-sm text-ink/70">{profile.address}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {profile.social.map((item) => {
            const Icon =
              socialIcons[item.id as keyof typeof socialIcons] ?? Mail;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.id === "email" ? undefined : "_blank"}
                rel={item.id === "email" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 rounded-2xl border border-primary/10 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-glow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.label}
                  </span>
                  <span className="block text-sm text-ink/70 group-hover:text-ink">
                    Connect
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
