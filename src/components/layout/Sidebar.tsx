import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile, navLinks } from "../../data/profile";

interface SidebarProps {
  activeId: string;
  open: boolean;
  onClose: () => void;
}

const socialIcons = {
  email: Mail,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  github: Github,
} as const;

export default function Sidebar({ activeId, open, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-ink/30 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden
      />

      <aside
        id="sidebar"
        className={`fixed left-0 top-0 z-50 flex h-full w-[300px] flex-col overflow-y-auto bg-sidebar px-6 pb-10 pt-12 transition-transform duration-500 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 text-center">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="mx-auto mb-6 h-[150px] w-[150px] rounded-full object-cover ring-4 ring-primary/20"
          />
          <h1 className="font-quicksand text-[22px] font-bold text-ink">
            <a href="#home">{profile.name}</a>
          </h1>
          <p className="mt-2 text-xs uppercase tracking-wide text-ink/65">
            {profile.role} in {profile.location}
          </p>

          <div className="mt-5 flex items-center justify-center gap-2">
            {profile.social.map((item) => {
              const Icon =
                socialIcons[item.id as keyof typeof socialIcons] ?? Mail;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.id === "email" ? undefined : "_blank"}
                  rel={item.id === "email" ? undefined : "noopener noreferrer"}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-primary/15 transition-all hover:bg-primary hover:text-white hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const active = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className={`nav-link block py-2 text-[13px] uppercase tracking-[0.3px] transition-colors duration-300 ${
                      active
                        ? "font-medium text-primary"
                        : "text-ink/65 hover:text-ink"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`nav-underline ${active ? "nav-underline-active" : ""}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <footer className="mt-8 text-center text-xs text-ink/45">
          <p>{profile.imageCredit}</p>
          <p className="mt-1">{profile.copyright}</p>
        </footer>
      </aside>
    </>
  );
}
